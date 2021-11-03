import styled from "styled-components";
import { Link } from "react-router-dom";

const Empty = ()=>{
    return (
        <Container>
            <h2>You have no Invoices currently</h2>
            <Link to="/invoice"><button>Create Invoice</button></Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 98vw;
    overflow-x: hidden;
    button {
        border:1px solid rgb(42, 194, 118);
    }
`
export default Empty;