'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { performanceAnalytics, analyzeBundleSize, monitorMemoryUsage } from '@/lib/performance/analytics';
import { useTheme } from '@/contexts/ThemeContext';

interface PerformanceMonitorProps {
  show?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  show = false,
  position = 'bottom-right'
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(show);
  const [metrics, setMetrics] = useState({
    performanceScore: 0,
    loadTime: 0,
    memoryUsage: null as any,
    bundleSize: null as any,
  });

  useEffect(() => {
    const updateMetrics = () => {
      const perfScore = performanceAnalytics.getPerformanceScore();
      const perfMetrics = performanceAnalytics.getMetrics();
      const memory = monitorMemoryUsage();
      const bundle = analyzeBundleSize();

      setMetrics({
        performanceScore: perfScore,
        loadTime: perfMetrics.loadTime,
        memoryUsage: memory,
        bundleSize: bundle,
      });
    };

    // 초기 메트릭 수집
    updateMetrics();

    // 주기적으로 메트릭 업데이트
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return AlertTriangle;
    return AlertTriangle;
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      default:
        return 'bottom-4 right-4';
    }
  };

  if (!isVisible) return null;

  const ScoreIcon = getScoreIcon(metrics.performanceScore);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={`fixed ${getPositionClasses()} z-50`}
      >
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-4 min-w-[300px]`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Activity className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                성능 모니터
              </h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className={`p-1 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                성능 점수
              </span>
              <div className="flex items-center space-x-2">
                <ScoreIcon className={`w-4 h-4 ${getScoreColor(metrics.performanceScore)}`} />
                <span className={`text-lg font-bold ${getScoreColor(metrics.performanceScore)}`}>
                  {metrics.performanceScore}/100
                </span>
              </div>
            </div>
            <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2`}>
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  metrics.performanceScore >= 80
                    ? 'bg-green-500'
                    : metrics.performanceScore >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${metrics.performanceScore}%` }}
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                로드 시간
              </div>
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {metrics.loadTime.toFixed(0)}ms
              </div>
            </div>

            {metrics.memoryUsage && (
              <div>
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  메모리 사용량
                </div>
                <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {metrics.memoryUsage.used}MB
                </div>
              </div>
            )}

            {metrics.bundleSize && (
              <div>
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  번들 크기
                </div>
                <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {metrics.bundleSize.total}개
                </div>
              </div>
            )}

            <div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                상태
              </div>
              <div className={`font-semibold ${
                metrics.performanceScore >= 80
                  ? 'text-green-500'
                  : metrics.performanceScore >= 60
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}>
                {metrics.performanceScore >= 80
                  ? '우수'
                  : metrics.performanceScore >= 60
                  ? '양호'
                  : '개선 필요'}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {metrics.performanceScore < 80 && (
            <div className={`mt-4 p-3 rounded-lg ${
              isDark ? 'bg-yellow-900/20 border border-yellow-700' : 'bg-yellow-50 border border-yellow-200'
            }`}>
              <div className="flex items-start space-x-2">
                <AlertTriangle className={`w-4 h-4 mt-0.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <div className="text-xs">
                  <div className={`font-medium ${isDark ? 'text-yellow-300' : 'text-yellow-800'} mb-1`}>
                    성능 개선 권장사항
                  </div>
                  <ul className={`space-y-1 ${isDark ? 'text-yellow-200' : 'text-yellow-700'}`}>
                    {metrics.loadTime > 3000 && (
                      <li>• 이미지 최적화 및 지연 로딩 적용</li>
                    )}
                    {metrics.memoryUsage && metrics.memoryUsage.usage > 70 && (
                      <li>• 메모리 사용량 최적화</li>
                    )}
                    {metrics.bundleSize && metrics.bundleSize.total > 20 && (
                      <li>• 번들 크기 최적화</li>
                    )}
                    <li>• 코드 스플리팅 적용</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// 개발 환경에서만 표시되는 성능 모니터 토글
export const PerformanceMonitorToggle: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 개발 환경에서만 표시
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        title="성능 모니터 토글"
      >
        <Zap className="w-5 h-5" />
      </button>
      <PerformanceMonitor show={isVisible} />
    </>
  );
};
