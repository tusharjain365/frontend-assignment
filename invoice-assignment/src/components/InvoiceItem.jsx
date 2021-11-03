import styled from "styled-components";

const InvoiceItem = ({custId,custName,address, workRate,materialRate,labourRate,note,dueDate, deleteInvoice})=> {
    const duedate = new Date(dueDate);
    const currdate = new Date();
    let status;
    
    if(duedate > currdate) {
        status = "outstanding";
    }else if(duedate.getFullYear() === currdate.getFullYear() && duedate.getMonth() === currdate.getMonth() && duedate.getDay() === currdate.getDay()){
        status = "paid";
    }else {
        status = "late";
    }

    return(
        <Container>
            <h1>{custName}</h1>
            <p>{custId}</p>
            <p>{address}</p>
            <h3>Charges(10 hours if not provided): </h3>
            <div className="charges">
                <p>Working Charges: <span>₹ {workRate*10}.00</span></p>
                <p>Labour Cost: <span>₹ {labourRate*10}.00</span></p>
                <p>Cost of material: <span>₹ {materialRate}.00</span></p>
                <p className="total">Total Cost: <span>₹ {workRate*10 + labourRate*10 + materialRate}.00</span></p>
            </div>
            <p>Note to Customers: <span>{note}</span></p>
            <p>Due Date: <span>{dueDate}</span></p>
            <p>Status: <span className={`${status}`}>{status}</span></p>
            <button className="btn" onClick={()=> deleteInvoice(custId)}> X </button>

        </Container>
    )
}

const Container = styled.div`
box-shadow:1px 3px 10px black , 4px 4px 10px grey;
border-radius:8px;
display: flex;
justify-content: space-between;
align-items:flex-start;
flex-direction: column;
padding: 1.2rem 1.2rem;
position:relative;
h1 {
    color:rgb(42, 194, 118);
}
.outstanding {
    background:orange;
}
.late {
    background:red;
}
.paid {
    background:lightgreen;
}
.charges {
    p {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-gap:.3rem;
        margin:0;
    }
    span {
        text-align:center;
    }
}
.total {
    font-weight:bold;
}
.btn {
    position:absolute;
    right:4px;
    font-size:1.2rem;
    border-radius:8px;
    padding:0.23rem .45rem ;
    &:hover{ 
        background:red;
    }
}
`
export default InvoiceItem;