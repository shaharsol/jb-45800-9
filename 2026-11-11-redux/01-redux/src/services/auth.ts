import type Jwt from "../models/Jwt";
import type Login from "../models/Login";
import axios from 'axios'

export async function signin(login: Login): Promise<Jwt> {
    const { data } = await axios.post<Jwt>(`${import.meta.env.VITE_WEB_SERVER}/auth/login`, login)
    return data
}