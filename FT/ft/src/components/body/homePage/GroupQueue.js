import React, { useState } from 'react';
import './groupQueue.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography, FormControl, TextField } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import UsePagination from './UsePagination';

const theme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '0px', // Remove padding for all TableCells
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    border: 'none', // Remove default borders from MUI TableCells
                },
                head: {
                    border: '#254a9e',  /* Custom border */ // Remove borders from header cells
                },
                body: {
                    border: 'none', // Remove borders from body cells
                },
            },
        },
    },
});



const rows = [
    { startCase: 'Start 1', reviewID: 101, childReviewID: 'C101', division: 'Sales', groupName: 'Group A', currentStatus: 'Open', assignedTo: 'User1', role: 'Admin', createdBy: 'User A' },
    { startCase: 'Start 2', reviewID: 102, childReviewID: 'C102', division: 'Support', groupName: 'Group B', currentStatus: 'Closed', assignedTo: 'User2', role: 'User', createdBy: 'User B' },
    { startCase: 'Start 3', reviewID: 103, childReviewID: 'C103', division: 'HR', groupName: 'Group C', currentStatus: 'Pending', assignedTo: 'User3', role: 'Manager', createdBy: 'User C' },
   
];



const GroupQueue = () => {
    const [reviewID, setReviewID] = useState('');
    const [childReviewID, setChildReviewID] = useState('');

    const handleSearch = () => {
        console.log('Search clicked with:', reviewID, childReviewID);
    };

    const handleClear = () => {
        setReviewID('');
        setChildReviewID('');
    };
    //Table
    const [rowsPerPage, setRowsPerPage] = React.useState(5);  // Rows per page
    const [page, setPage] = React.useState(0);  // Current page    

    // Handle change in rows per page
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0); // Reset page to 0 when rows per page change
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

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
                <Box className="button-container" sx={{ marginTop: '10px' }}>
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
            <div style={{ marginTop: '10px' }} /> {/* Spacer */}
            {/* /*table*/}
            <TableContainer component={Paper}>
                <Box className="per-page-header" display="flex" justifyContent="flex-end">
                    <Typography variant="body1" className="per-page-label">
                        Per page:
                    </Typography>
                    <FormControl variant="outlined" size="small">
                        <TextField className="MuiTextField-root-custom-per-page-input"
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            placeholder="# rows"  // Placeholder text
                            type="number"
                            variant="outlined"
                            size="small"
                            inputProps={{ min: 1 }}  // Ensure the minimum value is 1
                        />
                    </FormControl>
                </Box>

                {/* Table */}
                <Table className="table" aria-label="simple table">
                    <ThemeProvider theme={theme}>
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-header">Start Case</TableCell>
                                <TableCell className="table-header">Review ID</TableCell>
                                <TableCell className="table-header">ChildReviewID</TableCell>
                                <TableCell className="table-header">Division</TableCell>
                                <TableCell className="table-header">Group Name</TableCell>
                                <TableCell className="table-header">Current Status</TableCell>
                                <TableCell className="table-header">Assigned To</TableCell>
                                <TableCell className="table-header">Role</TableCell>
                                <TableCell className="table-header">Created By</TableCell>                                
                            </TableRow>
                        </TableHead>
                    </ThemeProvider>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.reviewID}>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <PlayArrowIcon sx={{ marginRight: 1, color: '#208000BF' }} />
                                    </Box>
                                </TableCell>
                                <TableCell>{row.reviewID}</TableCell>
                                <TableCell>{row.childReviewID}</TableCell>
                                <TableCell>{row.division}</TableCell>
                                <TableCell>{row.groupName}</TableCell>
                                <TableCell>{row.currentStatus}</TableCell>
                                <TableCell>{row.assignedTo}</TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>{row.createdBy}</TableCell>                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Box display="flex" justifyContent="flex-end" p={2}>
                    <UsePagination
                        count={Math.ceil(rows.length / rowsPerPage)} // Total pages
                        page={page}
                        onChange={handlePageChange} // Handle page change
                    />
                </Box>

            </TableContainer>
        </div>


    );
};

export default GroupQueue;
