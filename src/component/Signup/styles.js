import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;

  form {
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    display: grid;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
    div {
      display: flex;
      flex-direction: column;

      justify-content: center;
    }
    label {
      color: #8844eb;
      font-weight: bold;
      margin-bottom: 5px;
      display: block;
    }
    input {
      height: 40px;
      width: 100%;
      display: flex;
      padding-left: 5px;
      border-radius: 4px;
      border: 2px solid #ced4da;
    }
  }

  button {
    width: 250px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    outline: none;

    background: rgb(192, 63, 251);
    background: linear-gradient(
      90deg,
      rgba(192, 63, 251, 1) 42%,
      rgba(142, 107, 238, 1) 100%
    );
    box-shadow: 0 4px 15px 0 rgba(173, 109, 225, 0.75);
    text-transform: uppercase;

    &:hover {
      background-position: 100% 0;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }
`;

export const DoubleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: #4481eb;
  }

  h3,
  h4 {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
