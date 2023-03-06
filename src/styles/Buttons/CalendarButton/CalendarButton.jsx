import Icon from "../icons";
import { CalendarBtn } from "./CalendarButton.styled";

export const CalendarButton = ({onClick}) => {
  return (
    <CalendarBtn type="button" onClick={onClick} >
      <Icon.Calendar/>
    </CalendarBtn>
  );
};