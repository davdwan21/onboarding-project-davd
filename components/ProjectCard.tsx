"use client";

import { Project } from "@/types/project";

export default function ExperienceCard({ project }: { project: Project }) {
  return (
    <div>
      <h3>{project.projectName}</h3>
      <p>
        from {project.startDate} to {project.endDate ?? "Present"}
        <br />
        {project.description}
      </p>
      <div></div>
    </div>
  );
}
