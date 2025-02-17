// TODO: Complete team page header component
// Roster/Cap outlook/Schedule
'use client'
import { useDispatch } from "react-redux"

export const TeamPageHeader = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const selection = JSON.stringify(e.target.id)
  }
  
  return (
    <div className="container text-center">
      <nav className="navbar justify-content-center nav-text">
        <ul style={{ border: "none" }} className="list-group list-group-horizontal">
          <li style={{ border: "none" }} className="list-group-item mx-5"><button id="roster" onClick={handleClick} className="btn btn-light"><u id="roster">Roster</u></button></li>
          <li style={{ border: "none" }} className="list-group-item mx-5"><button id="cap-outlook" onClick={handleClick} className="btn btn-light"><u id="cap-outlook">Cap Outlook</u></button></li>
          <li style={{ border: "none" }} className="list-group-item mx-5"><button id="transactions" onClick={handleClick} className="btn btn-light"><u id="transactions">Transactions</u></button></li>
        </ul>
      </nav>
    </div>
  )
}