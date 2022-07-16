import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class EducationItem extends React.Component {
  constructor () {
    super()

    this.state = {
      title: 'Location',
      dates: '2022 - 2022'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  componentDidUpdate () {
    console.log(this.props)
    console.log(this.state)
  }

  render () {
    const { editMode, onDeleteEducationItem, id } = this.props

    return (
      <div className='flex justify-center gap-4 items-center text-xs my-4'>
        <div className='flex gap-1 items-center'>
          {editMode
            ? <input
                className='p-1 text-lg text-right'
                type='text'
                name='title'
                onChange={this.handleChange}
                value={this.state.title}
              />
            : <p className='text-nowrap p-1 text-lg'>{this.state.title}</p>}
          {editMode
            ? <input
                className='p-2.5'
                type='text'
                name='dates'
                onChange={this.handleChange}
                value={this.state.dates}
              />
            : <p className='text-nowrap p-1 min-w-[160px] text-center mt-1'>{this.state.dates}</p>}
        </div>
        {editMode &&
          <button
            type='button'
            onClick={() => onDeleteEducationItem(id)}
          >
            <FontAwesomeIcon icon={faTrash} className='text-red-800' />
          </button>}
      </div>
    )
  }
}

export default EducationItem
