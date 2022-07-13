import React from 'react'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

class App extends React.Component {
  render () {
    return (
      <div id='App' className='flex h-screen'>
        <Main />
        <Sidebar />
      </div>
    )
  }
}

export default App
