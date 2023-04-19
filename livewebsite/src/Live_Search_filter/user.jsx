import { useParams, useLocation } from "react-router-dom";

const User = () =>{
     const { fname,lname} = useParams();
     const location = useLocation();
     // const history = useHistory();
     // console.log(history);

     return (
          <>
          <h1 style={{textAlign:'center'}}>This is a user {fname} {lname}  Page</h1>
          <p style={{textAlign:'center'}}>My current location is {location.pathname} Page</p>
                {location.pathname===`/user/ashvani/singh` ? (
                <button >Click me</button>):null
                }
          </>
     )
}

export default User;