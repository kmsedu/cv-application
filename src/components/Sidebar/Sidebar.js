import React from 'react'
import Picture from './Picture'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='sidebar flex flex-1 p-3 justify-center'>
        <Picture />
      </section>
    )
  }
}

export default Sidebar