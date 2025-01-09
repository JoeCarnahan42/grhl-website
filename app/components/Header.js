'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Header = () => {
  return (
    <div>
      <div className="container text-center p-2">
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image className="" height={65} width={65} src='/media/team-logos/grhl-moose-logo.avif' alt="Moose Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-outlaws-logo.avif' alt="Outlaws Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-sting-logo.avif' alt="Sting Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-tcats-logo.avif' alt="Thundercats Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-wolves-logo.avif' alt="Wolves Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={112} width={92} src='/media/team-logos/grhl-league-logo.avif' alt="GRHL League Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-cudas-logo.avif' alt="Barracudas Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-jets-logo.avif' alt="Jets Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-raptors-logo.avif' alt="Raptors Team Logo" />
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-venom-logo.avif' alt="Venom Team Logo" />  
        </Link>
        <Link className="p-2" href={'TODO: Route to team page'}>
          <Image height={65} width={65} src='/media/team-logos/grhl-yetis-logo.avif' alt="Yetis Team Logo" />
        </Link>
        <hr />
      </div>
      <nav className="navbar justify-content-center nav-text">
        <ul style={{border:'none'}}  className="list-group list-group-horizontal">
          <li style={{border:'none', paddingTop: '0px'}} className="list-group-item">
            <Link className="nav-link" href={'TODO: Rout to location'}>Home</Link>
          </li>
          <li style={{border:'none', paddingTop: '0px'}} className="nav-item-dropdown list-group-item">
            <Link className="nav-link dropdown-toggle" href={'#'} id="navbarDropdownTeams" role="button" data-bs-toggle='dropdown' aria-expanded='false'>Teams</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownTeams">
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Lincoln Division</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Show-Me Division</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Waivers</Link>
              </li>
            </ul>
          </li>
          <li style={{border:'none', paddingTop: '0px'}} className="nav-item-dropdown list-group-item">
            <Link className="nav-link dropdown-toggle" href={'#'} id="navbarDropdownStats" role="button" data-bs-toggle='dropdown' aria-expanded='false'>Stats</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownStats">
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Standings</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>League Leaders</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Player Records</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Box Scores</Link>
              </li>
            </ul>
          </li>
          <li style={{border:'none', paddingTop: '0px'}} className="list-group-item">
            <Link className="nav-link" href={'TODO: Route to location'}>Schedule</Link>
          </li>
          <li style={{border:'none', paddingTop: '0px'}} className="list-group-item">
            <Link className="nav-link" href={'TODO: Route to location'}>Special Events</Link>
          </li>
          <li style={{border:'none', paddingTop: '0px'}} className="nav-item-dropdown list-group-item">
            <Link className="nav-link dropdown-toggle" href={'#'} id="navbarDropdownNews" role="button" data-bs-toggle='dropdown' aria-expanded='false'>News</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews">
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Articles</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>&quot;Special Edition&quot; Articles</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>League Updates</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>GRHL Podcast</Link>
              </li>
            </ul>
          </li>
          <li style={{border:'none', paddingTop: '0px'}} className="nav-item-dropdown list-group-item">
            <Link className="nav-link dropdown-toggle" href={'#'} id="navbarDropdownAbout" role="button" data-bs-toggle='dropdown' aria-expanded='false'>About Us</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Meet The Board</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Constitution</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Rules & Regulations</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Player Code of Conduct</Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'TODO: Rout to location'}>Sponsors</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}