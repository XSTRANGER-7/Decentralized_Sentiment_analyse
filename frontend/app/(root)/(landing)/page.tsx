import HeaderFAQ from "@/components/landing/Home/HeaderFAQ";
import HeaderHome from "@/components/landing/Home/HeaderHome";
import LureToOnboard from "@/components/landing/Home/LureToOnboard";

export default function Home() {
  return (
    <main className="">
      <HeaderHome />
      <HeaderFAQ />
      <LureToOnboard />
    </main>
  );
}
