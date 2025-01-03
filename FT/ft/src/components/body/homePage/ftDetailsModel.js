import React, { useState } from 'react';
import './ftDetailsModel.css';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputLabel, MenuItem, Select } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FtDetailsModel = ({ open, handleClose }) => {
  const [reviewId, setReviewId] = useState('');
  const [groupName, setGroupName] = useState('');
  const [division, setDivision] = useState('');

  const groupOptions = ['Group 1', 'Group 2', 'Group 3'];
  const divisionOptions = ['Division A', 'Division B', 'Division C'];

  return (
    <Modal
      keepMounted
      open={open}

      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{ display: "flex", justifyContent: "center", height: "225px", top: '34px' }}
    >
      <div className="ft-details-model-dev">
        <div className="ft-details-model-header">
          <span className="ft-details-model-title">
            FT Details
          </span>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{ color: "white", width:"15px", height:"14px", fontSize: "10px", fontWeight:"bolder"}} />
          </IconButton>
        </div>

        <div className="ft-details-div">
          <div className="field">
            <label htmlFor="reviewId">ReviewId</label>
            <input
              type="text"
              id="reviewId"
              value={reviewId}
              onChange={(e) => setReviewId(e.target.value)}
            />
          </div>

          <div className='field'>
            <InputLabel id='group-name-select-label' style={{ marginTop: '-4px', color: 'black', fontWeight: 'bold' }}  >Group Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              style={{ height: "34px" }}
            >
              {groupOptions.map((option, index) => (
                <MenuItem key={index} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </div>

          <div className="field">
            <InputLabel id="demo-simple-select-label" style={{ marginTop: '-4px', color: 'black', fontWeight: 'bold' }}>Division</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={division}              
              onChange={(e) => setDivision(e.target.value)}
              style={{ height: "34px" }}
            >
              {divisionOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>


        </div>
        <div className="ft-details-buttons-div">
          <button className="create-case-button" >
            Create Case
          </button>
          <button className="create-case-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FtDetailsModel;