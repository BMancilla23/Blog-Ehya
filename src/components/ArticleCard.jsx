import { images } from "../constants/images";
import PropTypes from "prop-types";
import { IoCheckmark } from "react-icons/io5";

export const ArticleCard = ({ className }) => {
  const { PostImage, PostProfileImage } = images;

  return (
    <>
      <div
        className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
      >
        <div className="md:h-52 lg:h-48 xl:h-60">
          <img
            src={PostImage}
            alt="title"
            className="w-full object-cover object-center h-full"
          />
        </div>

        <div className="p-5">
          <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            Future of Works
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            Majority of people will work in jobs that dont exist today.
          </p>
          <div className="flex justify-between flex-nowrap items-center mt-6">
            <div className="flex items-center gap-x-2">
              <img
                src={PostProfileImage}
                alt="post profile"
                className="w-9 h-9 md:w-10 md:h-10"
              />
              <div className="flex flex-col">
                <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                  Jhon Doe
                </h4>
                <div className="flex items-center gap-x-2">
                  <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                    <IoCheckmark className="w-1.5 h-1.5 text-[#36B37E]" />
                  </span>
                  <span className="itelic text-dark-light text-xs ">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <span className="font-bold text-dark-light italic text-sm md:text-base">
              02 May
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

ArticleCard.propTypes = {
  className: PropTypes.string,
};
