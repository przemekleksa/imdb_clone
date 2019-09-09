import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return ( 
        <footer>
            <div className="container">
                <div className="left">
                    <ul>
                        <li><Link to="/">Strona główna</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                    </ul>
                </div>
                <div className="right">
                    {props.year} All Rights Reserved
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;