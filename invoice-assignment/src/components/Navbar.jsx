import styled from "styled-components";
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <Container>
            <Link to="/"><p className="logo">In- <span>Voice</span></p></Link>
            <Link to="/invoice"><button>Create Invoice</button></Link>
        </Container>
    )
}

const Container = styled.div`
    background:yellow;
    height:5rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    .logo {
        font-size:35px;
        span {
            font-weight: bold;
            color: rgb(42,194,118);
        }
    }

`

export default Navbar;