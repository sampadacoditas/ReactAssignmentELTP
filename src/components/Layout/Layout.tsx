import style from "./Layout.module.scss";
import Header from "../Header/Header"
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import { useEffect, useState } from "react";
import {routes} from "./Layout.data"

const Layout = () => {
    const [page, setPage] = useState("Home");

    const onNavigate = (page: string) => {
        setPage(page);
    }
    const Page=routes[page]
    console.log(Page)
    return (
        <div className={style.app_container}>
            <Header 
                onNavigate={onNavigate}
            />
            <main className={style.app_main}>
                {
                    <Page/>
                }
            </main>
        </div>
    )
}

export default Layout;

