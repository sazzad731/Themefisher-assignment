import React from 'react'

export default function Footer() {
  return (
    <div className="absolute top-32 right-[43.5px] flex flex-col items-center pt-2.5">
      <p className="[writing-mode:vertical-lr] tracking-widest mb-5 text-sm text-[#A5A5A5]">
        © design by themefisher developed by gethugothemes
      </p>
      <div className="flex flex-col items-center gap-2.5">
        <span className="py-2 px-3 rounded-full bg-[#343434] font-bold">
          Fr
        </span>
        <span className="py-2 px-3 rounded-full btn-primary">En</span>
      </div>
    </div>
  );
}
