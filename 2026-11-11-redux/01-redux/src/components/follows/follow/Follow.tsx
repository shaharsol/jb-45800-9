import './Follow.css'
import profilePicSrc from '../../../assets/profile-pic.jpg'
import type User from '../../../models/User'

interface FollowProps {
    follow: User    
}
export default function Follow(props: FollowProps) {

    const { follow: { name } } = props

    return (
        <div className='Follow'>
            <div>
                <img src={profilePicSrc} />
            </div>
            <div>
                {name}
            </div>
            <div>
                <button>follow/unfollow</button>
            </div>
        </div>
    )
}