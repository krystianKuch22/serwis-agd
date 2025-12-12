import styled from "styled-components";

export const TitleStyled = styled.div`
width: 100%;
padding: 1.5em 2em;
margin: 2em 0;
background-color: var(--titles-bg-color);
text-align: center;
h2{
text-transform: uppercase;
}

@media (min-width: 1200px) {
    h2{
    font-size: 3rem;
    }
}
`