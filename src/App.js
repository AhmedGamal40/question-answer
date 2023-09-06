import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/formInput";
import QAList from "./components/QAList";
import './index.css';
import {question} from './data'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // to push notification 
  const notify = (massage,type) => {
      if(type==="Error"){
        toast.error(massage)
      }
      else if(type === "success"){
        toast.success(massage)
      }
    }

  const [data , setData] = useState(question);
  // add Items
  const addItem = ()=>{
    localStorage.setItem("items",JSON.stringify([...question]))
    setData([...question]);
    notify("تم اضافة السؤال بنجاح" , "success")
  }

  // delete Items
  const deleteItems = ()=>{
    localStorage.removeItem("items")
    question.splice(0,question.length)
    setData([])
    notify("تم حذف الكل بنجاح" , "success")
  }

  // delete one item in list
  const deleteItem = (items)=>{
    localStorage.setItem("items",JSON.stringify([...items]))
    setData([...items]);
    if(items.length <=0 ){
      deleteItems()
      notify("تم حذف السؤال بنجاح" , "success")
    }
  }
  return (
    <div className="font">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col className="fs-3 text-center py-2" sm="4">أسئله و أجوبه شائعه :</Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} deleteItem={deleteItem}/>
            {
              JSON.parse(localStorage.getItem("items")) != null  ? (

                <Button onClick={deleteItems} className="btn-color w-100 my-3">مسح الكل</Button>
              ) : null
            }
          </Col>
        </Row>
        <ToastContainer />

      </Container>
    </div>
  );
}

export default App;
