import React from 'react'
import Top from './Top'
import Bottom from './Bottom/Bottom'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className='main flex-[3_0_0%] bg-neutral-200 flex flex-col'>
        <Top />
        <Bottom />
      </main>
    )
  }
}

export default Main