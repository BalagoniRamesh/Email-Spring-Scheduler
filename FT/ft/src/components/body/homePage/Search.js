import React, { useState } from 'react';
import './search.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload'; // Import Data Export Icon
import { InputLabel, MenuItem, Select } from '@mui/material';
import { FaCalendarAlt } from 'react-icons/fa'; // Font Awesome calendar icon
import 'react-datepicker/dist/react-datepicker.css';




const Search = () => {
    const [reviewId, setReviewId] = useState('');
    const [groupName, setGroupName] = useState('');
    const [division, setDivision] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const groupOptions = ['Group 1', 'Group 2', 'Group 3'];
    const divisionOptions = ['Division A', 'Division B', 'Division C'];

    const handleSearch = () => {
        console.log('Search clicked with:', { reviewId, groupName, division, fromDate, toDate });
    };

    const handleClear = () => {
        setReviewId('');
        setGroupName('');
        setDivision('');
        setFromDate('');
        setToDate('');
    };

    const handleExport = () => {
        console.log('Data Export button clicked');
        // Add your export logic here
    };

    return (
        <div className="search-container">
            <div className="search-fields-container">
                <div className="field">
                    <label htmlFor="reviewId">Review ID</label>
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

                <div className="field">
                    <label htmlFor="fromDate">From Date</label>
                    <input
                        type="date"
                        id="fromDate"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]}  // Allow today and past dates
                    />
                </div>

                <div className="field">
                    <label htmlFor="toDate">To Date</label>
                    <input
                        type="date"
                        id="toDate"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]}  // Allow today and past dates
                    />
                </div>

                <div className="buttons-container" >
                    <button className="search-button" onClick={handleSearch}>Search</button>
                    <button className="clear-button" onClick={handleClear}>Clear</button>
                </div>
            </div>

            <div className="export-button-container">
                <button style={{ paddingLeft: '10px' }} className="data-export-button" onClick={handleExport}>
                    <FileDownloadIcon className="export-icon" />
                    Data export
                </button>
            </div>
        </div>
    );
};

export default Search;