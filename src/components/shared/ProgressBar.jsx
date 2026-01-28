import React from 'react'

export default function ProgressBar({title, percentage}) {
  return (
    <div className="mb-6 w-full max-w-xl">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{title}</span>
        <span className="text-[#F89222]">{percentage}%</span>
      </div>

      <div className="w-full bg-[#313131] rounded-full h-2.5">
        <div
          className="bg-linear-to-r from-[#F5BD4D] to-[#F89222] h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
