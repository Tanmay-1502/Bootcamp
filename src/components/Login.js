import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login({ setToken }) {
    const [username, setUserName] = useState();
   // const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
        //  password
        });
        setToken(token);
      }

  return (
    // <div>   
    //         <h1>Please Log In</h1>
    //         <form onSubmit={handleSubmit}>
    //     <label>
    //       <p>Username</p>
    //       <input type="text" onChange={e => setUserName(e.target.value)}/>
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input type="password" onChange={e => setPassword(e.target.value)}/>
    //     </label>
    //     <div>
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form></div>
    <MDBContainer fluid className="p-3 my-5 h-custom">

    <MDBRow>

      <MDBCol col='10' md='6'>
        <img src="https://th.bing.com/th/id/R.93289ead13bdd036a953d565084c1d1e?rik=JIVMKSxbxDwi7A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2f6%2fa%2f551690.jpg&ehk=5ogHgjbXnTjQO9rwfxpclM6t2Uw5hb9mE6AQA79MyA0%3d&risl=&pid=ImgRaw&r=0" class="img-fluid" alt="Sample image" />
      </MDBCol>

      <MDBCol col='4' md='6'>

        <div className="d-flex flex-row align-items-center justify-content-center">

          <p className="lead fw-normal mb-0 me-3">Sign In</p>

          {/* <MDBBtn floating size='md' tag='a' className='me-2'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating size='md' tag='a'  className='me-2'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating size='md' tag='a'  className='me-2'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn> */}

        </div>

        <div className="divider d-flex align-items-center my-4">
          {/* <p className="text-center fw-bold mx-3 mb-0">Or</p> */}
        </div>
<form onSubmit={handleSubmit}>
        <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" onChange={e => setUserName(e.target.value)}/>
        {/* <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={e => setPassword(e.target.value)} /> */}
        <button type="submit" className=' justify-center bg-blue-700 justify-right text-white rounded'>LOG IN </button>
        </form>
        <div className="d-flex justify-content-between mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <div className='text-center text-md-start mt-4 pt-2'>
          {/* <MDBBtn className="mb-0 px-5" size='lg' type="button" >Login</MDBBtn> */}
         
          
          <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
        </div>
     

      </MDBCol>

    </MDBRow>

    <div className="mt-48 d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

      {/* <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div> */}

      <div>

        {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
          <MDBIcon fab icon='facebook-f' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
          <MDBIcon fab icon='twitter' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
          <MDBIcon fab icon='google' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
          <MDBIcon fab icon='linkedin-in' size="md"/>
        </MDBBtn> */}

      </div>

    </div>

  </MDBContainer>
  )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login