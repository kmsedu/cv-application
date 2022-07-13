import React from 'react'
import Picture from './Picture'
import ContactInfo from './ContactInfo'
import Address from './Address'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='sidebar flex flex-col flex-1 p-3 items-center justify-between'>
        <Picture />
        <h2 className='text-xl'>Contact</h2>
        <section className='flex-1 justify-self-start'>
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
        </section>
        <Address />
      </section>
    )
  }
}

export default Sidebar