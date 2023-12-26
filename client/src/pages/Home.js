
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Blog App
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea! 
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto"
              to="/signup"
            >
              Sign Up
            </Link>

            <Link
              className="block w-full bg-indigo-600 text-white rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Home;
