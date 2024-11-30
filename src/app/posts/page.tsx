import { getAllPosts } from '@/utils/markdown';
import ArticlesTable from '@/app/components/ArticlesTable';
import NavBar from '@/app/components/ui/NavBar';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <NavBar />

      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        </h1>
        <ArticlesTable posts={posts} />
      </div>
    </div>
  );
}

