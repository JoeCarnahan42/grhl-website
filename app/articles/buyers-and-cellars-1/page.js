import { Header } from "/app/components/Header";
import { Footer } from "/app/components/Footer";
import Link from "next/link";

export default function buyersAndCellarsOne() {
  return (
    <main className="text-center">
      <Header />
      {/*TODO: Add back button */}
      <div className="container">
        <Link href={"../articles"}>Back to articles</Link>
        <h1 className="display-1">Buyers and Cellars</h1>
        <h2 className="display-3">Part One</h2>
        <br />
        <p className="article-text">
          Probably not the best title since “The League” is anti-tanking and
          everyone should be able to compete. Judging by the title and the first
          sentence you can guess what this is going to be a bout. That’s right,
          TRADES!! Along with speculations of what each team needs and might do
          to improve their run for the cup! This is my first attempt at an
          article and might appear like a Junior high student, or even a grade
          schooler wrote this. Enough rambling, I'll start with the Lincoln
          Division since the league favorite Wolves are in that one. Let’s go
          from first to worst (by division)!
        </p>
        <h2>Lincoln Division</h2>
        <h2>(division of parity)</h2>
        <br />
        <h1>
          <u>Sting</u>
        </h1>
        <br />
        <p className="article-text">
          First up, (but 2nd in our hearts) the Sting. A team that’s does not
          shy away from making trades, big or small. Coming off a gut punch of a
          loss after blowing a 6ish goal lead, the Sting are 2-1. I wouldn’t
          look for them to make a major move at this time. Especially with Weber
          coming back at some point. Figuring out how to utilize their third
          line might be more beneficial for now. Unless a complete meltdown
          happens look for them to target players like Jeremy Pflasterer if they
          want a short-term answer, or Jerad Steinmann if they want someone with
          years on their contract. I can’t remember if Steinmann has been here
          or not so I’m not sure if this will add another team to his GRHL punch
          card.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>
            Depth scoring: Their big 3 have 35 points and the rest of the team
            has 11.
          </li>
        </ul>
        {/*TODO: finish article*/}
      </div>
      <Footer />
    </main>
  );
}
