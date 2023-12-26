
const BlogComments = () => {
    return (
      <section className="py-16  font-poppins dark:bg-gray-800">
        <div className=" bg-white  shadow-sm dark:border-gray-900 dark:bg-gray-900 ">
          <div className="mb-10">
            <h2 className="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
              Leave a Reply
            </h2>
            <p className="text-sm text-gray-500">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <form action="#" className="">
            <div className="mb-6">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium dark:text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                placeholder="Full name...."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="text"
                className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                placeholder="Email...."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium dark:text-gray-400"
              >
                Website
              </label>
              <input
                type="text"
                className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                placeholder="Website...."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium dark:text-gray-400"
              >
                Full Name
              </label>
              <textarea
                rows={8}
                type="text"
                className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                placeholder="Your Comment...."
                required
              />
            </div>
            {/* ... (similar conversion for other form elements) */}
            <button className="px-4 py-2 text-base text-gray-100 bg-[#49AFE9] rounded hover:bg-[#49aee9d6]">
              Post Comment
            </button>
          </form>
        </div>
      </section>
    );
};

export default BlogComments;