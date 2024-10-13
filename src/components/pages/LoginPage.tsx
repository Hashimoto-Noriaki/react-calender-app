import { PrimaryBtn } from "../atoms/PrimaryBtn"

export const LoginPage = () => {
    return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
        <form className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl text-emerald-800 font-bold text-ceneter" >
                ログイン
            </h1>
            <div className="w-[80%]">
                <input
                    type = "text"
                    className="w-full border-solid border-4 rounded-md p-2 border-emerald-800"
                    placeholder = "email"
                />
            </div>
            <div className="w-[80%]">
                <input
                    type = "password"
                    className="w-full border-4  border-solid rounded-md border-emerald-800 p-2"
                    placeholder = "password"
                />
            </div>

            <PrimaryBtn>ログイン</PrimaryBtn>
        </form>
    </div>
    )
}
