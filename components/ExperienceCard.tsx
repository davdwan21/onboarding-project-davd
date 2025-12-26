"use client";

import { Experience } from "@/types/experience";

export default function ExperienceCard({ exp }: { exp: Experience }) {
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
      <h3 style={{ margin: 0 }}>
        {exp.title} at {exp.company}
      </h3>
      <p style={{ margin: "6px 0" }}>
        {exp.location} - from {exp.startDate} to {exp.endDate ?? "Present"}
        <br />
        {exp.description}
      </p>
    </div>
  );
}
