import { createContext } from "react"

interface AuthContextInterface {
    jwt: string,
    saveJwt(jwt: string): void
    logout(): void
}

const AuthContext = createContext<AuthContextInterface>({jwt: '', saveJwt: (jwt: string) => {}, logout: () => {}})
export default AuthContext