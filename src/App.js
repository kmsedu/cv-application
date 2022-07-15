import React from 'react'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      editMode: false
    }

    this.handleToggleEditMode = this.handleToggleEditMode.bind(this)
  }

  handleToggleEditMode () {
    this.setState({ editMode: !this.state.editMode })
  }

  render () {
    return (
      <div id='App' className='flex h-screen'>
        <Main editMode={this.state.editMode} />
        <Sidebar editMode={this.state.editMode} />
        <button
          type='button'
          className='fixed bottom-3 text-white rounded left-1/2 bg-neutral-500 hover:bg-neutral-600 py-2 px-4'
          onClick={this.handleToggleEditMode}
        >Edit
        </button>
      </div>
    )
  }
}

export default App
