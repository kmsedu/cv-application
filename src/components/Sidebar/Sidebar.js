import React from 'react'
import Picture from './Picture'
import ContactInfo from './ContactInfo'
import Address from './Address'

class Sidebar extends React.Component {
  render () {
    const { editMode } = this.props

    return (
      <section className='sidebar flex flex-col flex-none justify-between'>
        <Picture editMode={editMode} />
        <h2 className='text-xl text-center'>Contact</h2>
        <section className='flex-1 justify-self-start'>
          <ContactInfo contactType='phone' editMode={editMode} />
          <ContactInfo contactType='email' editMode={editMode} />
          <ContactInfo contactType='website' editMode={editMode} />
        </section>
        <Address editMode={editMode} />
      </section>
    )
  }
}

export default Sidebar
