import styled from "styled-components";

const Footer = ()=>{
    return(
        <Container>
            Made with ❤ Tushar Jain @ 2021
        </Container>
    )
}
const Container = styled.div`
    border-top:1px solid red ;
    display:flex;
    justify-content:center;
    align-items:center;
    height:5rem;

`

export default Footer;