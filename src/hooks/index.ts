import { useContext } from "react"
import { CardContext } from "../context/cardContext"

export const useCard = () => {
  return useContext(CardContext)
}
