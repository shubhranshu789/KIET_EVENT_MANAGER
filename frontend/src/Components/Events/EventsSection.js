import React from 'react'
import Navbar from '../Navbar/Navbar'


import VerticalAccordion from '../UthaeHueComponents/VerticalAccordion/VerticalAccordion'

function EventsSection() {
  return (
    <div style={{backgroundColor: "#171717"}}>
        <Navbar/>
        <div>
            <h1 style={{color : "white"}}>All Eventts</h1>

            <VerticalAccordion/>
        </div>
    </div>
  )
}

export default EventsSection