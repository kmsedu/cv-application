import React from 'react'
import ExperienceItem from './ExperienceItem'
import { nanoid } from 'nanoid'

class Experience extends React.Component {
  constructor () {
    super()

    this.state = {
      experienceItems: [],
      experienceItemsCount: 0
    }

    this.handleAddExperienceItem = this.handleAddExperienceItem.bind(this)
    this.handleDeleteExperienceItem = this.handleDeleteExperienceItem.bind(this)
  }

  handleAddExperienceItem () {
    this.setState({
      experienceItems: [
        ...this.state.experienceItems,
        nanoid()
      ],
      experienceItemsCount: this.state.experienceItemsCount + 1
    })
  }

  handleDeleteExperienceItem (id) {
    this.setState({
      experienceItems: this.state.experienceItems.filter((item) => {
        return item !== id
      }),
      experienceItemsCount: this.state.experienceItemsCount - 1
    })
  }

  componentDidUpdate () {
    console.log(this.state.experienceItems)
  }

  render () {
    const { editMode } = this.props
    const experienceItemElements = this.state.experienceItems.map((id) => {
      return (
        <ExperienceItem
          id={id}
          key={id}
          editMode={editMode}
          onDeleteExperienceItem={this.handleDeleteExperienceItem}
        />
      )
    })
    return (
      <div className='flex flex-col'>
        <h3 className='text-xl mt-4'>Experience</h3>
        {experienceItemElements}
        {editMode &&
        this.state.experienceItemsCount < 3 &&
          <button
            className='mx-auto w-full text-3xl'
            type='button'
            onClick={this.handleAddExperienceItem}
          >
            +
          </button>}
      </div>
    )
  }
}

export default Experience
