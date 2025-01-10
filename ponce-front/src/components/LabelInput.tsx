import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
`

interface ILabelInputProps {
  children: React.ReactNode;
  htmlFor: string;
  text: string;
}

const LabelInput = ({children, htmlFor, text}: ILabelInputProps) => {
  return (
    <StyledContainer>
      <label htmlFor={htmlFor}>
        {text}
      </label>
      {children}
    </StyledContainer>
  );
};

export default LabelInput;
