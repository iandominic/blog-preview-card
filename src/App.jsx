import React from "react";
import article from "../src/assets/illustration-article.svg";
import logo from "../src/assets/image-avatar.webp";

const App = () => {
  return (
    <div className="w-full h-screen bg-main flex justify-center items-center">
      <div className="bg-white z-10 relative shad w-[320px] h-[490px] md:h-[520px] md:w-[380px] rounded-2xl flex flex-col  overflow-hidden p-[22px] border-black border-[1px]">
        <div className="w-full h-[195px] overflow-hidden rounded-xl ">
          <img
            alt=""
            className="w-full scale-[1.2] md:scale-[1.1] h-[193px]"
            src={article}
          />
        </div>
        <div className="flex pt-6 pb-[11px] gap-3 flex-col">
          <div className="text-[12px] md:text-[14px] flex items-center justify-center rounded-md max-w-[72px] md:max-w-[80px]  text-center bg-main px-3 py-1  font-bold">
            Learning
          </div>
          <p className="text-[12px] md:text-[14px]">Published 21 Dec 2023</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="m-0 p-0 cursor-pointer hover:text-[#F4D04E] md:text-[24px] font-bold text-[20px]">
            HTML & CSS foundations
          </p>
          <p className="m-0 p-0 p-gray font-semibold text-[13px] md:text-[16px] leading-[20px] tracking-wide">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex pt-[12px] items-center gap-3">
            <img className="w-[30px] md:w-[40px]" alt="" src={logo} />
            <p className="m-0 p-0 font-bold text-[14px] md:text-[16px]">
              Greg Hooper
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
