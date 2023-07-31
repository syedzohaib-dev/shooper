// import React, { useState, useContext, useEffect } from 'react'
// import { Card } from 'react-bootstrap'
// // import { AuthContext } from '../Context/Auth/AuthContext'
// import { Link, redirect, useNavigate } from 'react-router-dom'
// // import useToast from '../Hooks/useToast'

// const Signup = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const { state, dispatch } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const showToast = useToast()
//     const signupUser = (e) => {
//         e.preventDefault();
//         const payload = { email, password };
//         dispatch(
//             {
//                 type: "SIGNUP_USER",
//                 payload: payload
//             }
//         )

//     }
//     useEffect(() => {
//         if (state.authStatus) {
//             switch (state.authStatus) {
//                 case "emailAlreadyExists":
//                     showToast("error", "Email Already in use", 100, 1500)
//                     break;
//                 case "SignedUp":
//                     showToast("success", "Signed Up", 100, 1500)
//                     navigate('/login')
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
//                     <div className="card-body p-5">
//                         <h1 className="fs-4 card-title fw-bold mb-4">Signup</h1>
//                         <form onSubmit={signupUser}>
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
//                                 <label className="text-muted" htmlFor="password">
//                                     Password
//                                 </label>
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
//                                         required
//                                     />
//                                     <label htmlFor="remember" className="form-check-label">
//                                         I Agree to all the Terms
//                                     </label>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary ms-auto">
//                                     Signup
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="card-footer py-3 border-0">
//                         <div className="text-center">
//                             Already a Account?{" "}
//                             <Link to="/login">
//                                 Login
//                             </Link>
//                         </div>
//                     </div>
//                 </Card>
//             </div>
//         </div>

//     )
// }

// export default Signup
import React from 'react'

export default function Signup() {
  return (
    <div>Signup</div>
  )
}
