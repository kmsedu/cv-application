import React from 'react'

class ExperienceItem extends React.Component {
  constructor () {
    super()

    this.state = {
      title: '',
      dates: '',
      responsibilities: ''
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
    const { editMode, onDeleteExperienceItem, id } = this.props

    return (
      <div className='flex justify-around gap-4 items-center text-xs my-4'>
        <div className='flex flex-col gap-1'>
          {editMode
            ? <input
                className='text-right p-1'
                type='text'
                name='title'
                onChange={this.handleChange}
                value={this.state.title}
              />
            : <p className='text-nowrap text-right p-1'>{this.state.title}</p>}
          {editMode
            ? <input
                className='text-right p-1'
                type='text'
                name='dates'
                onChange={this.handleChange}
                value={this.state.dates}
              />
            : <p className='text-nowrap p-1 text-right min-w-[160px]'>{this.state.dates}</p>}
        </div>
        <div className='h-0.5 w-16 min-w-[4rem] bg-neutral-300' />
        <div>
          {editMode
            ? <textarea
                className='resize-none p-2 h-14 w-56'
                onChange={this.handleChange}
                name='responsibilities'
                value={this.state.responsibilities}
              />
            : <p className='p-2'>{this.state.responsibilities}</p>}
        </div>
        <button
          type='button'
          onClick={() => {
            console.log(id)
            onDeleteExperienceItem(id)
          }}
        >
          -
        </button>
      </div>
    )
  }
}

export default ExperienceItem
