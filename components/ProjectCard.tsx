"use client";

import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        margin: 20,
      }}
    >
      <h3 style={{ margin: 0 }}>{project.projectName}</h3>
      <p style={{ margin: "6px 0" }}>
        from {project.startDate} to {project.endDate ?? "Present"}
        <br />
        {project.description}
      </p>
      <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
        <a
          href={project.deploymentLink}
          target="_blank"
          rel="noreferror"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          deployment link
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferror"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          github link
        </a>
      </div>
    </div>
  );
}
