import React from 'react'
import profilePic from '../../images/elmer.png'

class Picture extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <img src={profilePic} alt='Profile Picture' className='rounded-full w-36 h-36 m-10' />
      </>
    )
  }
}

export default Picture