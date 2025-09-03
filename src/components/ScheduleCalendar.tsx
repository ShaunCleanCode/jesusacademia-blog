'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Coffee, 
  BookOpen, 
  Utensils, 
  Users, 
  Star, 
  CheckCircle, 
  Mountain,
  Church
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface TimeSlot {
  time: string;
  activity: string;
  type: 'devotion' | 'meal' | 'lecture' | 'break' | 'free' | 'orientation' | 'fellowship' | 'worship' | 'testimony';
  icon?: React.ReactNode;
}

interface DaySchedule {
  day: string;
  date: string;
  slots: TimeSlot[];
  isSpecial?: boolean;
}

const scheduleData: DaySchedule[] = [
  {
    day: "Day 1",
    date: "도착일",
    isSpecial: true,
    slots: [
      { time: "~17:00", activity: "자유 일정", type: "free", icon: <Star className="w-4 h-4" /> },
      { time: "17:00-18:00", activity: "오리엔테이션", type: "orientation", icon: <CheckCircle className="w-4 h-4" /> },
      { time: "18:00-19:30", activity: "저녁식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "19:30-21:00", activity: "교제 시간", type: "fellowship", icon: <Users className="w-4 h-4" /> }
    ]
  },
  {
    day: "Day 2",
    date: "강의일",
    slots: [
      { time: "07:30-08:30", activity: "경건회", type: "devotion", icon: <Church className="w-4 h-4" /> },
      { time: "08:30-09:30", activity: "아침식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "09:30-11:00", activity: "1차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "11:00-11:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "11:30-13:00", activity: "2차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "13:00-15:00", activity: "점심식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "15:00-16:30", activity: "3차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "16:30-17:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "17:30-19:00", activity: "4차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "19:00-20:30", activity: "저녁식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "20:30~", activity: "간증 및 자유시간", type: "testimony" }
    ]
  },
  {
    day: "Day 3",
    date: "강의일",
    slots: [
      { time: "07:30-08:30", activity: "경건회", type: "devotion", icon: <Church className="w-4 h-4" /> },
      { time: "08:30-09:30", activity: "아침식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "09:30-11:00", activity: "1차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "11:00-11:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "11:30-13:00", activity: "2차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "13:00-15:00", activity: "점심식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "15:00-16:30", activity: "3차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "16:30-17:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "17:30-19:00", activity: "4차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "19:00-20:30", activity: "저녁식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "20:30~", activity: "간증 및 자유시간", type: "testimony" }
    ]
  },
  {
    day: "Day 4",
    date: "강의일",
    slots: [
      { time: "07:30-08:30", activity: "경건회", type: "devotion", icon: <Church className="w-4 h-4" /> },
      { time: "08:30-09:30", activity: "아침식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "09:30-11:00", activity: "1차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "11:00-11:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "11:30-13:00", activity: "2차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "13:00-15:00", activity: "점심식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "15:00-16:30", activity: "3차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "16:30-17:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "17:30-19:00", activity: "4차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "19:00-20:30", activity: "저녁식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "20:30~", activity: "간증 및 자유시간", type: "testimony" }
    ]
  },
  {
    day: "Day 5",
    date: "강의일",
    slots: [
      { time: "07:30-08:30", activity: "경건회", type: "devotion", icon: <Church className="w-4 h-4" /> },
      { time: "08:30-09:30", activity: "아침식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "09:30-11:00", activity: "1차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "11:00-11:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "11:30-13:00", activity: "2차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "13:00-15:00", activity: "점심식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "15:00-16:30", activity: "3차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "16:30-17:30", activity: "휴식", type: "break", icon: <Coffee className="w-4 h-4" /> },
      { time: "17:30-19:00", activity: "4차 강의", type: "lecture", icon: <BookOpen className="w-4 h-4" /> },
      { time: "19:00-20:30", activity: "저녁식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "20:30~", activity: "간증 및 자유시간", type: "testimony" }
    ]
  },
  {
    day: "Day 6",
    date: "자유일",
    isSpecial: true,
    slots: [
      { time: "전일", activity: "자유 일정", type: "free", icon: <Star className="w-4 h-4" /> }
    ]
  },
  {
    day: "Day 7",
    date: "출발일",
    isSpecial: true,
    slots: [
      { time: "11:00-13:00", activity: "예배", type: "worship", icon: <Mountain className="w-4 h-4" /> },
      { time: "13:00-15:00", activity: "점심식사", type: "meal", icon: <Utensils className="w-4 h-4" /> },
      { time: "15:00~", activity: "자유 일정", type: "free", icon: <Star className="w-4 h-4" /> }
    ]
  }
];

const getTypeStyles = (type: string, isDark: boolean) => {
  if (isDark) {
    const styles = {
      devotion: "bg-purple-900/30 text-purple-200 border-purple-700/50",
      meal: "bg-orange-900/30 text-orange-200 border-orange-700/50",
      lecture: "bg-blue-900/30 text-blue-200 border-blue-700/50",
      break: "bg-gray-800/50 text-gray-300 border-gray-600/50",
      free: "bg-yellow-900/30 text-yellow-200 border-yellow-700/50",
      orientation: "bg-green-900/30 text-green-200 border-green-700/50",
      fellowship: "bg-indigo-900/30 text-indigo-200 border-indigo-700/50",
      worship: "bg-red-900/30 text-red-200 border-red-700/50",
      testimony: "bg-pink-900/30 text-pink-200 border-pink-700/50"
    };
    return styles[type as keyof typeof styles] || "bg-gray-800/50 text-gray-300 border-gray-600/50";
  } else {
    const styles = {
      devotion: "bg-purple-50 text-purple-700 border-purple-200/60",
      meal: "bg-orange-50 text-orange-700 border-orange-200/60",
      lecture: "bg-blue-50 text-blue-700 border-blue-200/60",
      break: "bg-gray-50 text-gray-600 border-gray-200/60",
      free: "bg-yellow-50 text-yellow-700 border-yellow-200/60",
      orientation: "bg-green-50 text-green-700 border-green-200/60",
      fellowship: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
      worship: "bg-red-50 text-red-700 border-red-200/60",
      testimony: "bg-pink-50 text-pink-700 border-pink-200/60"
    };
    return styles[type as keyof typeof styles] || "bg-gray-50 text-gray-600 border-gray-200/60";
  }
};

const TimeSlot: React.FC<{ slot: TimeSlot }> = ({ slot }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-3 rounded-lg border-l-4 ${getTypeStyles(slot.type, isDark)} mb-2 hover:shadow-md transition-all duration-200`}
    >
      <div className="flex items-center gap-2">
        {slot.icon && (
          <div className="flex-shrink-0">
            {slot.icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium opacity-75">{slot.time}</div>
          <div className="text-sm font-semibold truncate">{slot.activity}</div>
        </div>
      </div>
    </motion.div>
  );
};

const DayCard: React.FC<{ day: DaySchedule; index: number }> = ({ day, index }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // 각 날짜별 상세 일정 링크 생성
  const getDayLink = (dayNumber: string) => {
    const dayMap: { [key: string]: string } = {
      'Day 1': 'mon',
      'Day 2': 'tue', 
      'Day 3': 'wed',
      'Day 4': 'thu',
      'Day 5': 'fri',
      'Day 6': 'sat',
      'Day 7': 'sun'
    };
    return `/programs/schedule?day=${dayMap[dayNumber] || 'mon'}`;
  };
  
  return (
    <motion.a
      href={getDayLink(day.day)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`block rounded-xl shadow-lg border-2 p-4 min-h-[400px] cursor-pointer group ${
        day.isSpecial 
          ? isDark 
            ? 'border-blue-500/50 bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-purple-900/30 hover:from-blue-900/40 hover:via-indigo-900/40 hover:to-purple-900/40' 
            : 'border-blue-400/60 bg-gradient-to-br from-blue-100/80 via-indigo-100/80 to-purple-100/80 hover:from-blue-100 hover:via-indigo-100 hover:to-purple-100'
          : isDark
            ? 'bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70'
            : 'bg-white/80 border-gray-200/60 hover:border-blue-300/60 hover:bg-white'
      } transition-all duration-300 hover:shadow-xl backdrop-blur-sm`}
    >
      <div className="text-center mb-4">
        <h3 className={`text-lg font-bold ${
          day.isSpecial 
            ? isDark ? 'text-blue-200' : 'text-blue-700'
            : isDark ? 'text-white' : 'text-gray-800'
        } group-hover:scale-105 transition-transform duration-200`}>
          {day.day}
        </h3>
        <p className={`text-sm ${
          day.isSpecial 
            ? isDark ? 'text-blue-300/80' : 'text-blue-600'
            : isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {day.date}
        </p>
      </div>
      
      <div className="space-y-2">
        {day.slots.map((slot, slotIndex) => (
          <TimeSlot key={slotIndex} slot={slot} />
        ))}
      </div>
      
      {/* 클릭 힌트 */}
      <div className="mt-4 text-center">
        <div className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          isDark ? 'text-blue-300' : 'text-blue-600'
        }`}>
          클릭하여 상세보기 →
        </div>
      </div>
    </motion.a>
  );
};

export default function ScheduleCalendar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>
          예수서원 캠프 일정
        </h2>
        <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
          7일간의 풍성한 프로그램을 확인해보세요
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
        {scheduleData.map((day, index) => (
          <DayCard key={index} day={day} index={index} />
        ))}
      </div>

      {/* 범례 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className={`mt-8 rounded-xl p-6 backdrop-blur-sm ${
          isDark 
            ? 'bg-gray-800/50 border border-gray-700/50' 
            : 'bg-gray-50/80 border border-gray-200/60'
        }`}
      >
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 text-center`}>
          활동 구분
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {[
            { type: 'devotion', label: '경건회' },
            { type: 'meal', label: '식사' },
            { type: 'lecture', label: '강의' },
            { type: 'break', label: '휴식' },
            { type: 'free', label: '자유시간' },
            { type: 'orientation', label: '오리엔테이션' },
            { type: 'fellowship', label: '교제' },
            { type: 'worship', label: '예배' },
            { type: 'testimony', label: '간증' }
          ].map((item, index) => (
            <div key={index} className={`px-3 py-2 rounded-lg text-xs font-medium text-center ${getTypeStyles(item.type, isDark)}`}>
              {item.label}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 상세 일정 보기 버튼 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="text-center mt-8"
      >
        <a 
          href="/programs/schedule"
          className={`inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
          }`}
        >
          📅 전체 상세 일정 보기
        </a>
      </motion.div>
    </div>
  );
}
