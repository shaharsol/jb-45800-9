import { useContext } from "react";
import type Login from "../../../models/Login";
import { signin } from '../../../services/auth'
import { useForm } from 'react-hook-form'
import AuthContext from "../auth/AuthContext";

export default function Login() {

    const { register, handleSubmit } = useForm<Login>()

    const { saveJwt } = useContext(AuthContext)

    async function submit(login: Login) {
        // console.log(login)
        try {
            const { jwt } = await signin(login)
            console.log(jwt)
            saveJwt(jwt)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder="username" {...register('username')} />
                <input placeholder="password" {...register('password')} />
                <button>login</button>
            </form>
        </div>
    )
}
