import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function articles() {
  return (
    <main className="text-center">
      <Header />
      <h1>
        <u>Articles</u>
      </h1>
      <br />
      <h3>
        <Link href={"./articles/buyers-and-cellars-1"}>Buyers and Cellars</Link>
      </h3>
      <p>Author: N/A</p>
      <br />
      <h3>
        <Link href={"./articles/buyers-and-cellars-2"}>
          Buyers and Cellars pt.2
        </Link>
      </h3>
      <p>Author: N/A</p>
      <Footer />
    </main>
  );
}
