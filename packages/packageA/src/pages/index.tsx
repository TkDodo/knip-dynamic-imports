import * as React from 'react'

const worker = new Worker(new URL('test-worker', import.meta.url))

export default function Home() {
    const [message, setMessage] = React.useState('')
    React.useEffect(() => {
        worker.onmessage = (event) => {
            console.log(event.data)
            setMessage(event.data)
        }
    }, [])
  return (
      <main>
          {message}
      </main>
  )
}
