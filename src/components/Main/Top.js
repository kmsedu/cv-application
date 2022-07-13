import React from 'react'

class Top extends React.Component {
  render() {
    return (
      <section className='main--top flex flex-1 flex-col items-end bg-neutral-300 justify-center'>
        <div className='main--top-name pr-24'>
          <h1 className='main--top-first-name text-3xl'>John</h1>
          <h2 className='main--top-second-name text-xl text-right'>Doe</h2>
        </div>
      <h2 className='main--top-job-title pr-24 mt-3'>Software Developer</h2>
      </section>
    )
  }
}

export default Top