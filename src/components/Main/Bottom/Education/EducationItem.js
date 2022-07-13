import React from 'react'

class EducationItem extends React.Component {
  render () {
    return (
      <div className='flex justify-between items-center max-w-[70%] text-xs my-8'>
        <div> 
          <p>Software Developer</p>
          <p>2022 - 2022</p>
        </div>
        <div className='h-0.5 w-[30%] bg-neutral-300'></div>
        <div>
          <p>Responsibilities</p>
        </div>
      </div>
    )
  }
}

export default EducationItem