import { CameraBtn } from "./CameraButton.styled";
import Icon from "../icons";

export const CameraButton = ({ onClick, inputFile, onChangeFile }) => {
  return (
    <CameraBtn onClick={onClick}>
      <Icon.Camera />
      <input type="file" name="avatar" encType="multipart/form-data" ref={inputFile} onChange={onChangeFile} style={{ display: "none" }} />
      Edit photo
    </CameraBtn>
  );
};

