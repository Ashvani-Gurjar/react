import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App1 = () =>{
         return (
          <>
         <h1 className='text-center text-danger my-5'> Welcome to my channel </h1>
         <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card radius" >
  <img src="https://picsum.photos/200/203" class="card-img-top" alt="..."  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>    </div>
    <div class="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/202" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>    </div>
    <div class="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/201" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>    </div>
  </div>
</div>
          </>
         )
}

export default App1;