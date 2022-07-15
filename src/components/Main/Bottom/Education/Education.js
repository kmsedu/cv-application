import React from 'react'
import EducationItem from './EducationItem'

class Education extends React.Component {
  render () {
    return (
      <>
        <h3 className='text-xl mt-4'>Education</h3>
        <EducationItem />
        <EducationItem />
        <EducationItem />
      </>
    )
  }
}

export default Education
