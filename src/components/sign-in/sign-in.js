import { Link } from 'react-router-dom'
import './sign-in.css'

const SignIn = () => {
    return (
        <main class="sign-in-page">
        <h1 class="visually-hidden">Travel App</h1>
        <form class="sign-in-form" autocomplete="off">
          <h2 class="sign-in-form__title">Sign In</h2>
          <label class="input">
            <span class="input__heading">Email</span>
            <input data-test-id="auth-email" name="email" type="email" required />
          </label>
          <label class="input">
            <span class="input__heading">Password</span>
            <input
              data-test-id="auth-password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
            />
          </label>
          <button data-test-id="auth-submit" class="button" type="submit">
            Sign In
          </button>
        </form>
        <span>
          Don't have an account?
          <Link
            data-test-id="auth-sign-up-link"
            to='/sign-up'
            class="sign-in-form__link"
          >
            Sign Up
          </Link>
        </span>
      </main>
    )
}

export default SignIn