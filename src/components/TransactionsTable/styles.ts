import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

  }
`

export const EmptyContainer = styled.div`
  margin-top: 5rem;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  color: var(--text-body);
  border: 1px solid #969CB330;
  border-radius: 4px;

  h3 {
    margin-bottom: 1rem;
  }
  
  span {
    margin: 0 0.25rem;
    padding: 0.25rem;

    background-color: var(--blue-light);
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
  }
`
