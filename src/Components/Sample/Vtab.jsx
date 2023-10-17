import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';

function LeftTabsExample({ data,content }) {
  const [tempTitle,setTempTitle] = useState("");
  const [temp,setTemp] = useState([]);
  
  function sortContent(tempTitle){
    setTemp(content.filter(obj=>obj.Subject===tempTitle))
    setTempTitle(tempTitle)
  }

  useEffect(()=>{
    sortContent("Managements")
  },[data])
  return (
    <>
      <section>
        <div className='container'>
          <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={6}>
                  {/* {
            data.map((element,index)=>(
              <h2>{element.SubjectName}</h2>
            ))
          } */}
                  <Nav variant="pills" className="flex-column">
                    
                    {
                      data.map((element, index) => (
                        <Nav.Item>
                          <Nav.Link eventKey="first" onClick={()=>sortContent(element.SubjectName)}>{element.SubjectName}</Nav.Link>
                        </Nav.Item>
                        
                      ))
                    }
                    {/* <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item> */}
                  </Nav>
                </Col>
                <Col sm={6}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first"><h4>{tempTitle}</h4>
                      <div className='sample-cat'>
                        <ul>
                        {temp.map((element,index)=>(
                          <li><Link to={`/sample-detail/${element.PageUrl}`} key={index}>{element.PageName}</Link></li>
                        ))}

                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeftTabsExample;