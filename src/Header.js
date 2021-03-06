import React from 'react'
import './Header.css'
import sinc from './Images/sinc.png'
import InBetween from './Images/InBetween.png'
import Starbucks from './Images/starbucks.png'
import Instagram from './Images/instagram.png'
import Github from './Images/github.png'
import LinkedIn from './Images/linkedin.png'
import { Link } from 'react-router-dom'
import './Summary.css'
import awards from './Images/awards.png'
import business from './Images/business-addressed-problem.png'
import contact from './Images/contact-us.png'
import ideas from './Images/ideas.png'
import target from './Images/target-population.png'

function Header() {
    return (
        <div>
            <div className="Header-TopBar">
                <img src={sinc} alt="Logo" style={{ height: '40px', width: '40px' }} className="Header-TopBar-Items"/>
                <div>
                    <h2 id="Header-Name" className="Header-TopBar-Items">Student Incubation Cell</h2>
                </div>
            </div>
            <div className="Header-InBetween">
                <img src={InBetween} alt="Logo" style={{ height: '120px', width: '100%' }} className="Header-InBetween" />
            </div>
            <div className="Header-Startup">
                <div className="Header-Startup-Logo">
                    <img src={ Starbucks } alt="Logo" style={{ height: '120px', width: '120px'}} className="Header-" />
                </div>
                <div className="Header-Startup-Contact">
                    <div></div>
                    <div className="Header-Startup-Contact-Content">
                        <div>
                            <h1 style={{margin: '5px' }}>Starbucks</h1>
                            <span style={{margin:'0px' }}>Additional Info</span>
                        </div>
                        <div>
                            <div style={{margin: '0px' , padding: '0px'}}>
                                <img src={Instagram} alt="Logo" style={{ height: '40px', width: '40px', padding: '15px' }} />
                                <img src={Github} alt="Logo" style={{ height: '40px', width: '40px', padding: '15px'  }} />
                                <img src={LinkedIn} alt="Logo" style={{ height: '40px', width: '40px', padding: '15px'  }} />
                            </div>
                            <div>www.ourstartup.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="nav">
                <li className="li-a">
                    <Link to="/" style={{ textDecoration: 'None', fontSize: '20px', color: 'black' }}>Summary</Link>
                </li>
                <li className="li-n">
                    <Link to="/Team" style={{ textDecoration: 'None', fontSize: '20px', color: 'black' }}>Team</Link>
                </li>
                <li className="li-n">
                    <Link to="/Financials" style={{ textDecoration: 'None', fontSize: '20px', color: 'black' }}>Financials</Link>
                </li>
                <li className="li-n">
                    <Link to="/Business" style={{ textDecoration: 'None', fontSize: '20px', color: 'black' }}>Business</Link>
                </li>
                <li className="li-n">
                    <Link to="/Products" style={{ textDecoration: 'None', fontSize: '20px', color: 'black' }}>Products</Link>
                </li>
                <li className="li-n">
                    <Link to="/Requirements" style={{ textDecoration: 'None', fontSize: '20px', color: 'black' }}>Requirements</Link>
                </li>
            </ul>
            <hr style={{ height: '4px', color: 'red', backgroundColor: 'red' }} id="hr" />

        </div>
    )
}

export default Header
