import HomeAboutMain from "./HomeAboutMain";

const HomeAbout = () => {
  return (
    <div className="">
      <div className="container mx-auto p-5 px-[5%] pt-28">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="px-[5%] ">
            <img src="https://webextheme.com/html/loxicat/images/about/about.png" />
          </div>

          <HomeAboutMain></HomeAboutMain>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
