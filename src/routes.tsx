import { createBrowserRouter } from "react-router-dom"
import { TopPage} from "./components/pages/TopPage"
import { LoginPage } from "./components/pages/LoginPage"
import { NotLoginLayout } from "./components/templates/NotLoginLayout"
import { CalenderPage } from "./components/pages/CalenderPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NotLoginLayout/>,
        children:[
            {index: true,element:<TopPage/>},
            {path: "/login",element:<LoginPage/>},
            {path: "/calender",element:<CalenderPage/>}
        ]
    }
])

