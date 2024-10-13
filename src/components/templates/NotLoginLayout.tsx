import { Link,Outlet } from "react-router-dom";

export const NotLoginLayout = () => {
  return (
    <div className="relative">
        <header className="bg-white leading-[50px] fixed top-0  left-0 right-0">
            <div className="container mx-auto flex justify-between">
                <p className="logo">
                    <Link to="/">スケジュール管理APP</Link>
                </p>
                <nav>
                    <ul className="flex gap-5 text-emerald-800">
                        <li>利用方法</li>
                        <li>
                            <Link to="/login">ログイン</Link>
                        </li>
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
