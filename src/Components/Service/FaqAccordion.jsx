import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css'

export default function FaqAccordion({data}) {
  return (
        <Accordion defaultActiveKey="0" flush>
          {
            data.map((element,index)=>{
                if(element.ques){
                  return (<Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{element.ques}</Accordion.Header>
                    <Accordion.Body>
                        {element.ans}
                    </Accordion.Body>
                  </Accordion.Item>)
                }
              })
          }
        </Accordion>
    )
}
