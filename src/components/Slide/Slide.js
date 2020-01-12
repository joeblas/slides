import React from 'react'
import parse from 'remark-parse'
import unified from 'unified'
import remark2react from 'remark-react'

const Slide = ({ slide }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', border: '1px solid red', flex: '1 1 100vw'}}>
      <h5>{slide.title}</h5>
      {
        unified()
          .use(parse)
          .use(remark2react)
          .processSync(slide.content).contents
      }
    </div>
  )
}

export default Slide