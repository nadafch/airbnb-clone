"use cliet";

import { SafeUser } from "@/app/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import clsx from "classnames";
import useFavorite from "@/app/hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "text-rose-500" : "text-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
