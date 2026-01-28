import React from 'react'
import { HiMiniArrowDownTray } from "react-icons/hi2";

export default function BannerContent() {
  return (
    <div className="pt-10 w-[55%]">
      <span className="primary-gradient font-bold text-base mb-2.5">
        INTRODUCTION
      </span>
      <h1 className="text-[70px] font-bold">
        I&apos;m a Creative Developer & UI/UX Design Expert
      </h1>
      <p className="text-base font-bold mb-9">
        24 years / Robert Smith / UK London
      </p>
      <p className="text-base font-medium text-[#C6C6C6] mb-10">
        Prolific, full stack web developer with a passion for metrics and
        beating former &quot;best-yets. Prototyped 25 new product features per
        year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
        Consistently receive high user experience scores for all web development
        projects, including a 55% increase for Flexor, Inc. Passionate about
        building world class web applications. One of my sites received a 2020
        Webby for Best Navigation and Structure.
      </p>
      <button className='btn-primary rounded-full flex items-center gap-3'>Download CV <HiMiniArrowDownTray size={30}/></button>
    </div>
  );
}
