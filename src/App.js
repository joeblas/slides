import React from 'react';
import Slideshow from './components/Slideshow'
import useSlides from './hooks/useSlides';


function App() {
  const [slides] = useSlides()
  return (
    <div>
      <Slideshow slides={slides} />
    </div>
  );
}

export default App;
