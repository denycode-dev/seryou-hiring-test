import { useEffect } from "react";
import { Link } from "react-router-dom";
import bookmark from "../assets/bookmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFavToLocal, setBookmarkToLocal } from "../store/slices/localSlice";
import bookmarkFill from "../assets/bookmark-fill.svg";
import fav from "../assets/favorite.svg";
import favOutline from "../assets/favorite-outline.svg";

export default function MovieCard({ img, title, year, dataid, data }) {
  const dispatch = useDispatch();
  const { localFav, localBookmark } = useSelector((state) => state.localSlice);
  function handleSetFav(e, data) {
    dispatch(setFavToLocal(data));
    e.preventDefault();
  }
  function handleSetBookmark(e, data) {
    dispatch(setBookmarkToLocal(data));
    e.preventDefault();
  }
  function detectFav(id) {
    if (id && localFav && localFav.length) {
      const index = localFav.findIndex((val) => val && val.id && val.id == id);
      return index < 0 ? false : true;
    } else {
      return false;
    }
  }
  function detectBookmark(id) {
    if (id && localBookmark && localBookmark.length) {
      const index = localBookmark.findIndex(
        (val) => val && val.id && val.id == id
      );
      return index < 0 ? false : true;
    } else {
      return false;
    }
  }
  return (
    <Link
      to={`/movie/${dataid}`}
      className="min-w-[193px] md:w-[193px] relative group"
    >
      <div className="relative w-full">
        <img
          className="object-cover min-h-[290px]"
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          width="100%"
          alt={title}
        />
        <div
          id="nav-fav"
          className="flex absolute right-0 bottom-0 py-3 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <img
            onClick={(e) => handleSetBookmark(e, data)}
            src={detectBookmark(dataid) ? bookmarkFill : bookmark}
            className="mr-3"
            alt="Bookmark icon"
          />
          <img
            onClick={(e) => handleSetFav(e, data)}
            src={detectFav(dataid) ? fav : favOutline}
            alt="Favorite icon"
          />
        </div>
      </div>
      <div className="mt-5 px-5">
        <div className="text-zinc-400 text-lg font-bold whitespace-nowrap truncate">
          {title}
        </div>
        <div className="text-zinc-500 text-xs whitespace-nowrap mt-1.5">
          {year}
        </div>
      </div>
    </Link>
  );
}
