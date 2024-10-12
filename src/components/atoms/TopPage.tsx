import React from 'react'

export const TopPage = () => {
    return (
        <div className="relative">
            <header className="bg-white leading-[50px] fixed top-0  left-0 right-0">
                <div className="container mx-auto flex justify-between">
                    <p className="logo">スケジュール管理</p>
                    <nav>
                        <ul className="flex gap-5 text-emerald-800">
                            <li>利用方法</li>
                            <li>ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="pt-[50px] bg-gradient-to-t from bg-emerald-100 bg-emerald-200 h-screen">
                <div className="text-center">
                    <h1 className="text-7xl logo">スケジュール管理App</h1>
                    <p className="pt-[10vh] text-5xl">
                        スケジュールを管理するアプリです。
                    </p>
                </div>
                <div className="pt-[20vh]">
                    <button className="bg-emerald-800 text-white p-4 text-lg rounded-lg">
                        ログイン
                    </button>
                </div>
            </main>
        </div>
    )
}
