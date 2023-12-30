import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onButtonClick: (heartStatus: boolean) => void;
}

const Like = ({ onButtonClick }: LikeProps) => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onButtonClick(liked);
  };
  if (liked) return <AiFillHeart color="ff6b81" size={20} onClick={toggle} />;
  else return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
