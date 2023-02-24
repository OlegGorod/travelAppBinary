import {Fragment} from 'react'

import './footer.css'
import Heart from './heart.svg'

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <span className="footer__text">
                    from
                    <a className="footer__link" href="https://binary-studio.com">
                        binary studio
                    </a>
                    with
                    <img
                        className="footer__icon"
                        src={Heart}
                        alt="heart icon"
                    />
                </span>
            </footer>
        </Fragment>
    )
}

export default Footer