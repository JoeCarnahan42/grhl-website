"use client";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div className="container text-center p-2">
        <Link className="p-2" href={"/teams/moose"}>
          <Image
            className=""
            height={65}
            width={65}
            src="/media/team-logos/grhl-moose-logo.avif"
            alt="Moose Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/outlaws"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-outlaws-logo.avif"
            alt="Outlaws Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/sting"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-sting-logo.avif"
            alt="Sting Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/thundercats"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-thundercats-logo.avif"
            alt="Thundercats Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/wolves"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-wolves-logo.avif"
            alt="Wolves Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/home"}>
          <Image
            height={112}
            width={92}
            src="/media/team-logos/grhl-league-logo.avif"
            alt="GRHL League Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/barracudas"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-barracudas-logo.avif"
            alt="Barracudas Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/jets"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-jets-logo.avif"
            alt="Jets Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/raptors"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-raptors-logo.avif"
            alt="Raptors Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/venom"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-venom-logo.avif"
            alt="Venom Team Logo"
          />
        </Link>
        <Link className="p-2" href={"/teams/yetis"}>
          <Image
            height={65}
            width={65}
            src="/media/team-logos/grhl-yetis-logo.avif"
            alt="Yetis Team Logo"
          />
        </Link>
        <hr />
      </div>
      {/*TODO: Change dropdown to hover rather than click */}
      <nav className="navbar justify-content-center nav-text">
        <ul
          style={{ border: "none" }}
          className="list-group list-group-horizontal"
        >
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="list-group-item"
          >
            <Link className="nav-link" href={"/home"}>
              Home
            </Link>
          </li>
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="nav-item-dropdown list-group-item"
          >
            <Link
              className="nav-link dropdown-toggle"
              href={"dropdown"}
              id="navbarDropdownTeams"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Teams
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownTeams">
              <li>
                <Link className="dropdown-item" href={"/lincoln-division"}>
                  Lincoln Division
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/show-me-division"}>
                  Show-Me Division
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/waivers"}>
                  Waivers
                </Link>
              </li>
            </ul>
          </li>
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="nav-item-dropdown list-group-item"
          >
            <Link
              className="nav-link dropdown-toggle"
              href={"dropdown"}
              id="navbarDropdownStats"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Stats
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownStats">
              <li>
                <Link className="dropdown-item" href={"/standings"}>
                  Standings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/league-leaders"}>
                  League Leaders
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/player-records"}>
                  Player Records
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/box-scores"}>
                  Box Scores
                </Link>
              </li>
            </ul>
          </li>
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="list-group-item"
          >
            <Link className="nav-link" href={"/league-schedule"}>
              Schedule
            </Link>
          </li>
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="list-group-item"
          >
            <Link className="nav-link" href={"/special-events"}>
              Special Events
            </Link>
          </li>
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="nav-item-dropdown list-group-item"
          >
            <Link
              className="nav-link dropdown-toggle"
              href={"dropdown"}
              id="navbarDropdownNews"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              News
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews">
              <li>
                <Link className="dropdown-item" href={"/articles"}>
                  Articles
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/special-articles"}>
                  &quot;Special Edition&quot; Articles
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/updates"}>
                  League Updates
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/podcast"}>
                  GRHL Podcast
                </Link>
              </li>
            </ul>
          </li>
          <li
            style={{ border: "none", paddingTop: "0px" }}
            className="nav-item-dropdown list-group-item"
          >
            <Link
              className="nav-link dropdown-toggle"
              href={"dropdown"}
              id="navbarDropdownAbout"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
              <li>
                <Link className="dropdown-item" href={"/meet-the-board"}>
                  Meet The Board
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/constitution"}>
                  Constitution
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/rules-regs"}>
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/player-code-of-conduct"}
                >
                  Player Code of Conduct
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/sponsors"}>
                  Sponsors
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
