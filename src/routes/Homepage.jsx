import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div
        className="relative bg-cover bg-center py-16 px-6"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/9xzx6mhp4g/DALL_E%202025-02-09%2012.19.15%20-%20A%20stylish%20and%20minimalist%20blog%20cover%20image%20featuring%20a%20balanced%20collage%20of%20photography,%20food,%20and%20lifestyle%20elements.%20The%20design%20includes%20a%20vintage%20cam.webp?updatedAt=1739092837200')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10 text-white">
          {/* Titles */}
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              The Daily Pulse: Your Source for News, Trends, and Insights
            </h1>
            <p className="text-lg md:text-xl">
              Stay informed with the latest news, trends, and stories that
              matter—fresh updates, every day!
            </p>
          </div>

          {/* Animated button */}
          <div className="flex justify-center items-center text-lg md:text-xl text-white mt-8">
            <Link to="write" className="relative">
              <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className="text-lg"
              >
                <path
                  id="circlePath"
                  fill="none"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
                
                <text fill="white"  fontSize="20" fontWeight="600">
                  <textPath  href="#circlePath" startOffset="0%">
                    Write your story •
                  </textPath>
                  <textPath href="#circlePath" startOffset="50%">
                    Share your idea •
                  </textPath>
                </text>
              </svg>

              <button className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
