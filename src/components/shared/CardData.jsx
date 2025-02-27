import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const CardData = ({
  children,
  total,
  title,
  levelUp,
  levelDown,
  rate,
}) => {
  return (
    <div className="rounded-md bg-nav-900 py-5 px-9 shadow-lg shadow-nav-800">
      <div className="flex h-11.5 w-11.5 items-center justify-start rounded-full">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className=" text-sm lg:text-xl font-bold">{total}</h4>
          <span className="text-xs lg:text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-xs lg:text-sm font-medium ${
            levelUp && "text-link-100"
          } ${levelDown && "text-link-100"} `}
        >
          {rate}

          {levelUp && (
            <div className="">
              <FaArrowUp />
            </div>
          )}
          {levelDown && (
            <div className="">
              <FaArrowDown />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
