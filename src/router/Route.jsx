import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BlogDeatils from "../Shared/Blogs/BlogDeatils";

// color #4FA9E4

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/blog/:id',
                element : <BlogDeatils></BlogDeatils>
            }
        ]
        
    }
])

export default router;