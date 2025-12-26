import type { BlogPost } from '../page';

export const samplePost: BlogPost = {
  title: 'A short introduction',
  date: '2025-12-26',
  description: 'A brief welcome post and placeholder for writing.',
  ogImage: '/brand-logo.png',
  content: (
    <>
      <p>
        This is a placeholder post. The writing section contains notes,
        essays, and small experiments about software engineering and learning.
      </p>

      <p>
        Expect short, calm pieces focused on building, systems, and practical
        lessons for full-stack and backend work.
      </p>
    </>
  ),
};
