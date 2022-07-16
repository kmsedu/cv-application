import React from 'react'
import ExperienceItem from './ExperienceItem'

class Experience extends React.Component {
  render () {
    return (
      <div>
        <h3 className='text-xl mt-4'>Experience</h3>
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    )
  }
}

export default Experience
