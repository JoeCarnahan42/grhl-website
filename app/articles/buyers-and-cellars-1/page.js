"use client";
import { Header } from "/app/components/Header";
import { Footer } from "/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function buyersAndCellarsOne() {
  return (
    <main className="text-center">
      <Header />
      <div className="container">
        <Link href={"../articles"}>Back to articles</Link>
        <h1 className="display-1">Buyers and Cellars</h1>
        <h2 className="display-3">(Part One)</h2>
        <br />
        <p className="article-text">
          Probably not the best title since “The League” is anti-tanking and
          everyone should be able to compete. Judging by the title and the first
          sentence you can guess what this is going to be about. That&apos;s
          right, TRADES!! Along with speculations of what each team needs and
          might do to improve their run for the cup! This is my first attempt at
          an article and might appear like a Junior high student, or even a
          grade schooler wrote this. Enough rambling, I&apos;ll start with the
          Lincoln Division since the league favorite Wolves are in that one.
          Let&apos;s go from first to worst (by division)!
        </p>
        <Image
          height={160}
          width={125}
          src="/media/images/division-images/grhl-linc-div-logo.avif"
          alt="Sting Team Logo"
        />
        <h2>Lincoln Division</h2>
        <h2>(division of parity)</h2>
        <hr />
        <br />
        <h1>
          <u>Sting</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/sting.avif"
            alt="Sting Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          First up, (but 2nd in our hearts) the Sting. A team that&apos;s does
          not shy away from making trades, big or small. Coming off a gut punch
          of a loss after blowing a 6ish goal lead, the Sting are 2-1. I
          wouldn&apos;t look for them to make a major move at this time.
          Especially with Weber coming back at some point. Figuring out how to
          utilize their third line might be more beneficial for now. Unless a
          complete meltdown happens look for them to target players like Jeremy
          Pflasterer if they want a short-term answer, or Jerad Steinmann if
          they want someone with years on their contract. I can&apos;t remember
          if Steinmann has been here or not so I&apos;m not sure if this will
          add another team to his GRHL punch card.
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
        <hr />
        <h1>
          <u>Wolves</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/wolves.avif"
            alt="Wolves Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          Next up, the true #1 (jersey sales don&apos;t lie) the Wolves. Also
          not afraid to make big trades. That seem to work out for everyone
          except them. Coming off a dominant win and doing so without two key
          players, the Wolves are headed in the right direction. They have all
          the pieces to make a good run, but the same was said last year and we
          know how that story ended. The Wolves might be the oldest average age
          team in the league. Look for them to target younger or high energy
          players that can give the old timers a break. Jordan Nevels might be a
          decent fit here. Maybe even some of that suburban dad rage Kyle Gehrig
          brings to the table. Possibly even Trae “I don&apos;t spill the beans
          anymore” Wargo.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>
            Youth and rostered players to show up. Like the Sting, budgets are
            tight so a trade will take some magic.
          </li>
        </ul>
        <hr />
        <h1>
          <u>Outlaws</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/outlaws.avif"
            alt="Outlaws Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          3rd on the list, Last year&apos;s cup champions the Outlaws. That was
          last year get off your high horse and move on. Quit living in the
          past. Maybe that&apos;s me reliving that moment (it still hurts.)
          Anyway, a nice come from behind win in their last match. I&apos;ll
          tell you this for free, the last two games the other Kleinschmidt has
          played he didn&apos;t appear to be comfortable on D. Numbers
          don&apos;t lie though, he&apos;s still producing. I think they should
          be shopping for another solid D-man for two reasons. 1) Get Grant back
          to what he&apos;s good at, Offense. 2) Another good defenseman to help
          tighten up the zone and keep the game more manageable. Brad Foiles is
          a good fit anywhere at a fair price also. Willie Webb might bring some
          grit and defense they need. Close to that price range is Drew Estes,
          but I don&apos;t see the Sting sharing him, especially within the
          division.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>
            Defense to let Grant get back to Forward. Like the rest of the
            division, budgets are tight so a trade will take some magic.
          </li>
        </ul>
        <hr />
        <h1>
          <u>Thundercats</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/thundercats.avif"
            alt="Thundercats Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          4th on the list, the Thundercat&apos;s. Solid from top to bottom and a
          goalie that&apos;s playing some real good hockey right now. Coming off
          a win, but they can&apos;t seem to put teams away that they should be
          walking on. They play to their competition and nothing more. I think
          they have too much pride (very punny) to make a trade that makes the
          gap wider in their victories. Maybe they need to change a mental
          preparation instead of a trade. Maybe captain Quigley coming back is
          the answer. Scott Robben could bring a little more Defensive structure
          to help the cats maintain that comfortable lead at the end of games.
          If defense isn&apos;t the way to go, time to pour it on with more
          offense. Brett Lucas can add a few more to the totals. They have a
          supporting cast that compliments his style of play also.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>
            Depth scoring and Defense. The Thundercats have $3 in cap space.
          </li>
        </ul>
        <hr />
        <h1>
          <u>Moose</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/moose.avif"
            alt="Moose Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          Finally, The Moose. The record is misleading. Another loaded roster
          and well-builtteam. Coming off a loss but missing some big names like
          Costillo and Lyons. I&apos;m not sure thoseskates can be filled when
          they are out. Moose are beating who they should and competing withthe
          rest. There are two ways the Moose can go as far as trades. A little
          more help on the backend for Lyons would go a long way on this team.
          Or you can continue with the high energy, runand gun style. Ill
          mention a few names that I have mentioned before for these guys. A
          player like Josh Heatherly goes well with both plans and a little
          brotherly love could be a line for them. I&apos;m not sure the Wolves
          will trade him as he&apos;s been solid for them. but that style of
          player would be nice for the Moose. Jordan Nevels brings some high
          energy.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>
            Depth scoring and Defense. The Moose have $2 in cap space and a
            contract year.
          </li>
        </ul>
        <hr />
        <br />
        <Image
          height={160}
          width={125}
          src="/media/images/division-images/grhl-showme-div-logo.avif"
          alt="Sting Team Logo"
        />
        <h2>Show-me Division</h2>
        <h2>(division of imparity)</h2>
        <hr />
        <br />
        <h1>
          <u>Jets</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/jets.avif"
            alt="Jets Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          1st in the division and League. The Jets, a team that their beloved
          leader has assembled in previous leagues. Or at least had some
          similarities. He likes what he likes. 3-0 the last remaining
          undefeated team this year. The combined opponents record is 2-7 so
          take that undefeated record lightly. This team will need to make a
          trade at some point. So here we go.This could be a landing spot for
          the first goalie trade. It&apos;s not because theirs is playing bad,
          itssimply because the offer they couldn&apos;t refuse that sets them
          up for the following season. Will it be Frank Hart, Andy Stubblefield,
          or RP? Side thought here. I&apos;m not sure a 1:1 goalie trade is fair
          so it will be interesting to see who else moves in this deal.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>Roster players to show up.</li>
        </ul>
        <hr />
        <h1>
          <u>Barracudas</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/barracudas.avif"
            alt="Barracudas Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          2nd on the list, Barracudas. When they show up, they&apos;re good.
          When they don&apos;t show up, they&apos;re still alright half of the
          time. Another well rounded team (it must be a Hellman thing;)the only
          team with a negative goal differential and a winning record. Does that
          mean you need more offense or better defense? Or did you just have one
          off game? Aaron Gruebner would be a good fit here, offering more
          offense and defense. Nick Moore would offer the same thing as
          Gruebner. The trick is getting those teams to make that trade. These
          guys might have to pull a multi team trade to get what they need.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>their roster to show up.</li>
        </ul>
        <hr />
        <h1>
          <u>Venom</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/venom.avif"
            alt="Venom Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          3rd team up, Venom. This team has plenty of talent and a top 3 tendy,
          in my opinion. They still struggle to find a way to win. Or they give
          away the leads they do get. They play the first ten minutes of the
          first and sometimes the last ten minutes of the third. What happens in
          between is yet to be answered. Lack of focus might be the easiest
          answer. Two similar player sin Stradtman and Lucas. One of these big
          names should be moving. They need someone to accent one of those big
          names and keep teams on their heels and out of their own zone. We
          already know Stradtman works well with Mullins. I bet he can work with
          Lucas also. Maybe the Thundercat&apos;s would like to have Stradtman
          back? Another multiteam trade with big names could happen here.
          don&apos;t forget moving the goalie also!
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>Tighter defense.</li>
        </ul>
        <hr />
        <h1>
          <u>Yetis</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/yetis.avif"
            alt="Yetis Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          4th team. The Yetis. They went all in last year and it&apos;s showing
          this year. Not to mentiontheir tendy has a busy schedule so far. He is
          the difference maker that can steal a game or twofor them. they still
          must find a way out of their zone and more sustained pressure in
          theoffensive zone. Stradtman could fit in here. but that means Griffin
          will have to find a new homealso. Be on the lookout for multi team
          trades and goalies to move! Maybe Habermehl could end up here if the
          cards align.
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>Offense and Stubby.</li>
        </ul>
        <hr />
        <h1>
          <u>Raptors</u>
          <br />
          <Image
            height={125}
            width={125}
            src="/media/team-logos/header-logos/raptors.avif"
            alt="Raptors Team Logo"
          />
        </h1>
        <br />
        <p className="article-text">
          Last, the Raptors. The same core guys for a while and still can&apos;t
          figure out their identity. With out looking who&apos;s the third
          captain on the Raptors? I had to look also. Keep the emotions in check
          and lift your teammates up for starters. On to the trades part. with
          $18 in cap remaining, you would think the Raptors could find a way to
          bring in a big-name player. Trouble is 2 players salaries is the most
          you can retain at a given time. I think sawyer is the highest salary
          on that team. This will have to be a tricky trade with multiple teams.
          Structure is needed on this team. Stubblefield flips this team around.
          His play helps but he brings more than that to the table. Could this
          be the first captain trade also? Imagine someone like Quinn whipping
          the Raptors into shape. If only their shade of red were to his
          likings…
        </p>
        <p className="article-text">
          <u>Needs:</u>
        </p>
        <ul className="list-unstyled article-text">
          <li>Offense and goaltending</li>
        </ul>
        <hr />
      </div>
      <Footer />
    </main>
  );
}
