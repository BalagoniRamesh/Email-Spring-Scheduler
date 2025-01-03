import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MyQueue from './myQueue';
import MyQueueTable from './myQueueTable';
import Search from './Search';
import SearchTable from './searchTable';
import GroupQueue from './GroupQueue'; // Ensure this path is correct

function CustomTabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CreateCaseFt() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabStyles = (isSelected) => ({
        textTransform: 'none',
        fontWeight: isSelected ? 'bold' : 'normal',
        color: isSelected ? '#FFFFFF' : '#004669',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        backgroundColor: isSelected ? '#254a9e' : '#FFFFFF',
        height: '38px',
        minHeight: '38px',
        padding: '0 16px',
        borderBottom: isSelected ? 'none' : '2px solid #4a5454',
        '&.Mui-selected': {
            color: '#FFFFFF !important',
        },
    });

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: '2px solid #222828', padding: 0 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                        display: 'flex',
                        gap: '2px',
                        height: '38px',
                        padding: 0,
                        minHeight: '38px',
                        marginBottom: 0,
                    }}
                >
                    <Tab label="Group Queue" {...a11yProps(0)} sx={tabStyles(value === 0)} />
                    <Tab label="My Queue" {...a11yProps(1)} sx={tabStyles(value === 1)} />
                    <Tab label="Search" {...a11yProps(2)} sx={tabStyles(value === 2)} />
                </Tabs>
            </Box>
            <Box sx={{ border: '1px solid #222828' }}>
                <CustomTabPanel value={value} index={0}>
                    <GroupQueue/>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <MyQueue />
                    <div style={{ marginTop: '10px' }} /> {/* Spacer */}
                    <MyQueueTable />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Search />
                    <div style={{ marginTop: '10px' }} /> {/* Spacer */}
                    <SearchTable />
                </CustomTabPanel>           
            </Box>
        </Box>
    );
}
