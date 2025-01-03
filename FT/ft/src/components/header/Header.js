import React from 'react';
import './Header.css';
import meshreq_logo from '../../../src/components/logo/meshreq.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Tooltip } from '@mui/material';

const Header = () => {
    return (
        <div className="headerDiv">
            <div>
                <img src={meshreq_logo} alt="Mashreq Logo" className="meshreq_logo" />
            </div>
            <div className='centerTextDiv'>
                <p className="centerText">FinTech Credit Review</p>
            </div>
            <div className='logoutDiv'>
                <p className="usr_1"><b> Logged in as</b><br />deadmin</p>
                <Tooltip title="Logout">
                    <PowerSettingsNewIcon />
                </Tooltip>
            </div>
        </div>
    );
};

export default Header;
