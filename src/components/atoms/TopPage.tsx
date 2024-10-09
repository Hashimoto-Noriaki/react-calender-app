import React from 'react'

export const TopPage = () => {
    return (
        <header>
            <div className="flex justify-between">
            <p>スケジュール管理</p>
            <nav>
                <ul className="flex gap-5">
                    <li>利用方法</li>
                    <li>ログイン</li>
                </ul>
            </nav>
        </div>
        </header>
    )
}
