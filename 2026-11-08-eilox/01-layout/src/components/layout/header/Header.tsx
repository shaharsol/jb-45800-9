import { NavLink } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import AuthContext from '../../auth/auth/AuthContext'

export default function Header () {

    const { logout } = useContext(AuthContext)

    function logMeOut() {
        logout()
    }

    return (
        <div className="Header">
            <div>
                Logo
            </div>
            <div>
                <NavLink to="/profile" className="ofer">Porfile</NavLink>
            </div>
            <div>
                <NavLink to="/feed">Feed</NavLink>
            </div>
            <div>
                Welcome Bob | <button onClick={logMeOut}>logout</button>
            </div>
        </div>
    )
}