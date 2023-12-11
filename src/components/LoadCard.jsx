export default function LoadCard() {
  return (
    <div to={`/movie/adsdffsd`} className="bg-gray-950 basis-[0%] pb-3.5 rounded-md">
      <div className="overflow-hidden relative aspect-[0.6655172413793103] w-full pl-20 pr-2.5 pt-12 pb-2.5 max-md:pl-5">
        <img
          loading="lazy"
          src={`https://placehold.co/500x750`}
          className="absolute h-full w-full object-cover object-center inset-0"
        />
      </div>
      <div className="self-stretch mt-5 px-5">
        <div className="text-zinc-400 text-lg font-bold whitespace-nowrap">
          Framing Britney...
        </div>
        <div className="text-zinc-500 text-xs whitespace-nowrap mt-1.5">
          2021
        </div>
      </div>
    </div>
  );
}
