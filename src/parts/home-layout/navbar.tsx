const navbar = () => {
  return (
    <div>
      {/* <!--horizontal navigations--> */}
      <div className="p-4 pb-0 mx-auto flex flex-wrap bg-s">
        <div className="p-4 w-full bg-p">
          {/* <!--dark mode - without text - icons only--> */}
          <div className="p-2 text-s bg-s rounded-lg shadow-lg ">
            <span className="px-2 mr-2 border-r">
              {/* <img
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 -mt-1 inline mx-auto"
              /> */}
              Logo
            </span>
            <span className="px-1 hover:text-p cursor-pointer">
              <i className="fas fa-stream p-2 bg-p rounded-full"></i>
              <span className="mx-1">categories</span>
            </span>
            <span className="px-1 hover:text-p cursor-pointer">
              <i className="fas fa-search p-2 bg-p rounded-full"></i>
              <span className="mx-1">menu</span>
            </span>
            <span className="px-1 hover:text-p cursor-pointer">
              <i className="fas fa-th p-2 bg-p rounded-full"></i>
            </span>
            <span className="px-1 hover:text-p cursor-pointer">
              <i className="w-8 fas fa-calendar-alt p-2 bg-p rounded-full"></i>
            </span>
            <span className="px-1 hover:text-p cursor-pointer w-8 relative">
              <i className="fas fa-bell p-2 bg-p rounded-full"></i>
              <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-p font-medium px-2 shadow-lg rounded-full">
                3
              </span>
            </span>
            <span className="hover:text-p cursor-pointer w-10 relative float-right mr-3">
              <i className="fas fa-user p-2 bg-p rounded-full"></i>
              <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                3
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* <!--vertical navigations--> */}
      <div className="p-4 pt-0 mx-auto flex-wrap w-96 hidden">
        {/* <!--dark mode - wide side navigation--> */}
        <div className="w-full py-4 px-2 text-s bg-s rounded-lg text-left capitalize font-medium shadow-lg">
          {/* <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt="alt placeholder"
            className="w-8 h-8 mx-auto mb-5 "
          /> */}
          Logo
          <span className="cursor-pointer px-2 py-1 hover:bg-p hover:text-gray-300 rounded block mb-5">
            <i className="w-8 fas fa-stream p-2 bg-p rounded-full"></i>
            <span className="mx-2">categories</span>
          </span>
          <span className="cursor-pointer px-2 py-1 hover:bg-p hover:text-gray-300 rounded block mb-5">
            <i className="w-8 fas fa-search p-2 bg-p rounded-full"></i>
            <span className="mx-2">search</span>
          </span>
          <span className="cursor-pointer px-2 py-1 hover:bg-p hover:text-gray-300 rounded block mb-5">
            <span className="w-8 mb-5 relative">
              <i className="w-8 fas fa-user p-2 bg-p rounded-full"></i>
              <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                3
              </span>
            </span>
            <span className="mx-2">sign ups</span>
          </span>
          <span className="cursor-pointer px-2 py-1 hover:bg-p hover:text-gray-300 rounded block mb-5">
            <i className="w-8 fas fa-th p-2 bg-p rounded-full"></i>
            <span className="mx-2">menu</span>
          </span>
          <span className="cursor-pointer px-2 py-1 hover:bg-p hover:text-gray-300 rounded block mb-5">
            <i className="w-8 fas fa-calendar-alt p-2 bg-p rounded-full"></i>
            <span className="mx-2">calendar</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default navbar;
