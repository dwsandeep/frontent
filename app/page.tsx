import Header from '@/components/Header';
import HomePage from './pages/HomePage';
import AppStoreFooter from '@/components/AppStoreFooter';

export const metadata = {
  title: 'Drivr - Professional Driver Rental Services',
  description: 'Hire professional drivers for your personal vehicle. Hourly, daily, and weekly rates available. Vetted, experienced chauffeurs for safe and comfortable journeys.',
  keywords: ['driver rental', 'chauffeur service', 'personal driver', 'car driver hire', 'professional driver'],
};

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <AppStoreFooter />
    </>
  );
}
