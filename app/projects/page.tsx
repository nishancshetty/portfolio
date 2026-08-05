import Link from "next/link";

const projects = [
  {
    title: "Group Project",
    description:
      "A collaborative web application developed as part of a team project. It demonstrates teamwork, Git workflow, and building a complete application from planning to implementation.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
    ],
    demo: "#", // Add live demo when available
    github: "https://github.com/nishancshetty/Group-Project",
    problem:
      "Built to solve a real-world problem through collaboration while improving development workflow and teamwork.",
    challenges:
      "Coordinating tasks among team members, resolving Git merge conflicts, and integrating everyone's contributions into one application.",
    learned:
      "Strengthened my skills in teamwork, Git version control, React development, and writing cleaner, reusable code.",
  },
  {
    title: "ToolVerse",
    description:
      "A collection of useful web-based tools designed to improve productivity through a clean, responsive, and easy-to-use interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
    ],
    demo: "#", // Add live demo when available
    github: "https://github.com/nishithashetty05/ToolVerse",
    problem:
      "Provides multiple everyday utilities in one place, reducing the need to switch between different websites.",
    challenges:
      "Designing reusable components, organizing multiple tools efficiently, and creating a responsive user experience.",
    learned:
      "Improved my understanding of Next.js, TypeScript, component-based architecture, and responsive design.",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-bold">Projects</h1>

      <p className="mb-12 max-w-2xl text-gray-600">
        Here are some of the projects I've worked on. Each one helped me
        improve my development skills and gain practical experience building
        modern web applications.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>

            <p className="mb-6 text-gray-700">{project.description}</p>

            <div className="mb-5">
              <h3 className="font-semibold">Technologies Used</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-semibold">Problem It Solves</h3>
              <p className="text-gray-700">{project.problem}</p>
            </div>

            <div className="mb-5">
              <h3 className="font-semibold">Challenges</h3>
              <p className="text-gray-700">{project.challenges}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold">What I Learned</h3>
              <p className="text-gray-700">{project.learned}</p>
            </div>

            <div className="flex gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
              >
                GitHub
              </Link>

              {project.demo !== "#" && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="rounded-lg border px-5 py-3 transition hover:bg-gray-100"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}