import { ChangeEvent,useState } from "react"
import { Input } from "../atoms/Input"
import { PrimaryBtn } from "../atoms/PrimaryBtn"
import { LoginInfoType } from "../../types/login"

export const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
        email: "",
        password: "",
    })

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
        <form className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl text-emerald-800 font-bold text-ceneter" >
                ログイン
            </h1>
            <div className="w-[80%]">
                <Input
                    name = "email"
                    type = "text"
                    placeholder = "email"
                    value = {loginInfo.email}
                    onChange={changeLoginInfo}
                />
            </div>
            <div className="w-[80%]">
                <Input
                    name = "password"
                    type = "password"
                    placeholder = "password"
                    value = {loginInfo.password}
                    onChange={changeLoginInfo}
                />
            </div>
            <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
        </form>
    </div>
    )
}
