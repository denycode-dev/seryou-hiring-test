import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="bg-sky-500 flex w-full flex-col justify-center items-center px-16 py-8 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1298px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <Link to={`/`} className="text-white text-5xl font-black tracking-[24px] grow whitespace-nowrap max-md:text-4xl">
          CINEMA
        </Link>
        <div className="self-center flex justify-between gap-5 my-auto items-start">
          <Link to={`/favorite`} className="text-white text-right text-xl whitespace-nowrap">
            Favorite
          </Link>
          <Link to={`/watchlist`} className="text-white text-right text-xl tracking-tight self-stretch whitespace-nowrap">
            Watchlist
          </Link>
        </div>
      </div>
    </div>
  );
}
