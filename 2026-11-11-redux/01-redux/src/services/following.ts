import axios from "axios";
import type User from "../models/User";

export async function getFollowing(jwt: string): Promise<User[]> {
    const { data } = await axios<User[]>(`${import.meta.env.VITE_WEB_SERVER}/follows/following`, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    return data
}

export async function follow(jwt: string, userId: string): Promise<void> {
    console.log(jwt)
    await axios.post(`${import.meta.env.VITE_WEB_SERVER}/follows/follow/${userId}`,{}, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
}

export async function unfollow(jwt: string, userId: string): Promise<void> {
    await axios.post(`${import.meta.env.VITE_WEB_SERVER}/follows/unfollow/${userId}`,{}, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
}