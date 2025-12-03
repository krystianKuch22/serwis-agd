import styled from "styled-components";

export const ContactStyled = styled.section`
  /* text-align: center; */
  min-height: 60vh;

.first-div{
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em 0;
    gap: 2em;
    background-color: var(--main-color);
}

  h2 {
    width: 50%;
    text-align: center;
    text-transform: uppercase;
    color: var(--regular-white-color);
  }

  .img{
    position: relative;
    width: 100%;
    height: 30Vh;
  }
`;
