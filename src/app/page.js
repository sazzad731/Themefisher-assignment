import BannerContent from "@/components/BannerContent";
import BannerImage from "@/components/BannerImage";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-1647 mx-auto">
        <section className="flex gap-17.5">
          <BannerImage />
          <BannerContent />
        </section>

        {/* both side rectangle shape */}
        <div className="absolute z-0 left-0 top-71.5 w-32.5 h-100 bg-[#121414] [clip-path:polygon(0%_0%,100%_15%,100%_100%,0%_100%)]"></div>
        <div className="absolute z-0 right-0 top-71.5 w-34.25 h-100 bg-[#121414] [clip-path:polygon(0%_15%,100%_0%,100%_100%,0%_100%)]"></div>

        <div className="w-[73.5%] ml-auto">
          <ResumeSection />
        </div>

        {/* footer used in Hero or banner section  */}
        <Footer />
      </main>
    </>
  );
}
