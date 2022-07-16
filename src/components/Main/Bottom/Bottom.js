import React from 'react'
import About from './About'
import Experience from './Experience/Experience'
import Education from './Education/Education'

class Bottom extends React.Component {
  render () {
    const { editMode } = this.props
    return (
      <section className='main--bottom flex-[4_0_0%] p-4 ml-8'>
        <About editMode={editMode} />
        <Experience editMode={editMode} />
        <Education editMode={editMode} />
      </section>
    )
  }
}

export default Bottom
