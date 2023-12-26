import { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { IoMdTime } from "react-icons/io";
const RecentPost = () => {
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axiosPublic.get("/blogs").then((res) => {
        setLoading(true);
        setPosts(res.data);
        setLoading(false);
      });
    }, [axiosPublic]);

    if (loading) {
      return <h1>Loding...</h1>;
    }



    return (
      <div
        style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
        className="space-y-8 p-10 mt-10 rounded-lg"
      >
        <h4 className="text-2xl text-gray-800">Recent Post</h4>
        {posts?.slice(0, 3).map((post) => (
          <div className="flex gap-4 items-center" key={post._id}>
            <div className=" basis-2/6">
              <img src={post?.image} className=" rounded-md" alt="" />
            </div>
            <div className="flex-1">
              <h4>{post?.title}</h4>
              <p className="text-[#7A7A7A] flex items-center gap-2 ">
                <IoMdTime className="text-[#7A7A7A]" />
                Date-{post?.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default RecentPost;