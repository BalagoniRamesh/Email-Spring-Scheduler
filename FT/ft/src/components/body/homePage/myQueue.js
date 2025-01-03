import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './myQueue.css';

const MyQueue = () => {
    const [reviewID, setReviewID] = useState('');
    const [childReviewID, setChildReviewID] = useState('');

    const handleSearch = () => {
        console.log('Search clicked with:', reviewID, childReviewID);
    };

    const handleClear = () => {
        setReviewID('');
        setChildReviewID('');
    };

    return (
        <div >
            {/* Input and Buttons Container */}
            <Box className="input-buttons-container">
                {/* ReviewID Label and Input */}
                <Box className="custom-label-container">
                    <Typography className="custom-label">ReviewID</Typography>
                    <TextField
                        id="review-id"
                        variant="outlined"
                        value={reviewID}
                        onChange={(e) => setReviewID(e.target.value)}
                    />
                </Box>

                {/* ChildReviewID Label and Input */}
                <Box className="custom-label-container">
                    <Typography className="custom-label">Child ReviewID</Typography>
                    <TextField
                        id="child-review-id"
                        variant="outlined"
                        value={childReviewID}
                        onChange={(e) => setChildReviewID(e.target.value)}
                    />
                </Box>

                {/* Search and Clear Buttons */}
                <Box className="button-container" sx={{marginTop:'10px'}}>
                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        className="custom-button search-button" // Apply custom width and height to Search button
                    >
                        Search
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClear}
                        className="custom-button clear-button" // Apply custom width and height to Clear button
                    >
                        Clear
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default MyQueue;
