type Props = {
  name: string;
  wFull: boolean;
};

export const Button = ({ name, wFull }: Props) => {
  return (
    <>
      <button
        className={`${
          wFull === true ? "w-full md:h-[4.5rem] h-[5rem]" : ""
        } uppercase hover:bg-orange-700 font-bold text-white text-2xl py-4 px-8 hover:scale-95 rounded-xl bg-orange-600 shadow-xl`}
      >
        {name}
      </button>
    </>
  );
};
