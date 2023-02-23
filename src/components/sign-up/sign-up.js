import './sign-up.css'

const SignUp = () => {
    return (
        <main class="sign-up-page">
            <h1 class="visually-hidden">Travel App</h1>
            <form class="sign-up-form" autocomplete="off">
                <h2 class="sign-up-form__title">Sign Up</h2>
                <label class="input">
                    <span class="input__heading">Full name</span>
                    <input
                        data-test-id="auth-full-name"
                        name="full-name"
                        type="text"
                        required
                    />
                </label>
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
                    Sign Up
                </button>
            </form>
            <span>
                Already have an account?
                <a
                    data-test-id="auth-sign-in-link"
                    href="./sign-in.html"
                    class="sign-up-form__link"
                >Sign In</a>
            </span>
        </main>
    )
}

export default SignUp