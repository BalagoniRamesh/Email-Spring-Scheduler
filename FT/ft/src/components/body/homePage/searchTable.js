import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography, FormControl, TextField } from '@mui/material';
import './searchTable.css'; // Import the CSS file
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
    { view: 'View 1', reviewID: 101, groupName: 'Group A', division: 'Sales', createdBy: 'User A', createdDate: '2023-12-01', activityLevel: 'High', assignedTo: 'User1', currentStatus: 'Open' },
    { view: 'View 2', reviewID: 102, groupName: 'Group B', division: 'Support', createdBy: 'User B', createdDate: '2023-12-05', activityLevel: 'Medium', assignedTo: 'User2', currentStatus: 'Closed' },
    { view: 'View 3', reviewID: 103, groupName: 'Group C', division: 'HR', createdBy: 'User C', createdDate: '2023-12-10', activityLevel: 'Low', assignedTo: 'User3', currentStatus: 'Pending' }

    // Add more rows if necessary for pagination to show
];

export default function SearchTable() {
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
                            <TableCell className="table-header">View</TableCell>
                            <TableCell className="table-header">Review ID</TableCell>
                            <TableCell className="table-header">Group Name</TableCell>
                            <TableCell className="table-header">Division</TableCell>
                            <TableCell className="table-header">Created By</TableCell>
                            <TableCell className="table-header">Created Date</TableCell>
                            <TableCell className="table-header">Activity Level</TableCell>
                            <TableCell className="table-header">Assigned To</TableCell>
                            <TableCell className="table-header">Current Status</TableCell>
                            
                        </TableRow>
                    </TableHead>
                </ThemeProvider>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.reviewID}>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <VisibilityIcon sx={{ marginRight: 1 }} />
                                </Box>
                            </TableCell>
                            <TableCell>{row.reviewID}</TableCell>
                            <TableCell>{row.groupName}</TableCell>
                            <TableCell>{row.division}</TableCell>
                            <TableCell>{row.createdBy}</TableCell>
                            <TableCell>{row.createdDate}</TableCell>
                            <TableCell>{row.activityLevel}</TableCell>
                            <TableCell>{row.assignedTo}</TableCell>
                            <TableCell>{row.currentStatus}</TableCell>
                           
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
    );
}
