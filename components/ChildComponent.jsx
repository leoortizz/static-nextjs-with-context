import { useJoke } from "../context"

export default function ChildComponent() {
  const { joke } = useJoke()

  return <span>{joke}</span>
}
