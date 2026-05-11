import Ejemplo from "../pages/ejemplo";
import Home from "../pages/home";
import Layout from "./Layout";
import Todoclass from "../pages/Dancosta.jsx"

export const childrenRouterList = [
    {
        index: true,
        Component: Home,
        text: "Home"
    },
    {
        path: "login",
        Component: Ejemplo,
        text: "Ejemplo"
    },
    {
        path: "Todo",
        Component: Todoclass,
        text: "Todo"
    }

]