import React, { useState } from 'react';

const Contact = () => {
  
  const [data,setData] = useState({
       fullname: "",
       phone: "",
       email: "",
       message: "",
  });

const InputEvent = (event) =>{
       const {name,value} = event.target;

       setData((preVal)=>{
         return {
           ...preVal,
           [name]:value,
         }
       })
}

const fromSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is ${data.fullname}, Your mobile number is ${data.phone},
         and your email is ${data.email}`);
}



  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>

        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>

            <form onSubmit={fromSubmit}>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"
                name='fullname'
                value={data.fullname}
                onChange={InputEvent} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"
                name='phone'
                value={data.phone}
                onChange={InputEvent} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message'
                name='message'
                value={data.message}
                onChange={InputEvent}></textarea>
              </div>
              <div className='col-12'>
                <button className='btn btn-outline-primary' type='submit'>Submit</button>
              </div>
            </form>


          </div>
        </div>

      </div>


    </>
  )
}

export default Contact;