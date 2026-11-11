import './Follow.css'
import profilePicSrc from '../../../assets/profile-pic.jpg'
import type User from '../../../models/User'
import { follow, unfollow } from '../../../services/following'
import { useContext } from 'react'
import AuthContext from '../../auth/auth/AuthContext'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { follow as followAction, unfollow as unfollowAction } from "../../../redux/following-slice"

interface FollowProps {
    follow: User    
}
export default function Follow(props: FollowProps) {

    const { follow: { name, id } } = props
    const { jwt } = useContext(AuthContext)

    const isFollowing = useAppSelector(state => state.followingSlice.following.findIndex(f => f.id === id) > -1)

    const dispatch = useAppDispatch()

    async function followMe() {
        try {
            await follow(jwt, id)
            dispatch(followAction(props.follow))            
        } catch (e) {
            alert(e)
        }
    }

    async function unfollowMe() {
        try {
            await unfollow(jwt, id)
            dispatch(unfollowAction({id: props.follow.id}))            
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='Follow'>
            <div>
                <img src={profilePicSrc} />
            </div>
            <div>
                {name}
            </div>
            <div>
                {isFollowing && <button onClick={unfollowMe}>Unfollow</button>}
                {!isFollowing && <button onClick={followMe}>Follow</button>}
            </div>
        </div>
    )
}