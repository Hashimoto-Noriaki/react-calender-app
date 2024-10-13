import { Link,Outlet,useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import { loginUserState } from "../../store/loginUserState";

export const NotLoginLayout = () => {
    const navigate = useNavigate()
    const [loginUser,setLoginUser] = useRecoilState(loginUserState);

    const handleLogout = () => {
        setLoginUser({id:0,name:""})
        navigate("/login")
    }
    
    return (
        <div className="relative">
            <header className="bg-white leading-[50px] fixed top-0  left-0 right-0">
                <div className="container mx-auto flex justify-between">
                    <p className="logo">
                        <Link to="/">スケジュール管理APP</Link>
                    </p>
                    <nav>
                        <ul className="flex justify-center gap-5 text-emerald-800">
                            <li className="flex items-center">{loginUser.name}</li>
                            <li className="flex items-center" onClick={handleLogout}>ログアウト</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="pt-[50px] bg-gradient-to-t from bg-emerald-100 bg-emerald-200 h-screen flex flex-col justify-center items-center">
                <Outlet/>
            </main>
        </div>
    );
}
