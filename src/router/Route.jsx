import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BlogDeatils from "../Shared/Blogs/BlogDeatils";
import Apoinment from "../components/Appoinment/Apoinment";
import ServicePage from "../pages/ServicePage/ServicePage";
import ContactPage from "../pages/ContactPage/ContactPage";

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
            },
            {
                path : '/appoinment',
                element : <Apoinment></Apoinment>
            },
            {
                path : '/service',
                element : <ServicePage></ServicePage>
            },
            {
                path : '/contact',
                element : <ContactPage></ContactPage>
            }
        ]
        
    }
])

export default router;