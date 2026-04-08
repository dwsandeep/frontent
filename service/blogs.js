// Blog service functions for API calls

// Get all blog posts
const baseUrl='https://admin.drivr.co.in/admin/api/v1/unsecure/';
export const getPosts = async () => {
  try {
    const response = await fetch(`${baseUrl}blog-list`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

// Get all blog post slugs for static generation
export const getAllPostSlugs = async () => {
  try {
    const response = await fetch(`${baseUrl}blog-list`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post slugs');
    }
    
    const data = await response.json();
    // Extract slugs from the blog list
    return data.list?.map((post) => post.slug) || [];
  } catch (error) {
    console.error('Error fetching blog post slugs:', error);
    throw error;
  }
};

// Get blog post by slug
export const getPostBySlug = async (slug) => {
  try {
    // https://admin.drivr.co.in/admin/api/v1/unsecure/get-blog?slug=benefits-of-hiring-a-professional-driver
    const response = await fetch(`${baseUrl}get-blog?slug=${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Blog post not found');
      }
      throw new Error('Failed to fetch blog post');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

// Create new blog post
export const createPost = async (blogData) => {
  try {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create blog post');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Update blog post by slug
export const updatePost = async (slug, blogData) => {
  try {
    const response = await fetch(`/api/blogs/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Blog post not found');
      }
      throw new Error('Failed to update blog post');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// // Delete blog post by slug
// export const deletePost = async (slug) => {
//   try {
//     const response = await fetch(`/api/blogs/${slug}`, {
//       method: 'DELETE',
//     });
    
//     if (!response.ok) {
//       if (response.status === 404) {
//         throw new Error('Blog post not found');
//       }
//       throw new Error('Failed to delete blog post');
//     }
    
//     return { success: true };
//   } catch (error) {
//     console.error('Error deleting blog post:', error);
//     throw error;
//   }
// };

// // Search blog posts
// export const searchPosts = async (query) => {
//   try {
//     const response = await fetch(`/api/blogs/search?q=${encodeURIComponent(query)}`);
    
//     if (!response.ok) {
//       throw new Error('Failed to search blog posts');
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error searching blog posts:', error);
//     throw error;
//   }
// };

// // Get blog posts by category
// export const getPostsByCategory = async (category) => {
//   try {
//     const response = await fetch(`/api/blogs/category/${encodeURIComponent(category)}`);
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch blog posts by category');
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching blog posts by category:', error);
//     throw error;
//   }
// };

// // Get blog categories
// export const getCategories = async () => {
//   try {
//     const response = await fetch('/api/blogs/categories');
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch blog categories');
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching blog categories:', error);
//     throw error;
//   }
// };