// import React, { useState, useContext, useEffect } from 'react'
// import { Card } from 'react-bootstrap'
// // import { AuthContext } from '../Context/Auth/AuthContext'
// import { Link } from 'react-router-dom'
// // import useToast from '../Hooks/useToast'

// const LoginPage = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const { state, dispatch } = useContext(AuthContext)
//     const showToast = useToast()

//     const loginUser = (e) => {
//         e.preventDefault();
//         const payload = { email, password };
//         dispatch(
//             {
//                 type: "LOGIN_USER",
//                 payload: payload
//             }
//         )
//     }
//     useEffect(() => {
//         if (state.authStatus) {
//             switch (state.authStatus) {
//                 case 'NoSuchUser':
//                     showToast("error", "No such user", 100, 1800)
//                     break;
//                 default:
//                     break;
//             }
//             dispatch({ type: 'RESET_AUTH_STATUS' })

//         }
//     }, [state.authStatus]);
//     return (
//         <div className="row justify-content-sm-center min-vh-100 min-vw-100 h-100 bg-main">
//             <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
//                 <div className="text-center my-5">
//                     <h2 className='color-green fw-bolder fs-1'>Mflix</h2>
//                 </div>
//                 <Card className="shadow-lg" bg="dark" data-bs-theme="dark">
//                     <Card.Body className="card-body p-5">
//                         <Card.Title className="fs-4 fw-bold mb-4">Login</Card.Title>
//                         <form onSubmit={loginUser}>
//                             <div className="mb-3">
//                                 <label className="mb-2 text-muted" htmlFor="email">
//                                     E-Mail Address
//                                 </label>
//                                 <input
//                                     id="email"
//                                     type="email"
//                                     className="form-control"
//                                     name="email"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <div className="invalid-feedback">Email is invalid</div>
//                             </div>
//                             <div className="mb-3">
//                                 <div className="mb-2 w-100">
//                                     <label className="text-muted" htmlFor="password">
//                                         Password
//                                     </label>
//                                     <a href="forgot.html" className="float-end">
//                                         Forgot Password?
//                                     </a>
//                                 </div>
//                                 <input
//                                     id="password"
//                                     type="password"
//                                     className="form-control"
//                                     name="password"
//                                     required
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                                 <div className="invalid-feedback">Password is required</div>
//                             </div>
//                             <div className="d-flex align-items-center">
//                                 <div className="form-check">
//                                     <input
//                                         type="checkbox"
//                                         name="remember"
//                                         id="remember"
//                                         className="form-check-input"
//                                     />
//                                     <label htmlFor="remember" className="form-check-label">
//                                         Remember Me
//                                     </label>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary ms-auto">
//                                     Login
//                                 </button>
//                             </div>
//                         </form>
//                     </Card.Body>
//                     <Card.Footer className="card-footer py-3 border-0">
//                         <div className="text-center">
//                             Don't have an account?{" "}
//                             <Link to="/signup">
//                                 Create One
//                             </Link>
//                         </div>
//                     </Card.Footer>
//                 </Card>
//             </div>
//         </div>

//     )
// }

// export default LoginPage
import React from 'react'

export default function Login() {
  return (
    <div>Login</div>
  )
}
