import * as React from 'react';
import { usePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import BlockIcon from '@mui/icons-material/Block'; // Import the ban icon

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  gap: '5px', // Add spacing between buttons
});

const ButtonWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
});

const BanIcon = styled(BlockIcon)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '1.5rem',
  color: '#aaa',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease',
});

export default function UsePagination({ count, page, onChange }) {
  const { items } = usePagination({
    count,
    page: page + 1, // Adjust for 0-based indexing in MyQueueTable
    onChange: (event, value) => onChange(value - 1), // Adjust back to 0-based
  });

  const isFirstPage = page === 0;
  const isLastPage = page + 1 === count;

  const fontStyle = {
    font: '11.2px "Helvetica Neue", Helvetica, Arial, sans-serif', // Add font style here
  };

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          const isDisabled =
            (type === 'previous' && isFirstPage) || (type === 'next' && isLastPage);

          // Adjust color for "Previous" and "Next" buttons when on first or last page
          const textColor = 
            (type === 'previous' && isFirstPage) || (type === 'next' && isLastPage) 
            ? '#6F6F6F' // Color when disabled (first or last page)
            : '#000'; // Default text color

          const borderColor = 
            (type === 'previous' && isFirstPage) || (type === 'next' && isLastPage)
            ? '#6F6F6F' // Border color when disabled (first or last page)
            : '#000'; // Default border color

          const commonStyles = {
            fontWeight: selected ? 'bold' : undefined,
            backgroundColor: selected ? '#254a9e' : 'transparent', // Apply background color for selected
            color: selected ? '#fff' : textColor, // Apply text color (with disabled color on the first/last page)
            border: `1px solid ${borderColor}`, // Dynamic border color based on first/last page
            borderRadius: '4px', // Rounded corners
            padding: '4px 8px', // Button padding
            cursor: isDisabled ? 'not-allowed' : 'pointer', // Disable cursor for first/last page
            transition: 'border-color 0.3s ease, background-color 0.3s ease', // Smooth transition for hover and border
            ...fontStyle, // Apply the font style here
          };

          // Hover effect for border color
          const hoverStyles = {
            ':hover': {
              borderColor: '#254A9E', // Apply border color on hover
            }
          };

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page' || type === 'previous' || type === 'next') {
            children = (
              <ButtonWrapper>
                <button
                  type="button"
                  style={{
                    ...commonStyles,
                    ...hoverStyles, // Apply hover effect styles
                  }}
                  {...item}
                >
                  {type === 'previous' ? 'Previous' : type === 'next' ? 'Next' : page}
                </button>
                {isDisabled && <BanIcon className="ban-icon" />}
              </ButtonWrapper>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
