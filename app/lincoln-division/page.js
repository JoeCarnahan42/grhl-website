import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { records } from "@/public/teamRecords";
import Image from "next/image";
import Link from "next/link";

export default function LincolnDiv() {
  // TODO: add Lincoln division teams and logos as buttons that redirect to team pages.
  const lincolnDiv = records[0]


  return (
    <main className="text-center">
      <Header />
      <Image width={267} height={327} alt="Division Logo" src={'/media/images/division-images/grhl-linc-div-logo.avif'} />
      <br />
      <br />
      <h1 className="text-center"><u>Lincoln Division Teams</u></h1>
      <br />
      <div className="container">
        <div className="row">
          {lincolnDiv.map((team) => {
            return (
              <div className="col text-center">
                <Link href={`/teams/${team.name.toLowerCase()}`}>
                  <Image width={200} height={200} alt={`${team.name} Logo`} src={team.img} />
                  <h2>{team.name}</h2>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </main>
  );
}
