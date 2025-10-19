"use client";

import { useState } from 'react';
import { Brain, TrendingUp, AlertTriangle, Zap, Target } from 'lucide-react';
import { mockPredictions } from '@/lib/api/hqMockData';
import type { AIPrediction } from '@/types/hq';

export default function AIInsights() {
  const [predictions, setPredictions] = useState<AIPrediction[]>(mockPredictions);
  const [typeFilter, setTypeFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');

  const filteredPredictions = predictions.filter(p => {
    const matchesType = typeFilter === 'all' || p.type === typeFilter;
    const matchesSeverity = severityFilter === 'all' || p.severity === severityFilter;
    return matchesType && matchesSeverity;
  });

  const stats = {
    total: predictions.length,
    critical: predictions.filter(p => p.severity === 'Critical').length,
    high: predictions.filter(p => p.severity === 'High').length,
    avgConfidence: Math.round(predictions.reduce((sum, p) => sum + p.confidence, 0) / predictions.length),
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-600" />
            AI Insights & Predictions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Machine learning-powered predictions and recommendations
          </p>
        </div>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-purple-700 dark:text-purple-400">Total Predictions</span>
            <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">{stats.total}</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-red-700 dark:text-red-400">Critical Alerts</span>
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
          <div className="text-2xl font-bold text-red-700 dark:text-red-400">{stats.critical}</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-orange-700 dark:text-orange-400">High Priority</span>
            <Zap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">{stats.high}</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-blue-700 dark:text-blue-400">Avg Confidence</span>
            <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{stats.avgConfidence}%</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Prediction Types</option>
            <option value="Overflow">Overflow Predictions</option>
            <option value="Route Inefficiency">Route Inefficiency</option>
            <option value="Sensor Anomaly">Sensor Anomalies</option>
            <option value="Maintenance">Maintenance Needs</option>
          </select>
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Severity Levels</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Predictions Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPredictions.map((prediction) => (
          <div
            key={prediction.id}
            className={`bg-white dark:bg-gray-800 border rounded-lg p-6 ${
              prediction.severity === 'Critical' ? 'border-red-300 dark:border-red-800' :
              prediction.severity === 'High' ? 'border-orange-300 dark:border-orange-800' :
              'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  prediction.type === 'Overflow' ? 'bg-red-100 dark:bg-red-900/30' :
                  prediction.type === 'Route Inefficiency' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  prediction.type === 'Sensor Anomaly' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  {prediction.type === 'Overflow' && <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                  {prediction.type === 'Route Inefficiency' && <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  {prediction.type === 'Sensor Anomaly' && <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                  {prediction.type === 'Maintenance' && <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{prediction.type}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      prediction.severity === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      prediction.severity === 'High' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                      prediction.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                    }`}>
                      {prediction.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{prediction.region} • {prediction.location}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{prediction.confidence}%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Confidence</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">Predicted Time</div>
                <div className="text-sm text-gray-900 dark:text-white">
                  {new Date(prediction.predictedTime).toLocaleString()}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">Recommendation</div>
                <div className="text-sm text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                  💡 {prediction.recommendation}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">Affected Assets</div>
                <div className="flex flex-wrap gap-2">
                  {prediction.affectedAssets.map((asset, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {asset}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                  Take Action
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Model Info */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Model Information</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Our machine learning models analyze historical data, real-time sensor readings, and operational patterns to predict potential issues before they occur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Model Accuracy</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">94.2%</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Last Training</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">2 days ago</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Data Points Analyzed</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">2.4M+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
