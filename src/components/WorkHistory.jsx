import React from "react";
import WorkHistoryIcon from "./shared/WorkHistoryIcon";

export default function WorkHistory() {
  return (
    <div>
      <h3 className="flex items-center gap-2.5 text-2xl font-bold mb-8">
        <WorkHistoryIcon className="w-[22.58px] bg-[#333333] p-2 box-content rounded-sm" />
        Work History
      </h3>
      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 border-2 border-[#646464] rounded-full ml-2 bg-transparent"></div>
        {/* time line */}
        <div className="pl-10.5">
          <div className="flex flex-col items-start pt-5">
            <p
              className="relative p-1.5 border border-[#333333] rounded-sm before:content-[''] before:absolute before:top-[25%] before:-left-7.5 before:-translate-x-1/2 
                        before:w-4 before:h-4 before:bg-[#121414] before:border-2 before:border-[#646464] 
                        before:rotate-45 before:z-10"
            >
              2016-2022
            </p>
            <div className="mt-3 p-5 border border-[#2b2b2b] bg-[#121414] rounded-lg">
              <h4 className="font-bold text-xl primary-gradient mb-2">
                UI/UX design
              </h4>
              <p className="text-[12px] font-light text-[#8F8F8F] mb-8">
                Web site design
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut
                commodi earum eligendi ipsum, laborum maiores mollitia, optio
                quam quis rerum totam voluptas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start pt-5">
            <p
              className="relative p-1.5 border border-[#333333] rounded-sm before:content-[''] before:absolute before:top-[25%] before:-left-7.5 before:-translate-x-1/2 
                        before:w-4 before:h-4 before:bg-[#121414] before:border-2 before:border-[#646464] 
                        before:rotate-45 before:z-10"
            >
              2012-2016
            </p>
            <div className="mt-3 p-5 border border-[#2b2b2b] bg-[#121414] rounded-lg">
              <h4 className="font-bold text-xl primary-gradient mb-2">
                Junior Web designers
              </h4>
              <p className="text-[12px] font-light text-[#8F8F8F] mb-8">
                Product designer
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut
                commodi earum eligendi ipsum, laborum maiores mollitia, optio
                quam quis rerum totam voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
