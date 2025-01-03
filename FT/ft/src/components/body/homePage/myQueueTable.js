import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography, FormControl, TextField } from '@mui/material';
import './myQueueTable.css'; // Import the CSS file
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
    { startCase: 'Case 1', reviewID: 1, childReviewID: 'A1', issueID: 'I001', trackIssueId: 'T001', division: 'Sales', groupName: 'Group 1', taskStatus: 'Open', assignedToUser: 'User1', role: 'Admin' },
    { startCase: 'Case 2', reviewID: 2, childReviewID: 'A2', issueID: 'I002', trackIssueId: 'T002', division: 'Support', groupName: 'Group 2', taskStatus: 'Closed', assignedToUser: 'User2', role: 'User' },
    { startCase: 'Case 3', reviewID: 3, childReviewID: 'A3', issueID: 'I003', trackIssueId: 'T003', division: 'HR', groupName: 'Group 3', taskStatus: 'Pending', assignedToUser: 'User3', role: 'Manager' },
    { startCase: 'Case 3', reviewID: 4, childReviewID: 'A3', issueID: 'I003', trackIssueId: 'T003', division: 'HR', groupName: 'Group 3', taskStatus: 'Pending', assignedToUser: 'User3', role: 'Manager' },
    { startCase: 'Case 3', reviewID: 5, childReviewID: 'A3', issueID: 'I003', trackIssueId: 'T003', division: 'HR', groupName: 'Group 3', taskStatus: 'Pending', assignedToUser: 'User3', role: 'Manager' },
    { startCase: 'Case 3', reviewID: 6, childReviewID: 'A3', issueID: 'I003', trackIssueId: 'T003', division: 'HR', groupName: 'Group 3', taskStatus: 'Pending', assignedToUser: 'User3', role: 'Manager' },
    { startCase: 'Case 3', reviewID: 7, childReviewID: 'A3', issueID: 'I003', trackIssueId: 'T003', division: 'HR', groupName: 'Group 3', taskStatus: 'Pending', assignedToUser: 'User3', role: 'Manager' },
    // Add more rows if necessary for pagination to show
];

export default function MyQueueTable() {
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
                            <TableCell className="table-header">Start Case</TableCell>
                            <TableCell className="table-header">Review ID</TableCell>
                            <TableCell className="table-header">ChildReviewID</TableCell>
                            <TableCell className="table-header">IssueID</TableCell>
                            <TableCell className="table-header">Track IssueId</TableCell>
                            <TableCell className="table-header">Division</TableCell>
                            <TableCell className="table-header">Group Name</TableCell>
                            <TableCell className="table-header">Task Status</TableCell>
                            <TableCell className="table-header">Assigned To User</TableCell>
                            <TableCell className="table-header">Role</TableCell>
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
                            <TableCell>{row.issueID}</TableCell>
                            <TableCell>{row.trackIssueId}</TableCell>
                            <TableCell>{row.division}</TableCell>
                            <TableCell>{row.groupName}</TableCell>
                            <TableCell>{row.taskStatus}</TableCell>
                            <TableCell>{row.assignedToUser}</TableCell>
                            <TableCell>{row.role}</TableCell>
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
