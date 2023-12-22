import React, {Suspense} from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css'

export const Layout = () => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <nav>
                    <NavLink to="/" className={s.navlink}>Home</NavLink>
                    <NavLink to="/movies" className={s.navlink}>Movies</NavLink>
                </nav>
            </header>

            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <Outlet/>
                </div>
            </Suspense>

        </div>
    )
}