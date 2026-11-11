import { useContext, useEffect, useState } from "react"
import Follow from "../follow/Follow"
import type User from "../../../models/User"
import { getFollowing } from "../../../services/following"
import AuthContext from "../../auth/auth/AuthContext"
import './Following.css'

export default function Following () {

    const [following, setFollowing] = useState<User[]>([])

    const { jwt } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            const following = await getFollowing(jwt)
            setFollowing(following)
        })()
    }, [])

    return (
        <div className="Following">
            {following.map(follow => <Follow key={follow.id} follow={follow}/>)}
        </div>
    )
}