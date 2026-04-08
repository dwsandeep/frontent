import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AppStoreFooter from '@/components/AppStoreFooter';

export const metadata = {
  title: 'FAQ - Professional Driver Rental Services',
  description: 'Find answers to common questions about hiring professional drivers, booking process, pricing, and service details. Get all the information you need.',
  keywords: ['driver FAQ', 'chauffeur questions', 'driver rental help', 'booking questions', 'driver service info'],
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQSection />
      <AppStoreFooter />
    </>
  );
}
