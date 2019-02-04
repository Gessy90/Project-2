import React from 'react'
//destructor react-router-dom Link
import { Link } from 'react-router-dom'

const SchoolCard = ({ name, city, languages }) => {
  return (
  // Link to will link to /School/:id of the clicked wine card
    <div className="card">
      <Link className="links" to={`/schools/${name}`} >
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className={name} id="card-image"> </div>
        <div className="card-content">
          <div className="content">
            <p><strong>City: </strong> {city} </p>
            <p> <strong> Languages: </strong> <br /> {languages} </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SchoolCard
