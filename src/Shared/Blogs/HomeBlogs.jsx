
import { useEffect, useState } from "react";
import SectionTtile from "../SectionTtile/SectionTtile";
import useAxiosPublic from "../../hook/useAxiosPublic";
import SingleBlog from "./SingleBlog";

const HomeBlogs = () => {

    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        axiosPublic.get('/blogs')
        .then(res => {
            setLoading(true)
            setBlogs(res.data)
            setLoading(false)
        })
    },[axiosPublic])

    if(loading){
        return <h1>Loding...</h1>
    }

    console.log(blogs)


    return (
      <div className="max-w-screen-xl mx-auto px-4">
        <SectionTtile
          sortTtile={"Our Recent Blogs"}
          longTtile={"Latest Blog & Articles"}
          description={
            "Discover a brighter, healthier smile with our expert dental care. From cleanings to cosmetic dentistry, we prioritize your oral well-being"
          }
        ></SectionTtile>

        <div className="grid md:grid-cols-2 gap-8 py-12">
          {blogs?.slice(0, 4).map((blog) => (
            <SingleBlog key={blog._id} blog={blog}></SingleBlog>
          ))}
        </div>
      </div>
    );
};

export default HomeBlogs;