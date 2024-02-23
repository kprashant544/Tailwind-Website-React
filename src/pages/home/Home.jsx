function Home() {
  return (
    <div>
      <div className="bg-[url('./parasite.jpg')]  bg-cover bg-center text-white flex ">
        {/* <h2 className=" text-5xl px-36 py-52">Parasite</h2> */}

        <div className="px-36 py-52">
          <button className=" text-2xl bg-red-600 rounded">Watch Now</button>
        </div>
      </div>

      <div className="bg-black pt-5  border-b"></div>

      <div className="bg-black">
        <h3 className="pt-11 pl-11 text-white text-xl ">Latest Movies</h3>
        <div className="pt-12 pl-12 flex space-x-11 ">
          <img
            className=" rounded-xl"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <img
            className=" rounded-xl"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <img
            className=" rounded-xl"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <img
            className=" rounded-xl"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <img
            className=" rounded-xl"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <img
            className=" rounded-xl"
            src="https://picsum.photos/seed/picsum/200/300"
          />
        </div>
      </div>
      <div className="bg-black pt-5  border-b"></div>
      <div className="bg-black">
        <h3 className="pt-11 pl-11 text-white text-xl ">Latest Series</h3>
        <div className="pt-12 pl-12 flex space-x-11 ">
          <img className=" rounded-xl" src="https://picsum.photos/200/300" />
          <img className=" rounded-xl" src="https://picsum.photos/200/300" />
          <img className=" rounded-xl" src="https://picsum.photos/200/300" />
          <img className=" rounded-xl" src="https://picsum.photos/200/300" />
          <img className=" rounded-xl" src="https://picsum.photos/200/300" />
          <img className=" rounded-xl" src="https://picsum.photos/200/300" />
        </div>
      </div>
    </div>
  );
}

export default Home;
