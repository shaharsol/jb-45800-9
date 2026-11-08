import { useState, type PropsWithChildren } from "react";
import AuthContext from "./AuthContext";

export default function Auth(props: PropsWithChildren) {
    const [ jwt, setJwt ] = useState<string>(localStorage.getItem('jwt') || '')

    const { children } = props

    function saveJwt(jwt: string): void {
        setJwt(jwt)
        localStorage.setItem('jwt', jwt)
    }

    function logout(): void {
        saveJwt('')
    }

    return (
        <AuthContext.Provider value={ { jwt, saveJwt, logout } } >
            {children}
        </AuthContext.Provider>
    )
}