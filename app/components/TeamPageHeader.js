// TODO: Complete team page header component
// Roster/Cap outlook/Schedule

export const TeamPageHeader = () => {
  
  return (
    <div className="container text-center">
      <nav className="navbar justify-content-center nav-text">
        <ul style={{ border: "none" }} className="list-group list-group-horizontal">
          <li style={{ border: "none" }} className="list-group-item mx-5"><button className="btn btn-light"><u>Roster</u></button></li>
          <li style={{ border: "none" }} className="list-group-item mx-5"><button className="btn btn-light"><u>Cap Outlook</u></button></li>
          <li style={{ border: "none" }} className="list-group-item mx-5"><button className="btn btn-light"><u>Transactions</u></button></li>
        </ul>
      </nav>
    </div>
  )
}