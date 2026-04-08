import React from 'react';
import BlogCard from '@/components/BlogCard.jsx';

const BlogSection = ({ posts }) => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Latest Insights & Guides
          </h2>
          <p className="text-slate-600 text-lg">
            Stay up to date with tips on hiring drivers, vehicle maintenance, and maximizing your travel comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;