import { Accordion, Button, Row } from "react-bootstrap";
import { question } from "../data";

function QAList({data , deleteItem}){
    const dataLocal = JSON.parse(localStorage.getItem("items"))
// delete one item in arrary
    const onDeleteOneItem = (ID)=>{
        if(JSON.parse(localStorage.getItem("items")) != null){
            const index = question.findIndex((item)=>item.id === ID)
            question.splice(index,1);
            deleteItem(question);
          }
    }
    return(
        <Row>
            <Accordion>
                {
                   JSON.parse(localStorage.getItem("items")) != null ? (dataLocal.map((item,index)=>{
                        return(

                            <Accordion.Item key={index} eventKey={item.id}>
                                <Accordion.Header>
                                    <div className="m-auto">{item.q}</div>
                                </Accordion.Header>
                                <Accordion.Body className="text-end">
                                <div className="px-3 d-inline text-center"> {item.a}</div>
                                <Button onClick={()=>{onDeleteOneItem(item.id)}} className="btn-color">مسح السؤال</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })) : <h2 className="text-center m-3 p-5">لا توجد اسئله الان</h2>
                }
            </Accordion>
        </Row>
    )
}

export default QAList;