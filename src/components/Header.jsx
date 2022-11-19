import React, {useState} from 'react';
import search from './img/search.png';
import logo from './img/axe-logo.png';
import profile from './img/profile.png';
import arrow from './img/Icons.png';
import './Header.css';

export default function Header () {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <header className="header">
            <nav className="navbar">
                <a className="home-img-link" href="./" rel="noreferrer" >
                    <img className="home-logo" src={logo} alt="team-axe logo" />
                </a>
                <div className="search-bar-profile-container">
                    <input type="search" name="search-item" id="search" placeholder="🔍 Search"/>
                    <img className="profile" onClick={toggleModal} src={profile} alt="" />
                </div>
            </nav>

            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                    <ul className="modal-content-list">
                        <li className="modal-list-item name">
                            <a className="modal-list-item-link name-link" href="" >
                                Rikah Tata
                            </a>
                        </li>
                        <li className="modal-list-item settings">
                            <a className="modal-list-item-link settings-link" href="" >
                                Settings
                            </a>
                            <img className="settings-arrow" src={arrow} alt="" />

                        </li>
                        <li className="modal-list-item help">
                            <a className="modal-list-item-link help-link" href="" >
                                Help
                            </a>
                        </li>
                        <li className="modal-list-item log-out">
                            <a className="modal-list-item-link logout-link" href="" >
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}