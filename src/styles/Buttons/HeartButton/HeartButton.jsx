import { HeartBtn } from "./HeartButton.styled";
import Icon from "../icons/index";

export const HeartButton = ({ onClick }) => {
  return (
    <HeartBtn onClick={onClick} >
      <Icon.Heart />
    </HeartBtn>
  );
};
