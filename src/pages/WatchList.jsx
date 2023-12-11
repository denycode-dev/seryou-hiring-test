import MovieCard from "../components/MovieCard";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
export default function WatchList() {
  const { localBookmark } = useSelector((state) => state.localSlice);
  return (
      <div className="self-center flex w-full max-w-[1308px] flex-col items-stretch mt-16 mb-1.5 px-5 max-md:max-w-full max-md:mt-10">
        <Title title="Your Watchlist" />
        <div className="flex flex-wrap justify-start gap-5 mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        {localBookmark && localBookmark.length
            ? localBookmark.map((val) => (
              val && val.id ?
                <MovieCard
                  key={val.id}
                  title={val.title}
                  dataid={val.id}
                  img={val.poster_path}
                  year={dayjs(val.release_date).format("YYYY")}
                  data={val}
                /> : null
              ))
            : <div className="text-center">
                <h1 className="text-white">No Record</h1>
              </div>}
        </div>
      </div>
  );
}
