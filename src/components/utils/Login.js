import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate , useLocation} from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState(null);
  const location = useLocation()
  const navigate = useNavigate();
  const auth = useAuth();

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    console.log(user)
     auth.login(user);
    navigate(redirectPath);
  };

  return (
    <div className=" container my-3">
      {/* <div>
          <label>
            UserName: {''}
          </label>
          <input className='form-control' type="text" onChange={(e) => setuser(e.target.value)}/>
          </div> */}

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <button disabled= {!user} className="btn btn-primary mt-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
