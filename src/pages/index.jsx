import { useEffect } from "react";
import dayjs from "dayjs";
import { getNowPlaying, getTopRated } from "../store/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Title from "../components/Title";
import LoadCard from "../components/LoadCard";

export default function Example() {
  const dispatch = useDispatch();
  const { nowPlayList, loadNowPlay, topRatedList, loadTopRated } = useSelector(
    (state) => state.dataSlice
  );

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getTopRated());
  }, []);

  const loadElement = [];
  for (let i = 0; i < 7; i++) {
    loadElement.push(<LoadCard key={i} />);
  }

  return (
    <div className="self-center w-full max-w-[1308px] mt-16 mb-1.5 px-5 max-md:max-w-full max-md:mt-10">
      <div className="mb-5">
        <Title title="Now Playing" />
        <div className="bg-black overflow-auto flex items-start justify-between gap-5 mt-2 pr-2.5 py-2.5 max-md:max-w-full max-md:flex-wrap md:justify-between sm:justify-center">
          {loadNowPlay
            ? loadElement
            : nowPlayList && nowPlayList.results
            ? nowPlayList.results.map((val) => (
                <MovieCard
                  key={val.id}
                  title={val.title}
                  dataid={val.id}
                  img={val.poster_path}
                  year={dayjs(val.release_date).format("YYYY")}
                  data={val}
                />
              ))
            : null}
        </div>
      </div>
      <div className="mb-5">
        <Title title="Top Rated" />
        <div className="flex flex-wrap justify-start max-md:justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap max-sm:justify-center">
          {loadTopRated
            ? loadElement
            : topRatedList && topRatedList.results
            ? topRatedList.results.map((val) => (
                <MovieCard
                  key={val.id}
                  title={val.title}
                  dataid={val.id}
                  img={val.poster_path}
                  year={dayjs(val.release_date).format("YYYY")}
                  data={val}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
