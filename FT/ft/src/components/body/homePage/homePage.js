import React from 'react';
import './homePage.css';
import FtDetailsModel from './ftDetailsModel';
import CreateCaseFt from './createCaseFt';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Tooltip } from '@mui/material';
import MyQueueTable from './myQueueTable';

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenmodel = () => setOpen(true);
  const handleClosemodel = () => setOpen(false);

  return (
    <div className="home-page-main">
      <div className="home-page-header">
        <span className="home-page-title">Fintech Home Page</span>
      </div>
      <div className="admin-button-div">
        <button className="admin-button">Admin Screen</button>
      </div>

      <div className="initiate-new-review-div">
        <button className="admin-button" onClick={handleOpenmodel}>
          Initiate New Review
        </button>
        <button className="admin-button">Re-Assign</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FtDetailsModel open={open} handleClose={handleClosemodel} />
      </div>
      <div >
        <Tooltip title="Refresh" >
          <RefreshIcon className="refresh_icon" />
        </Tooltip>
      </div>
      <div className="case_create_ft">
        <CreateCaseFt />
      </div>
      <div >
       
       
      </div>

    </div>

  );
};

export default HomePage;
