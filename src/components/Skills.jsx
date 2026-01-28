import React from 'react'
import ProgressBar from './shared/ProgressBar';

export default function Skills() {
  return (
    <section className="mt-30">
      <h2 className='text-5xl font-bold mb-8'>Skills</h2>
      <ProgressBar title="UI/UX Design" percentage={95} />
      <ProgressBar title="Photography" percentage={90} />
      <ProgressBar title="Creativity" percentage={80} />
      <ProgressBar title="Team Work" percentage={95} />
      <ProgressBar title="Web Design" percentage={95} />
    </section>
  );
}
