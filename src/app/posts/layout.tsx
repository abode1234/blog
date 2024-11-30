// src/app/posts/layout.tsx

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}

