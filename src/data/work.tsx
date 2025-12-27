export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  date: string;
  description: React.ReactNode;
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
    id: "e1",
    role: "Software Engineer",
    company: "Bestpeers Infosystems",
    date: "Jul 2025 — present",
    description: (
      <>
        <p>
          this was my first time owning a system end-to-end. i designed and
          built a <em>multi-store POS</em>, thinking carefully about scale,
          failure cases, and day-to-day operations.
        </p>

        <p className="mt-3">
          the backend ran on Express and MongoDB, packaged with Docker and
          deployed to AWS ECS. i used S3 and CloudFront to improve reliability,
          and later introduced CI/CD pipelines that made releases predictable.
        </p>
      </>
    ),
  },
  {
    id: "e2",
    role: "SDE Intern",
    company: "FileCloud",
    date: "Sept 2024 — Feb 2025",
    description: (
      <>
        <p>
          i worked on simplifying a <em>real-time backend</em> by migrating it
          from Socket.io to an API-driven Express setup. this reduced server
          load and made the system easier to scale.
        </p>

        <p className="mt-3">
          alongside backend work, i audited and refined the UI/UX of an Outlook
          add-in, improving navigation flow and overall usability. i also spent
          time refactoring legacy code to improve maintainability and reduce
          bugs.
        </p>
      </>
    ),
  },
  {
    id: "e3",
    role: "Software Developer Intern",
    company: "The Internet Folks",
    date: "Mar 2024",
    description: (
      <>
        <p>
          i built reusable UI components using React and TypeScript, helping the
          team ship an MVP faster.
        </p>

        <p className="mt-3">
          for a client project, i delivered a responsive website focused on
          clarity and usability. i also helped keep the team aligned by managing
          tasks and communication, which improved overall delivery time.
        </p>
      </>
    ),
  },
  {
    id: "e4",
    role: "Frontend Intern",
    company: "Urban Curious",
    date: "Jul 2023",
    description: (
      <>
        <p>
          as an intern, i worked closely with senior developers to build and
          refine web interfaces using HTML, CSS, and JavaScript.
        </p>

        <p className="mt-3">
          i also helped improve cross-browser compatibility, making sure pages
          worked consistently across devices and browsers.
        </p>
      </>
    ),
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Realtime API Gateway",
    code: "https://example.com/project/gateway",
    demo: "https://example.com/project/gateway",
    description:
      "A lightweight gateway that standardizes auth and observability for internal APIs.",
    stack: "Node, TypeScript, AWS",
  },
  {
    id: "p2",
    title: "POS Multi-store",
    demo: "https://example.com/project/gateway",
    description:
      "Point-of-sale system supporting multiple stores, offline sync, and reporting.",
    stack: "Postgres, Prisma, React",
  },
];
