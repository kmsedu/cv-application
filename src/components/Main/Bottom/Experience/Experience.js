import React from 'react'
import ExperienceItem from './ExperienceItem'

class Experience extends React.Component {
  render() {
    return (
      <>
        <h3 className='text-xl my-4'>Experience</h3>
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </>
    )
  }
}

export default Experience