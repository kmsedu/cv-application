import React from 'react'

class Address extends React.Component {
  constructor () {
    super()

    this.state = {
      address: '13 Real Street, Brooklyn NY'
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
      <div className='text-xs text-center flex justify-center'>
        {editMode
          ? <textarea
              className='p-2 my-6 h-16 max-w-[180px] resize-none text-center border border-white bg-transparent focus:outline-none rounded'
              type='text'
              value={this.state.address}
              name='address'
              onChange={this.handleChange}
            />
          : <p className='p-2 my-6 mb-12 h-8 max-w-[180px]'>{this.state.address}</p>}
      </div>
    )
  }
}

export default Address
