import Header from '@/components/Header';
import SignupPage from '../pages/SignupPage';
import AppStoreFooter from '@/components/AppStoreFooter';

export const metadata = {
  title: 'Sign Up - Drivr Customer Registration',
  description: 'Create your Drivr customer account. Start booking professional drivers for your personal vehicle. Quick and easy registration process.',
  keywords: ['customer signup', 'driver booking registration', 'user account create', 'drivr register'],
};

export default function Signup() {
  return (
    <>
      <Header />
      <SignupPage />
      <AppStoreFooter />
    </>
  );
}
