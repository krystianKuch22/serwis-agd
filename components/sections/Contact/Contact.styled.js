import styled from "styled-components";

export const ContactStyled = styled.section`
  /* text-align: center; */
  min-height: 80vh;
  scroll-margin-top: 4em;

.first-div{
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em 0;
    gap: 2em;
    background-color: var(--main-color);
    
    a{
        color: var(--regular-white-color);
        background-color: var(--contact-button-color);
        padding: 0.5em 2em;
        border-radius: 10px;
        font-size: 1.5rem;
    }
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
    height: 40Vh;
  }
`;
