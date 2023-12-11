import MovieCard from "../components/MovieCard";
import Title from "../components/Title";
import LoadCard from "../components/LoadCard";
import bookmark from "../assets/bookmark.svg";
import favOutline from "../assets/favorite-outline.svg";
import { getMovieDetail, getSimilarList } from "../store/slices/dataSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loadSimilar, similarList } = useSelector(
    (state) => state.dataSlice
  );

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [id]);

  useEffect(() => {
    dispatch(getSimilarList(id));
  }, [movieDetail]);

  const loadElement = [];
  for (let i = 0; i < 7; i++) {
    loadElement.push(<LoadCard key={i} />);
  }

  return (
    <div className="bg-black">
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[400px] w-full justify-center px-16 py-12 items-start max-md:max-w-full max-md:px-5">
        <img
          src={
            movieDetail && movieDetail.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`
              : ""
          }
          className="absolute h-full w-full object-cover object-center inset-0 backdrop-brightness-50 brightness-50"
          fetchpriority="high"
        />
        <div className="relative w-[849px] max-w-full md:ml-20">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
              <img
                src={
                  movieDetail && movieDetail.poster_path
                    ? `https://image.tmdb.org/t/p/w1280${movieDetail.poster_path}`
                    : ""
                }
                className="aspect-[0.67] object-contain object-center w-[200px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                fetchpriority="high"
              />
            </div>
            <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <div className="relative flex flex-col mt-8 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-3xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  <span className="font-bold">
                    {movieDetail?.original_title || "Load Title"}{" "}
                  </span>
                  <span className="">
                    ({dayjs(movieDetail?.release_date || "null").format("YYYY")}
                    )
                  </span>
                </div>
                <div className="flex items-stretch gap-px mt-4 self-start max-md:justify-center">
                  <div className="text-white text-sm whitespace-nowrap self-start mr-1">
                    {dayjs(movieDetail?.release_date || "null").format(
                      "MM/DD/YYYY"
                    )}
                  </div>
                  <div className="text-white text-sm mr-1">
                    <ul>
                      <li>
                        {movieDetail && movieDetail.genres
                          ? movieDetail.genres.map((val, index) =>
                              index + 1 < movieDetail.genres.length
                                ? `${val.name}, `
                                : val.name
                            )
                          : ""}
                      </li>
                    </ul>
                  </div>
                  <div className="text-white text-sm whitespace-nowrap self-start">
                    <ul>
                      <li>{movieDetail?.runtime | "-"} minutes</li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-[124px] max-w-full items-start gap-1.5 mt-6 self-start max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/17d82e90-eb3e-49d9-b1ec-45a25ed7531a?apiKey=4c3ac68abc9940e090405c01c2b15514&"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-[50%]"
                  />
                  <div className="text-white text-xs self-center my-auto">
                    User Score
                  </div>
                  <img
                    loading="lazy"
                    src={
                      bookmark
                    }
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                    role="button"
                  />
                  <img
                    loading="lazy"
                    src={ favOutline}
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                    role="button"
                  />
                </div>
                <div className="text-white text-sm italic self-stretch mt-6 max-md:max-w-full">
                  {movieDetail?.tagline || "Movie Tagline"}
                </div>
                <div className="text-white text-sm font-bold self-stretch mt-3.5 max-md:max-w-full">
                  Overview
                </div>
                <div className="text-white text-sm self-stretch mt-2.5 max-md:max-w-full">
                  {movieDetail?.overview || "Overview"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full justify-center px-16 py-12 items-start max-md:max-w-full max-md:px-5">
        {similarList && similarList.results.length ? (
          <>
            <Title title="Recommendation" />
            <div className="bg-black overflow-auto flex items-start justify-between gap-5 mt-2 pr-2.5 py-2.5 max-md:max-w-full">
              {loadSimilar ? (
                loadElement
              ) : similarList && similarList.results ? (
                similarList.results.map((val) => (
                  <MovieCard
                    key={val.id}
                    title={val.title}
                    dataid={val.id}
                    img={val.poster_path}
                    year={dayjs(val.release_date).format("YYYY")}
                    data={val}
                  />
                ))
              ) : (
                <div className="text-center">
                  <h1 className="text-white">No Record</h1>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
