import React from 'react'

class Top extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      title: ''
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
      <section className='flex flex-1 flex-col bg-neutral-300 items-end justify-center'>
        <div
          className='mr-12 self-end flex flex-col gap-2'
        >
          {editMode
            ? <input
                type='text'
                placeholder='John'
                name='firstName'
                className='py-1 pr-2 text-3xl text-right bg-transparent border border-neutral-400 rounded'
                onChange={this.handleChange}
                value={this.state.firstName}
              />
            : <h2 className='py-1 pr-2 text-3xl text-right border border-transparent'>{this.state.firstName}</h2>}

          {editMode
            ? <input
                type='text'
                placeholder='Doe'
                name='lastName'
                className='py-1 pr-2 text-xl text-right bg-transparent border border-neutral-400 rounded'
                onChange={this.handleChange}
                value={this.state.lastName}
              />
            : <h3 className='py-1 pr-2 text-xl text-right border border-transparent'>{this.state.lastName}</h3>}
        </div>

        {editMode
          ? <input
              type='text'
              placeholder='Software Developer'
              name='title'
              className='py-1 pr-2 mr-12 mt-3 text-right bg-transparent border border-neutral-400 rounded'
              onChange={this.handleChange}
              value={this.state.title}
            />
          : <h3 className='py-1 pr-2 mr-12 mt-3 text-right border border-transparent'>{this.state.title}</h3>}
      </section>
    )
  }
}

export default Top
