import { setShowAuth } from "../store/slices/localSlice";
import { useDispatch } from "react-redux";

export default function AuthButton() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setShowAuth())}
      className="flex transition-opacity duration-300 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50  backdrop-blur-sm bg-black bg-opacity-30  outline-none focus:outline-none p-10 bg-blur"
      role="button"
    >
      <div className="transition-opacity duration-100 w-[250px] h-[250px] bg-white rounded-3xl flex items-center justify-center">
        <div>
          <img
            className="w-[164px] h-[164px]"
            src="https://s3-alpha-sig.figma.com/img/278c/760c/568d925e0121e37299eb54fb20580265?Expires=1702857600&Signature=LRA~GG5tZ5gkygYTfC5UcelvmM4VMooFx535RVk8lUZMH2tOAA2HjQlAPPivReE1mkNRA6BuORoFS6HC9EATSwuVOUm7Kt1q7TiRl-CEA2g5z4co0-9SLZCfW7bmPJRADt~L6zsz41Yu3UQ1vvC6JfAnkMrGJS36EqAzbCsTLwrkydgZC1ijDCFlZPkUjihct--gPBI3mEBAtJkYtORwM4CqvVqQ2VjDGrbsuhWLQMes6ZDxZnsymeUyvmqgLqbHIHLxrES7eHp7e3c6QIB37NiY9UNhOF60jdpO77slOK3HX3WJ5xJUPZi7yUqJI1ANUQ-IQG62YebkqAWUREDrbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <h1 className="text-center text-black text-sm font-normal font-['Roboto'] leading-snug">
            Login with TMDB
          </h1>
        </div>
      </div>
    </div>
  );
}
