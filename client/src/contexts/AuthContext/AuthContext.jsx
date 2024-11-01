import { createContext, useContext, useState } from "react"
import signup from './SignupHandler'
import login from './LoginHandler'

 export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)



const logout = () => {
    setUser(null)
}

  return (
    <AuthContext.Provider value={{user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
   return useContext(AuthContext)
}

