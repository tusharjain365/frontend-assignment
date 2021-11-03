import styled from "styled-components";
import {useState} from 'react';
import { useHistory } from "react-router";

const Invoice = ()=>{
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDay()}`;
    const history = useHistory();

    const [invoice, setinvoice] = useState({
        custId:"",
        custName:"",
        address:"",
        workRate:0,
        materialRate:0,
        labourRate:0,
        note:"",
        dueDate:date,
      });
      let flag = true;
    
      let prevInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    
      const handleInvoice = (e)=>{
        setinvoice({...invoice,[e.target.name]:e.target.value});
      }
    
      const handleFormSubmit= (e) =>{
        e.preventDefault();
        
        if(invoice.custName === "" || invoice.custId === "") {
            flag = false;
        }

        if(flag) {
            prevInvoices.push(invoice);
            localStorage.setItem("invoices",JSON.stringify(prevInvoices));
        }

        history.push("/");
      }

    return(
        <Container className="space">
            <h2>Create Your new Invoice here</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="custId" id="custId" value={invoice.custId} onChange={handleInvoice} placeholder="Put your unique customer id here " />
                <input type="text" name="custName" id="custName" value={invoice.custName} onChange={handleInvoice} placeholder="Put your name here"/>
                <textarea name="address" id="address" cols="30" rows="4" value={invoice.address} onChange={handleInvoice} placeholder="Put address here.."></textarea>
                
                <div className="cost">
                <label htmlFor="workRate">Cost of work(per hr)</label>
                <input type="number" min='0'  name="workRate" id="workRate" value={invoice.workRate} onChange={handleInvoice} />
                </div>
                <div className="cost">
                <label htmlFor="materialRate">Cost of material</label>
                <input type="number"  min='0' name="materialRate" id="materialRate" value={invoice.materialRate} onChange={handleInvoice} />
                </div>
                <div className="cost">
                <label htmlFor="labourRate">Cost of labour(per hr)</label>
                <input type="number" min='0' name="labourRate" id="labourRate" value={invoice.labourRate} onChange={handleInvoice} />
                </div>
                <div className="cost">
                <label htmlFor="note">Note:(How to pay)</label>
                <textarea name="note" id="note" cols="30" rows="5" value={invoice.note} onChange={handleInvoice}></textarea>
                </div>

                <input type="date" name="dueDate" id="dueDate" placeholder="Enter due date..."onChange={handleInvoice}/>
                <button type="submit">Create</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin:1rem 0;
h2{
    margin: 1rem;
    text-align: center;
}
form {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height:40rem;
    border-radius:8px;
    border-left:.5px solid yellow;
    border-right:.5px solid yellow;
}
input[type="number"] {
    width:50%;
}
label {
    margin:.2rem 0;
}
.cost {
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.cost, input,textarea {
    width:90%;
    margin:.5rem 0;
    height:30px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-radius:8px;
}
button {
    border:1px solid rgb(42, 194, 118);
    min-width:39%;
    width:6rem;
    margin:.5rem;
}

`
export default Invoice;