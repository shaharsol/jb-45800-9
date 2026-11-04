import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [now, setNow] = useState<string>((new Date()).toLocaleTimeString())
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow((new Date()).toLocaleTimeString())
      console.log('updating now...')
    }, 1000)
    console.log(`interval id is ${intervalId}`)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  /*
  3 options for 2nd useEffect param:
  1. omit, run the effect on initial render AND on any re-render
  2. empty array, run the effect only on initial render
  3. state vars inside the array - run the effect when the mentioned state is changed
  */

  return (
    <>
      {now}
    </>
  )
}

export default App
