// Core interfaces for Jesus Academia Program System

// Program Overview Interface
export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  category: 'camp' | 'lecture' | 'workshop' | 'retreat';
  imageUrl?: string;
  featured?: boolean;
}

// Schedule Session Interface
export interface ScheduleSession {
  id: string;
  day: 'tue' | 'wed' | 'thu' | 'fri';
  startTime: string;           // "07:30"
  endTime: string;             // "08:30"
  title: string;
  type: 'lecture' | 'meal' | 'break' | 'worship' | 'other';
  description?: string;
  speaker?: string;
  location?: string;
  scripture?: string[];        // Bible verses
  references?: string[];       // Academic references
  category?: 'theology' | 'philosophy' | 'literature' | 'science';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

// Schedule Data Structure
export interface ScheduleData {
  tue: ScheduleSession[];
  wed: ScheduleSession[];
  thu: ScheduleSession[];
  fri: ScheduleSession[];
  metadata: {
    totalSessions: number;
    totalLectures: number;
    totalHours: number;
    categories: string[];
  };
}

// Day type for easier usage
export type Day = 'tue' | 'wed' | 'thu' | 'fri';

// Session type for filtering
export type SessionType = 'lecture' | 'meal' | 'break' | 'worship' | 'other';

// Category type for academic classification
export type Category = 'theology' | 'philosophy' | 'literature' | 'science';

// Difficulty level for sessions
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
