import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/service/blogs';
import Header from '@/components/Header.simple';

interface FAQ {
  question: string;
  answer: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  faqs?: FAQ[];
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs();
    return posts.map((slug: string) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return {
        title: 'Blog Post Not Found',
        description: 'The blog post you\'re looking for doesn\'t exist.',
      };
    }

    return {
      title: `${post.title} - Professional Driver Rental`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : [],
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read our latest blog post',
    };
  }
}

// Set revalidation time (in seconds) - revalidate every hour
export const revalidate = 900;

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: BlogPost | null = null;
  let error: string | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Something went wrong';
    console.error('Error fetching blog post:', err);
  }

  if (!post || error) {
    notFound();
  }

  return (
    <>
          <Header />

    <main className="flex-1">

    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 text-white/90 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-slate-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq: FAQ, index: number) => (
                  <div 
                    key={index}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-6 transition-all shadow-sm"
                  >
                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">About the Author</h3>
                <p className="text-slate-600">{post.author}</p>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="/blog" 
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    </>
  );
}
