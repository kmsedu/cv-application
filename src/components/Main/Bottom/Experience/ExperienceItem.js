import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class ExperienceItem extends React.Component {
  constructor () {
    super()

    this.state = {
      title: 'Job Title',
      dates: '2022 - 2022',
      responsibilities: 'Enter your responsibilities / Experience'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render () {
    const { editMode, onDeleteExperienceItem, id } = this.props

    return (
      <div className='flex justify-around gap-4 items-center text-xs my-4'>
        <div className='flex flex-col gap-1'>
          {editMode
            ? <input
                className='text-right p-1 border border-neutral-200'
                type='text'
                name='title'
                onChange={this.handleChange}
                value={this.state.title}
              />
            : <p className='text-nowrap text-right p-1 font-bold text-sm'>{this.state.title}</p>}
          {editMode
            ? <input
                className='text-right p-1 border border-neutral-200'
                type='text'
                name='dates'
                onChange={this.handleChange}
                value={this.state.dates}
              />
            : <p className='text-nowrap p-1 text-right min-w-[160px]'>{this.state.dates}</p>}
        </div>
        <div className='h-0.5 w-16 min-w-[4rem] bg-neutral-300' />
        <div className='flex'>
          {editMode
            ? <textarea
                className='resize-none p-2 h-14 w-56 border border-neutral-200'
                onChange={this.handleChange}
                name='responsibilities'
                value={this.state.responsibilities}
              />
            : <p className='p-2'>{this.state.responsibilities}</p>}
        </div>
        {editMode &&
          <button
            type='button'
            onClick={() => onDeleteExperienceItem(id)}
          >
            <FontAwesomeIcon icon={faTrash} className='text-red-800' />
          </button>}
      </div>
    )
  }
}

export default ExperienceItem
