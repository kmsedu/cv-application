import React from 'react'
import Picture from './Picture'
import ContactInfo from './ContactInfo'
import Address from './Address'

class Sidebar extends React.Component {
  render () {
    const { editMode } = this.props

    return (
      <section className='sidebar flex flex-col flex-none justify-between bg-gradient-to-b from-blue-900 to-blue-800 text-white'>
        <Picture editMode={editMode} />
        <h2 className='text-xl font-extrabold text-center'>Contact</h2>
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
