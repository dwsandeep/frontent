import Header from '@/components/Header';
import LoginPage from '../pages/LoginPage';
import AppStoreFooter from '@/components/AppStoreFooter';

export const metadata = {
  title: 'Login - Drivr Customer Portal',
  description: 'Login to your Drivr customer account. Book professional drivers, manage your bookings, and track your rides.',
  keywords: ['customer login', 'driver booking login', 'user account', 'drivr login'],
};

export default function Login() {
  return (
    <>
      <Header />
      <LoginPage />
      <AppStoreFooter />
    </>
  );
}
