import {  useState, useEffect } from "react"

export const UseEffectComponent = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    let timer = setInterval(() => {
      setCount((count) => count + 1)
      console.log(count)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1>FirstCounter Count: {count}</h1>
    </div>
  )
}
