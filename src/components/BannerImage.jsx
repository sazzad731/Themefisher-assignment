import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";


export default function BannerImage() {
  return (
    <div>
      <Image
        className="bg-black"
        src="/images/profile.png"
        alt="Banner image"
        width={368}
        height={504.4}
      />
      <div className="flex items-center justify-center gap-4 bg-black py-4 -mt-2.5">
        <a
          className="p-[11.6] text-[#C5C5C5] bg-[#121414] rounded-full"
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          className="p-[11.6] text-[#C5C5C5] bg-[#121414] rounded-full"
          href="http://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          className="p-[11.6] text-[#C5C5C5] bg-[#121414] rounded-full"
          href="http://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP size={20} />
        </a>
        <a
          className="p-[11.6] text-[#C5C5C5] bg-[#121414] rounded-full"
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          className="p-[11.6] text-[#C5C5C5] bg-[#121414] rounded-full"
          href="http://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  );
}
