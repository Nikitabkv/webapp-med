import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div onClick={() => setCount((count) => count+1 )}>
        WebApp [{count}]
      </div>
    </>
  )
}

export default App
