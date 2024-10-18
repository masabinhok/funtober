import { Link } from "react-router-dom";
import funtobers from "../data/funtobers";

const Home = () => {
  return (
    <div className="">
      <nav className="w-full flex justify-center flex-col items-center p-5">
        <h1 className="text-7xl font-bold ">FUNTOBER</h1>
        <p className=" text-2xl text-secondary transition-all ease-in-out ">
          Spooky season is here!
        </p>
      </nav>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-10 p-10">
        {funtobers.map((funtober) => {
          return (
            <div
              key={funtober.name}
              className="flex justify-center items-center  rounded-xl "
            >
              <Link to={funtober.link}>
                <img
                  className="rounded-xl border-2 border-primary hover:border-secondary hover:translate-x-0.5 
                  active:translate-y-0.5 transform transition-all ease-in-out"
                  src={funtober.imageUrl}
                  alt={funtober.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <footer className="p-10 flex items-center flex-col">
        <div>
          <h1 className="text-4xl text-center">What is Funtober?</h1>
          <p className="text-center text-accent text-2xl">
            Funtober is a collection of fun projects to do during the month of
            October. Let's celebrate Open Source.
          </p>
        </div>
        <div className="w-full flex justify-center items-center max-w-[1320px] my-5">
          <a target="_blank" href="https://github.com/masabinhok/funtober">
            <button className="bg-primary hover:translate-x-0.5 hover:scale-2 p-3 active:translate-y-0.5 active:bg-secondary transition-all ease-in-out  ">
              Star Us On GitHub
            </button>
          </a>
        </div>
        <p className="text-center text-text text-2xl">
          Made with ❤️ by{" "}
          <a
            className="text-secondary hover:underline"
            href="https://twitter.com/masabinhok"
          >
            Sabin Shrestha
          </a>{" "}
          and{" "}
          <a
            className="text-secondary hover:underline"
            href="https://github.com/masabinhok/funtober/graphs/contributors"
          >
            Contributors
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
