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

  componentDidUpdate () {
    console.log(this.state)
  }

  render () {
    return (
      <section className='flex flex-1 flex-col items-end bg-neutral-300 items-end justify-center'>
        <div
          className='mr-24 self-end flex flex-col'
        >
          <input
            type='text'
            placeholder='John'
            name='firstName'
            className='text-3xl text-right bg-transparent'
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <input
            type='text'
            placeholder='Doe'
            name='lastName'
            className='text-xl text-right bg-transparent'
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </div>
        <input
          type='text'
          placeholder='Software Developer'
          name='title'
          className='mr-24 mt-3 text-right bg-transparent'
          onChange={this.handleChange}
          value={this.state.title}
        />
      </section>
    )
  }
}

export default Top
