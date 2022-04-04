import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Login = ({ history }) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

  const submitForm = () => {
        if (loginEmail && loginPassword) {
          history.push('/home')
        }
  }

  return (
    <>
        <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitForm}>
            <h3>Login</h3>

            <div className="form-group">
              <label className="mb-2">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="mb-2">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <Link to="#">password?</Link>
            </p>
            <p className="forgot-password text-right">
              Don't have a account <Link to="#">Register?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
