import React from "react";
import Education from "./Education";
import WorkHistory from "./WorkHistory";

export default function ResumeSection() {
  return (
    <section className="mt-16">
      <h2 className="text-5xl font-bold mb-10">Resume</h2>
      <Education />
      <WorkHistory/>
    </section>
  );
}
