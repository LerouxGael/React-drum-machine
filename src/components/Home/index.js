import styled from "styled-components";

import GridButton from "./GridButton";

import useSounds from "hooks/useSounds";








export default function Home(){
    const {buttonsList} = useSounds();
    return (
    <Wrapper>
        <Grid>{buttonsList.map(({ soundPlay }, index)=> {
            return <GridButton key={index} soundPlay={soundPlay} />;
        })}</Grid>
    </Wrapper>
    );
}

const Wrapper = styled.div`
    
`;

const Grid = styled.div`
    display : grid;
    width : 400px;
    height: 400px;
    border : solid 1px;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    row-gap : 12px;
    padding : 24px;
    @media (max-width : 640px){
        width : 250px;
        height: 250px;
    }
`;