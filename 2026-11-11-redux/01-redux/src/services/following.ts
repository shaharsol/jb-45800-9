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