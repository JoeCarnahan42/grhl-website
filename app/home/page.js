import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="text-center py-5">
        <Image width={940} height={440} src={'/media/team-logos/grhl-home-logo.avif'} alt="GRHL Logo" />
      </div>
      <Footer />
    </main>
    )

}