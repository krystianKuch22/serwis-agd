import styled from "styled-components";

export const TrustTileStyled = styled.div`

display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 2em;
margin-bottom: 2em;

.img{
    position: relative;
    width: 3.5em;
    height: 3.5em;
}

@media (min-width: 1200px) {
    h3{
        font-size: 1.8rem;
    }
    p{
        font-size: 1.2rem;
    }
    .img{
        width: 4.5em;
        height: 4.5em;    
    }
}
`