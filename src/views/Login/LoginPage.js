import React from 'react'
import TextInput from '../../components/TextInput'
// import styles from './LoginPage.css'

const LoginPage = props => (
  <div>
    <h2>Login Page</h2>
    <form>
      <TextInput
        id="username"
        label="username"
        onChange={props.onChange}
        name="username"
        value="props.user.username"
      />
      <TextInput
        id="password"
        label="password"
        onChange={props.onChange}
        name="password"
        value="props.user.password"
      />
      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  </div>
)

export default LoginPage
