import React from 'react'
import profilePic from '../../images/elmer.png'

class Picture extends React.Component {
  constructor () {
    super()

    this.state = {
      imageUrl: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render () {
    const { editMode } = this.props

    return (
      <>
        {editMode &&
          <input
            type='text'
            name='imageUrl'
            placeholder='Link to image'
            onChange={this.handleChange}
            value={this.state.imageUrl}
            className='p-2 mt-2 max-w-[80%] mx-auto bg-transparent border border-white rounded focus:outline-none'
          />}
        <img
          src={this.state.imageUrl !== '' ? this.state.imageUrl : profilePic}
          alt='Profile Picture'
          className='rounded-full w-36 h-36 m-10 object-cover'
        />
      </>
    )
  }
}

export default Picture
