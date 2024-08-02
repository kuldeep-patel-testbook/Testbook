import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

function FilterSection() {

  const filterMenu = [
    { primary: 'All Notifications' },
    { primary: 'Stories' },
    { primary: 'Questions' },
    { primary: 'Spaces' },
    { primary: 'People updates' },
    { primary: 'Comments and mentions' },
    { primary: 'Upvotes' },
    { primary: 'Your content' },
    { primary: 'Your profile' },
    { primary: 'Announcements' },
    { primary: 'Earnings' },
    { primary: 'Subscriptions' },
  ];

  return (
    <>
      <Typography variant="h6">Filters</Typography>
      <Divider component="h6" />
      <List component="nav">
        {filterMenu && filterMenu.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.primary} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FilterSection;
