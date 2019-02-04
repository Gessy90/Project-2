import React from 'react'
import axios from 'axios'

import Map from './Map'

class SchoolsShow extends React.Component {

  constructor(){
    super()

    this.state = {
      school: null,
      error: null
    }
  }


  componentDidMount() {

    axios.get('https://cors-anywhere.herokuapp.com/https://code.org/schools.json')
      .then(res => {
        const schools = res.data.schools.filter(elem => elem.country === 'United Kingdom')
        const school = schools.filter(school => school.name === this.props.match.params.id)[0]
        this.setState({ school })
      })
      .catch(err => err.message)
  }


  render() {
    console.log(this.props.match.params.id)
    if(!this.state.school) return null
    const{ name, website, languages, description, street, city, state, contact_number: num } = this.state.school

    return (
      <section className="section">
        {!this.state.school &&  !this.state.error && <p>Loading...... </p>}
        <div className="container">
          <h1 className="title is-1"> {name}</h1>

          <hr />

          <div className="columns">
            <div className="column">
              <h3> <strong> Languages Taught: </strong> {languages}, </h3>
              <br/>
              <p> <strong> Description: </strong>  {description} </p>
              <br/>
              <p> <strong> Contact: </strong>  {num} </p>
              <br/>
              <p> <strong> Address: </strong>  {street}  {city} {state}</p>

              <hr />
              <a href={website}> <button className="button is-primary">Go To Website</button> </a>
              <a href="/schools"> <button className="button is-primary">Back</button> </a>

            </div>

            <div className="column">
              <Map school={this.state.school} zoom={5} />
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default SchoolsShow
