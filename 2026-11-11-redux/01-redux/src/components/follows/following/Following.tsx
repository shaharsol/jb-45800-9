import { useContext, useEffect, useState } from "react"
import Follow from "../follow/Follow"
import type User from "../../../models/User"
import { getFollowing } from "../../../services/following"
import AuthContext from "../../auth/auth/AuthContext"
import './Following.css'
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { populate } from "../../../redux/following-slice"

export default function Following () {

    // const [following, setFollowing] = useState<User[]>([])
    const following = useAppSelector(state => state.followingSlice.following)
    const dispatch = useAppDispatch()

    const { jwt } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            try {
                const following = await getFollowing(jwt)
                dispatch(populate(following))
                // setFollowing(following)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <div className="Following">
            {following.map(follow => <Follow key={follow.id} follow={follow}/>)}
        </div>
    )
}