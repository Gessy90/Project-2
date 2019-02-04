import React from 'react'
import axios from 'axios'

// import Map from './Map'
import SchoolCard from './SchoolCard'
import SearchForm from './SearchForm'


class SchoolsIndex extends React.Component {

  constructor() {
    super()

    this.state= {
      schools: [],
      error: null,
      filteredSchools: []
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/https://code.org/schools.json')
      .then(res => res.data.schools.filter(elem => elem.country === 'United Kingdom'))
      .then((schools) => this.setState({ schools, filteredSchools: schools }))
  }

  handleSearch(e) {
    if(e.target.value && e.target.value.length >=2) {
      const schools = this.state.schools.filter(elem=> elem.city.includes(e.target.value))
      this.setState({ filteredSchools: schools })
    } else {
      this.setState({filteredSchools: this.state.schools})
    }
  }


  render() {
    if(!this.state && !this.state.error) return <p>Loading...... </p>
    // console.log(this.state)
    // render div map box needs vannilla JS
    // ref function is map div mapp div onl exist in render scope
    return (
      <section className="section">
        <div className="container">

          <SearchForm handleSearch={this.handleSearch}/>
          <div className="columns is-multiline">

            {this.state.filteredSchools.map((school, i) =>
              <div className="column is-one-quarter" key={i}>
                <SchoolCard {...school} />
              </div>

            )}

          </div>
        </div>
      </section>
    )
  }
}

export default SchoolsIndex
