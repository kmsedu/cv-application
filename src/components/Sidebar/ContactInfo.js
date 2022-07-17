import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactInfo extends React.Component {
  constructor () {
    super()

    this.state = {
      contactText: 'Contact Info'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  getIconType (iconName) {
    if (iconName === 'phone') return faPhone
    if (iconName === 'email') return faEnvelope
    return faGlobe
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render () {
    const { contactType, editMode } = this.props

    return (
      <div className='flex gap-2 my-8 items-center justify-center text-xs'>
        <FontAwesomeIcon icon={this.getIconType(contactType)} className='text-xl' />
        {editMode
          ? <input
              type='text'
              onChange={this.handleChange}
              value={this.state.contactText}
              name='contactText'
              className='mt-1 p-2'
            />
          : <p className='mt-1'>{this.state.contactText}</p>}
      </div>
    )
  }
}

export default ContactInfo
