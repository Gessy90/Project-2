import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {

  componentDidMount(){
    console.log(this.props.school)
    console.log(this.props.school.latitude)
    console.log(this.props.school.longitude)

    this.map = new mapboxgl.Map({
      container: this.mapDiv, // has to be DOM element
      style: 'mapbox://styles/mapbox/streets-v9',
      center: ({ lat: this.props.school.latitude, lng: this.props.school.longitude}),
      zoom: 13
    })

    const schoolElement = document.createElement('DIV')
    schoolElement.className = 'custom-marker' // passing vanilla JS to style the marker

    return new mapboxgl.Marker(schoolElement)
      .setLngLat({ lat: this.props.school.latitude, lng: this.props.school.longitude})
      .addTo(this.map)
  }

  render() {
    console.log('props.school is -------->', this.props.school)

    return (
    // render div map box needs vannilla JS
    // ref function is map div mapp div onl exist in render scope

      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
