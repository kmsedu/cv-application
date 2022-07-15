import React from 'react'
import About from './About'
import Experience from './Experience/Experience'
import Education from './Education/Education'

class Bottom extends React.Component {
  render () {
    return (
      <section className='main--bottom flex-[4_0_0%] p-4 ml-8'>
        <About />
        <Experience />
        <Education />
      </section>
    )
  }
}

export default Bottom
