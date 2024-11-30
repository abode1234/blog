import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  slug: string;
}

export function getAllPosts(): BlogPost[] {
  // Update path to match your project structure
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // Filter only markdown files
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, ''); // Remove .md extension to get slug
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents); // Read frontmatter data

      // Return post data with fallback values
      return {
        title: data.title || 'Untitled', // Default title if none found
        author: data.author || 'Unknown Author', // Fallback to 'Unknown Author'
        date: data.date
          ? new Date(data.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })
          : 'No date', // Format date or fallback
        slug, // Slug from the filename
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date descending

  return allPostsData;
}

