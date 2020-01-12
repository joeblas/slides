import { useState, useEffect } from 'react'


export default function useSlides() {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    const data = []
    data.push([
      {
        id: 1,
        title: 'Pros',
        content: '## Pros',
        slideIndex: 0
      },
      {
        id: 2,
        title: 'Cons',
        content: '## Cons',
        slideIndex: 1
      },
      {
        id: 3,
        title: 'Architecture',
        content: '## Architecture',
        slideIndex: 2
      },
      {
        id: 3,
        title: 'Design Considerations',
        content: '## Design Considerations',
        slideIndex: 3
      }
    ])

    setSlides(...data)
  }, [])

  return [slides]

}