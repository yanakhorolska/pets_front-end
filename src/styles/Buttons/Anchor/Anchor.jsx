import { Anchor, LabelCategory, Input } from './Anchor.styled';

export const AnchorElem = ({ el }) => {
  return <Anchor to={el.to}>{el.text}</Anchor>;
};

export const CategoryInput = ({ value, id, text }) => {
  return (
    <LabelCategory>
      {text}
      <Input name="category" type="radio" value={value} id={id} />
    </LabelCategory>
  );
};
