import React from 'react'
import Top from './Top'
import Bottom from './Bottom/Bottom'

class Main extends React.Component {
  render () {
    const { editMode } = this.props
    return (
      <main className='main flex-[3_0_0%] flex flex-col'>
        <Top editMode={editMode} />
        <Bottom editMode={editMode} />
      </main>
    )
  }
}

export default Main
