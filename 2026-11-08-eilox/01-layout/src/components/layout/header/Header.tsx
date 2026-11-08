import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header () {
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
                Welcome Bob
            </div>
        </div>
    )
}