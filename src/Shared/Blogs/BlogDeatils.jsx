
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { FaCheck } from "react-icons/fa";
import BlogCarosel from "./BlogCarosel";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BlogComments from "./BlogComments";
import author from '../../assets/author.png'
import RecentPost from "./RecentPost";
import Question from "./Question";
import Category from "./Category";

const BlogDeatils = () => {
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState({})

    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get(`/blog?id=${id}`)
        .then(res => {
            setBlog(res.data)
            setLoading(false)
        })
    },[axiosPublic,id])

    if(loading){
        return <h1>Loading.</h1>
    }

    console.log(blog)

    return (
      <div className=" max-w-screen-xl mx-auto px-4 py-16">
        <div className=" grid grid-cols-1  lg:grid-cols-3 gap-8">
          <div className=" md:col-span-2">
            <div className=" space-y-8">
              <img src={blog?.image} className=" rounded-lg" alt="" />
              <p className="text-gray-500">
                {blog?.description}Stay updated on the latest cosmetic dentistry
                trends, personalized smile makeovers that harmonize aesthetics
                with optimal dental health for lasting confidence.Stay updated
                on the latest cosmetic dentistry trends, personalized smile
                makeovers that harmonize aesthetics with optimal dental health
                for lasting confidence.
              </p>
              <h4 className="text-[#0D0D0D] text-lg font-semibold">
                {blog?.title}
              </h4>
              <p className="text-gray-500">
                {blog?.description}Stay updated on the latest cosmetic dentistry
                trends, personalized smile makeovers that harmonize aesthetics
                with optimal dental health for lasting confidence.Stay updated
                on the latest cosmetic dentistry trends, personalized smile
                makeovers that harmonize aesthetics with optimal dental health
                for lasting confidence.
              </p>
              <div className="md:flex gap-12">
                <ul>
                  <li className="flex items-center gap-3 text-gray-500">
                    <FaCheck className="text-[#4BADE8] text-lg" />
                    Vivamus starlord finibus, dictum massa eget suscipit metus
                    nami
                  </li>
                  <li className="flex items-center gap-3 text-gray-500">
                    <FaCheck className="text-[#4BADE8] text-lg" />
                    Cras ipsum libero, suscipit vitamin tellus vitae, feugiat
                    ultricies purus
                  </li>
                  <li className="flex items-center gap-3 text-gray-500">
                    <FaCheck className="text-[#4BADE8] text-lg" />
                    Morbi maximus mauris eget groot dignissim, in laoreet justo
                    facilisis
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center gap-3 text-gray-500">
                    <FaCheck className="text-[#4BADE8] text-lg" />
                    Cras ipsum libero, suscipit vitamin tellus vitae, feugiat
                    ultricies purus
                  </li>
                  <li className="flex items-center gap-3 text-gray-500">
                    <FaCheck className="text-[#4BADE8] text-lg" />
                    Cras ipsum libero, suscipit vitamin tellus vitae, feugiat
                    ultricies purus
                  </li>
                  <li className="flex items-center gap-3 text-gray-500">
                    <FaCheck className="text-[#4BADE8] text-lg" />
                    Cras ipsum libero, suscipit vitamin tellus vitae, feugiat
                    ultricies purus
                  </li>
                </ul>
              </div>
              <div>
                <BlogCarosel></BlogCarosel>
              </div>
              <p className="text-gray-500">
                Morbi maximus mauris eget groot dignissim, in laoreet justo
                facilisis Morbi maximus mauris eget groot dignissim, in laoreet
                justo facilisis Morbi maximus mauris eget groot dignissim, in
                laoreet justo facilisis Morbi maximus mauris eget groot
                dignissim, in laoreet justo facilisis
              </p>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500">Tags : Dental Service</p>
                <div className="flex items-center gap-5">
                  <p className=" text-gray-500">Share This :</p>
                  <div className="border w-12 h-12 flex justify-center items-center rounded-full bg-[#49AFE9] text-white cursor-pointer">
                    <FaFacebookF />
                  </div>
                  <div className="border w-12 h-12 flex justify-center items-center rounded-full bg-[#49AFE9] text-white cursor-pointer">
                    <FaTwitter />
                  </div>
                  <div className="border w-12 h-12 flex justify-center items-center rounded-full bg-[#49AFE9] text-white cursor-pointer">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <BlogComments></BlogComments>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="text-center  space-y-2 px-8 rounded-md"
              style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
            >
              <img
                src={author}
                className="w-[150px] mx-auto -translate-y-16"
                alt=""
              />
              <div className="-translate-y-12 space-y-2">
                <p className="text-gray-400 text-lg">Author</p>
                <h4 className="text-2xl text-gray-800">Romjan Hossain</h4>
                <p className="text-gray-500">
                  Author skillfully captures the essence of a dental clinic,
                  weaving informative insights into a concise 15-word
                  description
                </p>
                <div className="flex  items-center gap-5 justify-center ">
                  <div className="border w-12 h-12 flex justify-center items-center rounded-full bg-[#49AFE9] text-white cursor-pointer">
                    <FaFacebookF />
                  </div>
                  <div className="border w-12 h-12 flex justify-center items-center rounded-full bg-[#49AFE9] text-white cursor-pointer">
                    <FaTwitter />
                  </div>
                  <div className="border w-12 h-12 flex justify-center items-center rounded-full bg-[#49AFE9] text-white cursor-pointer">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <RecentPost></RecentPost>
            </div>
            <div>
              <Question bgimage={blog?.image}></Question>
            </div>
            <div>
              <Category></Category>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BlogDeatils;