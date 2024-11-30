import { getAllPosts } from '@/utils/markdown';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

interface BlogPostProps {
  params: { slug: string };
}

function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title || 'Untitled',
    author: data.author || 'Unknown Author',
    date: data.date || 'No date',
    content: content || 'No content available',
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose dark:prose-invert mx-auto my-8">
      <h1>{post.title}</h1>
      <p>
        By {post.author} on {post.date}
      </p>
      <div>{post.content}</div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

