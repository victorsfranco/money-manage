import { darken } from "polished";
import styled from "styled-components";
import { RadioButtonProps } from "../../types/types";

export const Container = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: #E7E9EE;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    padding: 0 1.5rem;

    background: var(--green);
    color: #FFF;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`

  display: flex;
  gap: 0.5rem;
`

export const RadioButton = styled.button<RadioButtonProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    height: 4rem;
    margin: 1rem 0;

    background: ${(props) => props.isActive ? props.activeColor : 'transparent'};
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    transition: 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')}

    }
`
