import { styled } from "styled-components"
import { useUser } from "../services/useUser"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50)
  display: flex;
  algin-items: center;
  justity-content center;
`

function ProtectedRoute({children}) {
  const navigate = useNavigate()
  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser()

  // 3. If there is NO authenticated user, redirect to /login
  useEffect(function() {
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [isAuthenticated, isLoading, navigate, user])

  // 2. While loading, show a spinner
  if (isLoading) return <FullPage><Spinner /></FullPage>


  // 4. If there IS a user, render the app
  if (isAuthenticated)
    return children
}

export default ProtectedRoute
