import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  const getResponse = async () => {
    const rawData = await fetch('/api')
    console.log(rawData)
    const data = rawData.json()
    
    setBackendData(await data)
  }

  useEffect(() => {
    getResponse()
  }, [])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => {
          return (<p key={i}>{user}</p>)
        }
        ))
      }
    </div>
  )
}

export default App