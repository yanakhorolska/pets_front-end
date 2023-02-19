import { FormInputStyled } from './FormInput.styled';

const FormInput = ({ name, type, value, placeholder, onChange }) => {
  return (
    <>
      <FormInputStyled
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;
