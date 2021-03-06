import React from 'react';
import cssModules from 'react-css-modules';
import styles from './login.scss';


function Login() {
  return (
    <div styleName="login">
      <div className="o-layout o-layout--center">
        <h1>Login</h1>
      </div>
      <form role="form">
        <div styleName="position--relative">
          <input
            name="email"
            type="input"
            id="email"
            autoFocus
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div styleName="position--relative">
          <input
            type="password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button styleName="button">Login</button>
      </form>
    </div>
  );
}


export default cssModules(Login, styles);
