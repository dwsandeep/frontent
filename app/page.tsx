import Header from '@/components/Header'
import AppStoreFooter from '@/components/AppStoreFooter'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Drivr - Professional Driver Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Connect with professional drivers for your transportation needs. 
              Safe, reliable, and comfortable driver rental services.
            </p>
          </div>
        </div>
      </main>
      <AppStoreFooter />
    </>
  );
}