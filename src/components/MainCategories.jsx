import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=photography"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Photography
        </Link>
        <Link
          to="/posts?cat=fashion"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Fashion
        </Link>
        <Link
          to="/posts?cat=recipe"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Recipes
        </Link>
        <Link
          to="/posts?cat=lifestyle"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Lifestyle
        </Link>
        <Link
          to="/posts?cat=music"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Music
        </Link>
        <Link
          to="/posts?cat=poetry"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Poetry
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search/>
    </div>
  );
};

export default MainCategories;
