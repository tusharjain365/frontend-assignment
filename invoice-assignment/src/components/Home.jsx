import { useEffect , useRef, useState} from "react";
import styled from "styled-components";
import Empty from './Empty';
import InvoiceItem from './InvoiceItem';

const Home = ()=>{

    let invoices = useRef([]);
    const [flag, setFlag] = useState(false);

    invoices.current = JSON.parse(localStorage.getItem("invoices"));

    const deleteInvoice = (custId)=>{
        invoices.current = invoices.current.filter(invoice => invoice.custId !== custId);

        localStorage.setItem("invoices",JSON.stringify(invoices.current));
        setFlag(!flag);
    }

    useEffect(()=>{
        invoices.current = JSON.parse(localStorage.getItem("invoices"));
    },[flag]);


    return(
        <Container className="space">
            {invoices.current.length === 0 ? <Empty/> : 
            invoices.current.map((invoice, idx)=>(
                <InvoiceItem key={idx} {...invoice} deleteInvoice = {deleteInvoice}/>
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: .7rem;
    padding: 1.2rem 1.2rem;

    @media (max-width : 900px) {
        grid-template-columns: repeat(2,1fr);
        
    }
    @media (max-width : 600px) {
        grid-template-columns: repeat(1,1fr);
            
    }
    
`
export default Home;