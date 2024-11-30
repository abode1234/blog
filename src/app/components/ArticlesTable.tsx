export default function ArticlesTable({ posts }: ArticlesTableProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="w-full overflow-hidden rounded-lg shadow-sm">
        <p>No articles found</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-sm">
      <table className="w-full border-collapse bg-white dark:bg-gray-800">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Author
            </th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white w-32">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="px-6 py-4">
                <a
                  href={`/posts/${post.slug}`}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {post.title}
                </a>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {post.author} {/* Added the author column */}
              </td>
              <td className="px-6 py-4 text-right text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

