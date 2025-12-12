import styled from "styled-components";

export const RepairAgdStyled = styled.section`
padding-top: 2em;
min-height: 60vh;
scroll-margin-top: 4em;

h2{
    margin-bottom: .5em;
    text-transform: uppercase;
}

p{
    text-align: justify;
    margin-bottom: 1em;
}

.repair-agd-img {
position: relative;
width: 100%;
height: 40vh;
}

@media (min-width: 1200px) {
display: flex;
align-items: center;
justify-content: center;

.desktop{
    padding-right: 0;
    flex-shrink: 2;
}

h2{
    font-size: 3rem;
}
p{
    font-size: 1.4rem;
}
.repair-agd-img {
    height: 50vh;
}
}
`