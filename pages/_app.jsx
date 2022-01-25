import { useEffect } from "react"
import { withJoke, useJoke } from "../context"

const MyApp = withJoke(({ Component, pageProps, data }) => {
  const { setJoke } = useJoke()

  useEffect(() => {
    setJoke(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Component {...pageProps} />
})

MyApp.getInitialProps = async () => {
  const { value } = await fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
  }).then((res) => res.json())

  return {
    data: value,
  }
}

export default MyApp
