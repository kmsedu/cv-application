import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactInfo extends React.Component {
  render() {
    return (
      <div className='flex gap-2 my-8'>
        <FontAwesomeIcon icon={faPhone} />
        <p>57574657843</p>
      </div>
    )
  }
}

export default ContactInfo