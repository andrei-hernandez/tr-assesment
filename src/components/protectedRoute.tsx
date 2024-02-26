import { Navigate } from "react-router-dom"
import { useCard } from "../hooks"

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useCard()
  if (!auth.card) {
    return <Navigate to="/" />
  }

  return children
}