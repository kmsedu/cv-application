import React from 'react'

class About extends React.Component {
  constructor () {
    super()

    this.state = {
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lorem, fermentum id risus feugiat, molestie rutrum odio. Pellentesque elementum velit erat, et mattis diam rhoncus et.'
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
      <div className='min-h-[135px]'>
        <h3 className='text-xl mt-4'>About</h3>
        {editMode
          ? <textarea
              className='mt-4 max-w-[90%] text-xs resize-none w-[90%] h-20 p-2 m-0 rounded'
              name='about'
              onChange={this.handleChange}
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lorem, fermentum id risus feugiat, molestie rutrum odio. Pellentesque elementum velit erat, et mattis diam rhoncus et.'
              value={this.state.about}
            />
          : <p className='mt-4 max-w-[90%] text-xs w-[90%] p-2 h-20'>
            {this.state.about}
            </p> /* eslint-disable-line */}
      </div>
    )
  }
}

export default About
