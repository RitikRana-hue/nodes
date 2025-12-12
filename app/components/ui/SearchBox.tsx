"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp } from 'lucide-react';

interface SearchResult {
    id: string;
    title: string;
    description: string;
    category: string;
    url: string;
}

interface SearchBoxProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    onResultSelect?: (result: SearchResult) => void;
    results?: SearchResult[];
    loading?: boolean;
    showRecentSearches?: boolean;
    showTrending?: boolean;
    className?: string;
}

export default function SearchBox({
    placeholder = "Search...",
    onSearch,
    onResultSelect,
    results = [],
    loading = false,
    showRecentSearches = true,
    showTrending = true,
    className = ''
}: SearchBoxProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mock trending searches
    const trendingSearches = [
        'Smart waste management',
        'IoT sensors',
        'Route optimization',
        'Sustainability solutions'
    ];

    useEffect(() => {
        // Load recent searches from localStorage
        const saved = localStorage.getItem('recentSearches');
        if (saved) {
            setRecentSearches(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (searchQuery: string) => {
        if (searchQuery.trim()) {
            // Add to recent searches
            const newRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
            setRecentSearches(newRecent);
            localStorage.setItem('recentSearches', JSON.stringify(newRecent));

            onSearch?.(searchQuery);
            setIsOpen(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setIsOpen(true);
        onSearch?.(value);
    };

    const handleResultClick = (result: SearchResult) => {
        setQuery(result.title);
        setIsOpen(false);
        onResultSelect?.(result);
    };

    const clearSearch = () => {
        setQuery('');
        setIsOpen(false);
        inputRef.current?.focus();
    };

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Search Input */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(query);
                        } else if (e.key === 'Escape') {
                            setIsOpen(false);
                        }
                    }}
                    className="
                        w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        bg-white shadow-sm transition-all duration-200
                        placeholder-gray-500 text-gray-900
                    "
                    placeholder={placeholder}
                />
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="
                            absolute top-full left-0 right-0 mt-2 bg-white rounded-xl
                            shadow-2xl border border-gray-200 overflow-hidden z-50
                            max-h-96 overflow-y-auto
                        "
                    >
                        {loading && (
                            <div className="p-4 text-center">
                                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                                <p className="text-sm text-gray-500 mt-2">Searching...</p>
                            </div>
                        )}

                        {!loading && query && results.length > 0 && (
                            <div>
                                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        Search Results
                                    </p>
                                </div>
                                {results.map((result) => (
                                    <motion.button
                                        key={result.id}
                                        onClick={() => handleResultClick(result)}
                                        className="
                                            w-full px-4 py-3 text-left hover:bg-gray-50
                                            border-b border-gray-100 last:border-b-0
                                            transition-colors duration-150
                                        "
                                        whileHover={{ backgroundColor: '#f9fafb' }}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {result.title}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    {result.description}
                                                </p>
                                            </div>
                                            <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                                                {result.category}
                                            </span>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {!loading && query && results.length === 0 && (
                            <div className="p-4 text-center">
                                <p className="text-sm text-gray-500">No results found for &ldquo;{query}&rdquo;</p>
                            </div>
                        )}

                        {!loading && !query && (
                            <div>
                                {showRecentSearches && recentSearches.length > 0 && (
                                    <div>
                                        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                Recent Searches
                                            </p>
                                        </div>
                                        {recentSearches.map((search, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setQuery(search);
                                                    handleSearch(search);
                                                }}
                                                className="
                                                    w-full px-4 py-3 text-left hover:bg-gray-50
                                                    border-b border-gray-100 last:border-b-0
                                                    transition-colors duration-150
                                                "
                                            >
                                                <p className="text-sm text-gray-700">{search}</p>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {showTrending && (
                                    <div>
                                        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide flex items-center">
                                                <TrendingUp className="w-3 h-3 mr-1" />
                                                Trending
                                            </p>
                                        </div>
                                        {trendingSearches.map((search, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setQuery(search);
                                                    handleSearch(search);
                                                }}
                                                className="
                                                    w-full px-4 py-3 text-left hover:bg-gray-50
                                                    border-b border-gray-100 last:border-b-0
                                                    transition-colors duration-150
                                                "
                                            >
                                                <p className="text-sm text-gray-700">{search}</p>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}