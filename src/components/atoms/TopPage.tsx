import React from 'react'

export const TopPage = () => {
    return (
        <div>
            <header>
                <div className="container mx-auto flex justify-between">
                    <p>スケジュール管理</p>
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
