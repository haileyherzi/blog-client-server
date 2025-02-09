import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=10&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: fetchPost,
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return null;
  }

  // Collect images for Swiper (index 0, 2, 3, and 4)
  const sliderImages = [posts[0], posts[2], posts[3], posts[4]].filter(post => post?.img);

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post with Swiper */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-3xl overflow-hidden"
        >
          {sliderImages.map((post, index) => (
            <SwiperSlide key={index}>
              <Image
                src={post.img}
                className="rounded-3xl object-cover w-full"
                w="895"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Post Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>

        {/* Post Title */}
        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>

      {/* Other Featured Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts.slice(1, 4).map((post, index) => (
          <div key={index} className="lg:h-1/3 flex justify-between gap-4">
            {post.img && (
              <div className="w-1/3 aspect-video">
                <Image
                  src={post.img}
                  className="rounded-3xl object-cover w-full h-full"
                  w="298"
                />
              </div>
            )}
            <div className="w-2/3">
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">{`0${index + 2}.`}</h1>
                <Link className="text-blue-800">{post.category}</Link>
                <span className="text-gray-500 text-sm">
                  {format(post.createdAt)}
                </span>
              </div>
              <Link
                to={post.slug}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
