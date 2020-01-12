import { checkIfNextSlide } from '../components/Slideshow/helpers'

const testArray = [
  {
    slideIndex: 0
  },
  {
    slideIndex: 1
  }
]


describe('slide unit test', () => {
  it('slideIndex 0 should render next button', () => {
    const result = checkIfNextSlide(testArray, { slideIndex: 0 })
    expect(result).toBeTruthy()
  })

  it('slideIndex 1 should not render next button', () => {
    const result = checkIfNextSlide(testArray, { slideIndex: 1})
    expect(result).toBeFalsy()
  })

})


