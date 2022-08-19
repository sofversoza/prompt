import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setIsPending(false)
			setError(null)
    })
  }, [])

  return { data }

}