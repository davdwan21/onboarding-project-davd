"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/project");
        if (!res.ok) {
          throw new Error(`error fetching data: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (error: any) {
        setError(error.message ?? "error fetching projects");
      } finally {
        setLoading(false);
      }
    }
    load();
  });

  // Nnuts.come();

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error fetching experiences</p>;
  }

  return (
    <div>
      <h1>Projects</h1>
      {data.length === 0 ? (
        <p>no projects yet</p>
      ) : (
        data.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))
      )}
    </div>
  );
}
