import styled from 'styled-components';

export const FormContent = styled.div`
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
      margin: 0 auto;
  }

  form {
    display: grid;
    width: 90%;
  }

  input {
    padding: .625rem 1.5rem;
    margin: 0.5rem 0;
  }
`