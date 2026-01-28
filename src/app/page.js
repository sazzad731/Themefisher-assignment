import BannerContent from "@/components/BannerContent";
import BannerImage from "@/components/BannerImage";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-1647 mx-auto flex gap-17.5">
        <BannerImage />
        <BannerContent />
        <div className="absolute z-0 left-0 top-71.5 w-34.25 h-100 bg-[#121414] [clip-path:polygon(0%_0%,100%_15%,100%_100%,0%_100%)]"></div>
        <div className="absolute z-0 right-0 top-71.5 w-34.25 h-100 bg-[#121414] [clip-path:polygon(0%_15%,100%_0%,100%_100%,0%_100%)]"></div>
        <Footer />
      </main>
    </>
  );
}
