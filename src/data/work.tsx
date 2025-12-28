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
  description: React.ReactNode;
  stack: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "e1",
    role: "Software Engineer",
    company: "Bestpeers Infosystem",
    date: "Jul 2025 — present",
    description: (
      <>
        <p>
          this was my first time owning a system end-to-end. i designed and
          built a <em>multi-store POS</em>, thinking carefully about scale,
          failure cases, and day-to-day operations.
        </p>

        <p>
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

        <p>
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

        <p>
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

        <p>
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
    title: "Sharenotes",
    code: "https://github.com/Piyush-Deshmukh/sharenotes",
    demo: "https://sharenotes-0eh7.onrender.com",
    description: (
      <>
        <p>i wanted a place where notes didn’t feel disposable.</p>
        <p className="mt-3">
          so i built a full-stack note-sharing app with real-time updates,
          filtering, and media support, paying special attention to how data was
          structured and accessed as usage scaled.
        </p>
      </>
    ),
    stack: "Reactjs, Nodejs, Expressjs, MongoDB, Firebase",
  },
  {
    id: "p2",
    title: "Jobdash",
    code: "https://github.com/Piyush-Deshmukh/JobDash",
    demo: "https://jobdash.onrender.com/",
    description: (
      <>
        <p>
          this project started as a personal tool to track job applications.
        </p>
        <p className="mt-3">
          over time, it became a dashboard with analytics, customizable filters,
          secure authentication, and light/dark themes, designed to stay fast
          and usable with frequent updates.
        </p>
      </>
    ),
    stack: "Nodejs, Reactjs, Expressjs, MongoDB",
  },
  {
    id: "p3",
    title: "Focus Timer",
    code: "https://github.com/Piyush-Deshmukh/focus-timer",
    description: (
      <>
        <p>a desktop app i built for myself.</p>
        <p className="mt-3">
          it supports focus, break, and long-break modes, with a small overlay
          that keeps the timer visible even when the app is minimized.
        </p>
      </>
    ),
    stack: "Electronjs, Reactjs",
  },
  {
    id: "p4",
    title: "Password Manager",
    code: "https://github.com/Piyush-Deshmukh/password-manager",
    description: (
      <>
        <p>
          i built this browser extension to reduce friction while logging in.
        </p>
        <p className="mt-3">
          it supports secure login, saving and organizing credentials, and
          one-click autofill.
        </p>
      </>
    ),
    stack: "Expressjs, MongoDB, JavaScript",
  },
  {
    id: "p5",
    title: "Expense Tracker",
    code: "https://github.com/Piyush-Deshmukh/expense-tracker",
    demo: "https://expense-tracker-lyqh.onrender.com/",
    description: (
      <>
        <p>a pwa for tracking monthly expenses and income.</p>
        <p className="mt-3">
          it includes a dashboard with charts and filters to view spending
          patterns by month or across time.
        </p>
      </>
    ),
    stack: "Typescript, Reactjs, Expressjs, MongoDB, TailwindCSS",
  },
];
