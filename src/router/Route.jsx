import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

// color #4FA9E4

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
        
    }
])

export default router;