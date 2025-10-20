"use client";

import { useState, useEffect } from 'react';
import { TrendingUp, Leaf, Award, Target, Calendar, BarChart3 } from 'lucide-react';
import { userAnalyticsService } from '@/lib/api/userServices';
import type { EcoImpact } from '@/types/user';

export default function AnalyticsPage() {
  const [ecoImpact, setEcoImpact] = useState<EcoImpact | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<'week' | 'month' | 'year' | 'all-time'>('month');

  const fetchEcoImpact = async () => {
    try {
      setLoading(true);
      const data = await userAnalyticsService.getEcoImpact(period);
      setEcoImpact(data);
    } catch (error) {
      console.error('Failed to fetch eco impact:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEcoImpact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-gradient-to-br from-yellow-400 to-orange-500';
      case 'epic': return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'rare': return 'bg-gradient-to-br from-blue-500 to-cyan-500';
      case 'common': return 'bg-gradient-to-br from-gray-400 to-gray-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!ecoImpact) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Eco Impact Analytics</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Track your environmental contribution
            </p>
          </div>
          
          {/* Period Selector */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="all-time">All Time</option>
          </select>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Hero Stats */}
        <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Contribution Score</h2>
              <p className="text-green-100">Keep up the great work!</p>
            </div>
            <div className="text-6xl font-bold">{ecoImpact.stats.contributionScore}</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-green-100 mb-1">Waste Collected</p>
              <p className="text-2xl font-bold">{ecoImpact.stats.wasteCollected} kg</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-green-100 mb-1">Recycling Rate</p>
              <p className="text-2xl font-bold">{ecoImpact.stats.recyclingRate}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-green-100 mb-1">CO₂ Saved</p>
              <p className="text-2xl font-bold">{ecoImpact.stats.co2Saved} kg</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-green-100 mb-1">Trees Equivalent</p>
              <p className="text-2xl font-bold">{ecoImpact.stats.treesEquivalent}</p>
            </div>
          </div>
        </div>

        {/* Area Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            Your Area Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Area</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{ecoImpact.areaStats.areaName}</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Cleanliness Score</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {ecoImpact.areaStats.cleanlinessScore}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                +{ecoImpact.areaStats.improvement}% improvement
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">City Rank</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                #{ecoImpact.areaStats.rank}
              </p>
            </div>
          </div>
        </div>

        {/* History Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
            Contribution History
          </h3>
          <div className="space-y-4">
            {ecoImpact.history.map((entry, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600 dark:text-gray-400">
                  {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Waste: {entry.wasteCollected} kg
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Recycling: {entry.recyclingRate}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                      style={{ width: `${entry.recyclingRate}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-yellow-600" />
            Achievements Unlocked
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ecoImpact.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`${getRarityColor(achievement.rarity)} rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform`}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-sm text-white/90 mb-3">{achievement.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded capitalize">
                    {achievement.rarity}
                  </span>
                  <span>
                    {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Environmental Impact */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-green-600" />
              Environmental Impact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Carbon Footprint Reduced</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {ecoImpact.stats.co2Saved} kg CO₂
                  </p>
                </div>
                <div className="text-4xl">🌍</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Trees Planted Equivalent</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {ecoImpact.stats.treesEquivalent} trees
                  </p>
                </div>
                <div className="text-4xl">🌳</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Waste Diverted from Landfill</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {ecoImpact.stats.wasteCollected} kg
                  </p>
                </div>
                <div className="text-4xl">♻️</div>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
              Community Impact
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Your Contribution</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  Top {Math.round((ecoImpact.areaStats.rank / 100) * 100)}%
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  in your area
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Area Improvement</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  +{ecoImpact.areaStats.improvement}%
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  cleanliness score increase
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Recycling Rate</p>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                  {ecoImpact.stats.recyclingRate}%
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  above city average
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Keep Making a Difference!</h3>
          <p className="text-blue-100 mb-6">
            Your actions are helping create a cleaner, greener community. Continue reporting issues and recycling to increase your impact.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Share Your Impact
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors">
              View Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
