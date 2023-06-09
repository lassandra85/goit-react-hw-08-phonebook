import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const FormContainer = styled(Form)`
  margin-bottom: 55px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 450px;
  min-width: 200px;
  flex: 1 0 33.333%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 22px;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Input = styled(Field)`
  padding: 15px;
  width: 100%;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: transparent /* #ebf5fc */;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 300ms ease-in-out;
  outline: none;
  &:not(:placeholder-shown)[data-error='false'] {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
  &[data-error='true'] {
    color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(227, 67, 67, 0.7);
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -10%;
  left: 0;
  transform: translateY(100%);
  font-size: 14px;
  color: #e34343;
`;

export const Btn = styled.button`
  padding: 15px 28px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: transparent /* hwb(305 87% 3%) */;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
