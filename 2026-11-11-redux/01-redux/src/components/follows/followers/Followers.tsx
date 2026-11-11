import { useContext, useEffect, useState } from "react"
import Follow from "../follow/Follow"
import type User from "../../../models/User"
import { getFollowers } from "../../../services/followers"
import AuthContext from "../../auth/auth/AuthContext"
import './Followers.css'

export default function Followers () {

    const [followers, setFollowers] = useState<User[]>([])

    const { jwt } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            const followers = await getFollowers(jwt)
            setFollowers(followers)
        })()
    }, [])

    return (
        <div className="Followers">
            {followers.map(follow => <Follow key={follow.id} follow={follow}/>)}
        </div>
    )
}