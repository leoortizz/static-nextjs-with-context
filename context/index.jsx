import { createContext, useState, useContext } from "react"

export const JokeContext = createContext()

export default function JokeProvider({ children }) {
  const [joke, setJoke] = useState()

  return (
    <JokeContext.Provider value={{ joke, setJoke }}>
      {children}
    </JokeContext.Provider>
  )
}

export function useJoke() {
  const context = useContext(JokeContext)

  return context
}

export function withJoke(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => (
    <JokeProvider>
      <Component {...props} />
    </JokeProvider>
  )
}
