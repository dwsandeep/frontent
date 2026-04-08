import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import AppStoreFooter from '@/components/AppStoreFooter';

export const metadata = {
  title: 'Pricing - Professional Driver Rental Rates',
  description: 'Transparent and affordable pricing for professional driver services. Hourly, daily, and weekly rates available. No hidden fees, just quality service.',
  keywords: ['driver pricing', 'chauffeur rates', 'driver rental cost', 'hourly driver rates', 'professional driver fees'],
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingSection />
      <AppStoreFooter />
    </>
  );
}
