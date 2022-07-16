import React from 'react'
import EducationItem from './EducationItem'
import { nanoid } from 'nanoid'

class Education extends React.Component {
  constructor () {
    super()

    this.state = {
      educationItems: [],
      educationItemsCount: 0
    }

    this.handleAddEducationItem = this.handleAddEducationItem.bind(this)
    this.handleDeleteEducationItem = this.handleDeleteEducationItem.bind(this)
  }

  handleAddEducationItem () {
    this.setState({
      educationItems: [
        ...this.state.educationItems,
        nanoid()
      ],
      educationItemsCount: this.state.educationItemsCount + 1
    })
  }

  handleDeleteEducationItem (id) {
    this.setState({
      educationItems: this.state.educationItems.filter((item) => {
        return item !== id
      }),
      educationItemsCount: this.state.educationItemsCount - 1
    })
  }

  render () {
    const { editMode } = this.props
    const educationItemElements = this.state.educationItems.map((id) => {
      return (
        <EducationItem
          id={id}
          key={id}
          editMode={editMode}
          onDeleteEducationItem={this.handleDeleteEducationItem}
        />
      )
    })
    return (
      <div>
        <h3 className='text-xl mt-4'>Education</h3>
        {educationItemElements}
        {editMode &&
        this.state.educationItemsCount < 3 &&
          <button type='button' onClick={this.handleAddEducationItem}>+</button>}
      </div>
    )
  }
}

export default Education
