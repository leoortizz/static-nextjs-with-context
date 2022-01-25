import { withJoke, useJoke } from "../context"

const MyApp = withJoke(({ Component, pageProps, data }) => {
  useJoke(data)

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
