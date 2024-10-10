import React from 'react'

export const TopPage = () => {
    return (
        <div>
            <header className="leading-[50px]">
                <div className="container mx-auto flex justify-between">
                    <p className="logo">スケジュール管理</p>
                    <nav>
                        <ul className="flex gap-5">
                            <li>利用方法</li>
                            <li>ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
