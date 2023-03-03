import Icon from "../icons";
import { CalendarBtn } from "./CalendarButton.styled";

export const CalendarButton = ({ onClick, ...otherProps}) => {
  return (
    <CalendarBtn type="button" onClick={onClick} {...otherProps} >
      <Icon.Calendar/>
    </CalendarBtn>
  );
};