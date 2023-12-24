import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const SingleBlog = ({blog}) => {

    


    return (
      <div className="xl:flex items-center gap-6">
        <div className="flex-1">
          <img src={blog?.image} className="rounded-xl" alt="" />
        </div>
        <div className=" space-y-2 flex-1">
          <h4 className="text-[#585C60] text-lg font-semibold">
            {blog?.title}
          </h4>
          <p className="text-[#C6C6C6]">Date-{blog?.date}</p>
          <p className="text-[#B0B0B0]">{blog?.description.slice(0, 100)}</p>
          <Link to={`/blog/${blog?._id}`} className="flex items-center gap-2 text-[#4BADE8]">
            Vew Details <FaArrowRight />
          </Link>
        </div>
      </div>
    );
};

export default SingleBlog;