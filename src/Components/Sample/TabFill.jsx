import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import {Link} from 'react-router-dom';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="sample1"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="sample1" title="Smple1">
      <div className='position-relative'>
      <div className='pt-60'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
  <div id="overlay" className="cover blur-in">
  <div className="content">
    <h1>The history or Lorem Ipsum</h1>
    <span>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </span>
    <span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus viverra porta. Pellentesque scelerisque eros quis dignissim semper. Nulla ut justo a sapien lobortis posuere. Maecenas scelerisque justo eleifend risus dapibus, id bibendum tellus placerat. Sed massa diam, ornare ut varius ut, auctor non arcu. Cras rutrum tortor eu diam feugiat aliquam. Suspendisse rutrum pretium pretium. 
      </p>
    </span>
    <span>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </span>
  </div>
</div>
<div className="row pop-up">
  <div className="sample-box small-6 large-centered">
    <button className="close-button">&#10006;</button>
  <div className='text-center'>
  <h3>lorem ipsum</h3>
    <p>Integer non odio id ante rutrum dictum. Nam ac dapibus felis, at pharetra sapien. </p>
  </div>
   

    <form>
    <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1"/> 
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phone"/>
  </div>

  <div className='text-center'>
  <button type="submit" className="btn btn-primary button">Submit</button>
  </div>
</form>
  </div>
</div>
      </div>
      </Tab>
      <Tab eventKey="sample2" title="Sample2">
        Tab content for Sample2
      </Tab>
      <Tab eventKey="sample3" title="Sample3">
        Tab content for Sampl3
      </Tab>
      <Tab eventKey="sample4" title="Sample4">
        Sample4
      </Tab>
    </Tabs>
  );
}

export default FillExample;