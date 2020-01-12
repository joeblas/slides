import React, { useState } from 'react'
import Slide from '../Slide'
import { checkIfNextSlide } from './helpers'

const SlideShow = ({ slides = [] }) => {
  const [currentViewed, setCurrentViewed] = useState(0)

  const handleNextSlide = () => {
    setCurrentViewed(currentViewed + 1)
  }

  const handlePrevSlide = () => {
    setCurrentViewed(currentViewed - 1)
  }

  const currentSlide = slides.find(s => s.slideIndex === currentViewed) || {}
  return (
    <div style={{ display: 'flex' }}>
      {currentSlide.slideIndex > 0 && <button onClick={handlePrevSlide}> back </button>}
      <Slide key={currentSlide.id} slide={currentSlide} />
      {checkIfNextSlide(slides, currentSlide) && <button onClick={handleNextSlide}> next </button>}
    </div>
  )
}

export default SlideShow
