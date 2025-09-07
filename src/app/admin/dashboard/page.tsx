import React from 'react';
import { Metadata } from 'next';
import DashboardClient from './DashboardClient';

export const metadata: Metadata = {
  title: '관리자 대시보드',
  description: '예수서원 블로그 관리자 대시보드',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboard() {
  return <DashboardClient />;
}
