import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr); // 1fr 1fr 1fr
  gap: 2rem;
  margin-top: -13rem;

  div {
    padding: 1.5rem 2rem;
    background: var(--shape);
    border-radius: 0.25rem;
    color: var(--text-title);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    line-height: 3rem;
    font-size: 2rem;
    font-weight: 500;
  }

  & .positive-total {
    background: var(--green);
    color: #fff;
  }

  & .negative-total {
    background: var(--red);
    color: #fff;
  }
`
