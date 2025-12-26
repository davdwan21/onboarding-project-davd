"use client";

import { Experience } from "@/types/experience";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div>
      <h3>
        {exp.title} at {exp.company}
      </h3>
      <p>
        {exp.location} - from {exp.startDate} to {exp.endDate ?? "Present"}
        <br />
        {exp.description}
      </p>
    </div>
  );
}
