export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  code?: string;
  demo?: string;
  description: string;
  stack?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'e1',
    role: 'Backend Engineer',
    company: 'Acme Systems',
    date: '2022 — present',
    description:
      'Building scalable APIs and operational tooling for high-throughput services.',
  },
  {
    id: 'e2',
    role: 'Software Engineer',
    company: 'ShopGrid',
    date: '2019 — 2022',
    description:
      'Led payment integration and inventory sync across multiple storefronts.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Realtime API Gateway',
    code: 'https://example.com/project/gateway',
    demo: 'https://example.com/project/gateway',
    description:
      'A lightweight gateway that standardizes auth and observability for internal APIs.',
    stack: 'Node, TypeScript, AWS',
  },
  {
    id: 'p2',
    title: 'POS Multi-store',
    demo: 'https://example.com/project/gateway',
    description:
      'Point-of-sale system supporting multiple stores, offline sync, and reporting.',
    stack: 'Postgres, Prisma, React',
  },
];
