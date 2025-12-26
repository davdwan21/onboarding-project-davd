"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { Experience } from "@/types/experience";
import { useState, useEffect } from "react";

export default function ExperiencePage() {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // initialize list with the experiences gotten from API call on page open - useEffect
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/experience");
        if (!res.ok) {
          throw new Error(`request failed: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (error: any) {
        setError(error.message ?? "failed to fetcb experiences");
      } finally {
        setLoading(false);
      }
    }
    load();
  });

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error fetching experiences</p>;
  }

  return (
    <div>
      <h1>Experiences</h1>
      {data.length === 0 ? (
        <p>no experiences yet</p>
      ) : (
        data.map((exp) => <ExperienceCard key={exp._id} exp={exp} />)
      )}
    </div>
  );
}
