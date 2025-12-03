import styled from "styled-components";

export const ServiceTileStyled = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: .8em;
max-width: 45%;
padding: 1em 0;
box-shadow: 0 4px 4px rgba(0,0,0,0.25);
border: solid 1px var(--tile-border-color);
border-radius: 16px;
flex: 0 0 50%;

.tileImg{
    position: relative;
    width: 100%;
    height: 100px;
}

h3{
    text-transform: uppercase;
}
`