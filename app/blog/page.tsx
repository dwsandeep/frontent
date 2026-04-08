import Header from '@/components/Header';
import AppStoreFooter from '@/components/AppStoreFooter';
import BlogSection from '@/components/BlogSection';

interface BlogPost {
  slug: string;
  title: string;
  [key: string]: unknown;
}

export const metadata = {
  title: 'Blog - Professional Driver Rental Tips & Guides | Drivr',
  description: 'Read the latest insights on hiring professional drivers, vehicle maintenance, travel tips, and maximizing your comfort with expert driver services.',
  keywords: ['driver blog', 'travel tips', 'chauffeur guide', 'vehicle maintenance', 'driver rental tips'],
};

export const revalidate = 900; // ✅ ISR

async function getBlogs() {
  const res = await fetch(
    "https://admin.drivr.co.in/admin/api/v1/unsecure/blog-list"
  );

  const data = await res.json();
  return data?.list || [];
}

export default async function BlogListPage() {
  const blogs: BlogPost[] = await getBlogs();

  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogSection posts={blogs} /> {/* ✅ pass data */}
      </main>
      <AppStoreFooter />
    </>
  );
}