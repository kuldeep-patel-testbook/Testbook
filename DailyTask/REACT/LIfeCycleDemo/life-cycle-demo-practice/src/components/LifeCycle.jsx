import React, { useEffect } from 'react'

const LifeCycle = () => {
  useEffect(()=> {
    console.log("Component Mounted");
  }, []);

  const startListening = () => {
    const recognization = new window.SpeechSynthesisVoice;
  }
  return (
    <>
    
    <div>This is Div Component</div>
    </>
  )
}

export default LifeCycle