import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Drawer from '@mui/material/Drawer'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemText from '@mui/material/ListItemText'; 
import './App.css'
import { Popover } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ReactComponent as ClientsIcon } from './clientsIcon.svg';
import { ReactComponent as EmployeeIcon } from './employeeIcon.svg';
import { ReactComponent as InvoiceIcon } from './invoicesIcon.svg';
import { ReactComponent as TimesheetIcon } from './timesheetIcon.svg';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GravelTechnologiesCard from './GravelTechnologiesCard';

export default function FadeMenu() {
  //megamenu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nestedAnchorEl, setNestedAnchorEl] = React.useState(null);
  const [nestedAnchorEl2, setNestedAnchorEl2] = React.useState(null);
  const [nestedAnchorEl3, setNestedAnchorEl3] = React.useState(null);
  const [nestedAnchorEl4, setNestedAnchorEl4] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNestedAnchorEl(null);
    setNestedAnchorEl2(null);
    setNestedAnchorEl3(null);
    setNestedAnchorEl4(null);
  };
  const handleNestedClick = (event) => {
    setNestedAnchorEl(event.currentTarget);
  };
  const handleNestedClick2 = (event) => {
    setNestedAnchorEl2(event.currentTarget);
  };
  const handleNestedClick3 = (event) => {
    setNestedAnchorEl3(event.currentTarget);
  };
  const handleNestedClick4 = (event) => {
    setNestedAnchorEl4(event.currentTarget);
  };
  const handleNestedClose = () => {
    setNestedAnchorEl(null);
  };
  const handleNestedClose2 = () => {
    setNestedAnchorEl2(null);
  };
  const handleNestedClose3 = () => {
    setNestedAnchorEl3(null);
  };
  const handleNestedClose4 = () => {
    setNestedAnchorEl4(null);
  };

  // sidebar
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const BlueIcon = styled(ClientsIcon)({
    width: '1.5rem',
    height: '1.5rem',
    fill: 'currentColor',
  });
  const OrangeIcon = styled(EmployeeIcon)({
    width: '1.5rem',
    height: '1.5rem',
    fill: 'currentColor',
  });
  const PinkIcon = styled(InvoiceIcon)({
    width: '1.5rem',
    height: '1.5rem',
    fill: 'currentColor',
  });
  const GreenIcon = styled(TimesheetIcon)({
    width: '1.5rem',
    height: '1.5rem',
    fill: 'currentColor',
  });

  return (
    <div className='App-header'>
      <Button
        id="fade-button"
        variant='contained'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        User Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem 
          onClick={handleNestedClick}
          sx={{ '&:hover': { backgroundColor: '#315C75', color: 'white' } }}
        >
          <ListItemIcon>
            <OrangeIcon />
          </ListItemIcon>
          Employees
          <ListItemIcon>
            <NavigateNextIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem 
          onClick={handleNestedClick2}
          sx={{ '&:hover': { backgroundColor: '#315C75', color: 'white' } }}
        >
          <ListItemIcon>
            <BlueIcon />
          </ListItemIcon>
          Clients
          <ListItemIcon>
            <NavigateNextIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem 
          onClick={handleNestedClick3}
          sx={{ '&:hover': { backgroundColor: '#315C75', color: 'white' } }}
        >
          <ListItemIcon>
            <PinkIcon />
          </ListItemIcon>
          Invoices
          <ListItemIcon>
            <NavigateNextIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem 
          onClick={handleNestedClick4}
          sx={{ '&:hover': { backgroundColor: '#315C75', color: 'white' } }}
        >
          <ListItemIcon>
            <GreenIcon />
          </ListItemIcon>
          Timesheets
          <ListItemIcon>
            <NavigateNextIcon />
          </ListItemIcon>
        </MenuItem>
      </Menu>
      <Popover
        id="nested-menu"
        anchorEl={nestedAnchorEl}
        open={Boolean(nestedAnchorEl)}
        onClose={handleNestedClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ backgroundColor: '#E27C32', '&:hover': { backgroundColor: '#E27C32' }, color: 'white' }}>Employee Reports</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#FFD5BD' } }}>Manage Employees</MenuItem>
      </Popover>
      <Popover
        id="nested-menu2"
        anchorEl={nestedAnchorEl2}
        open={Boolean(nestedAnchorEl2)}
        onClose={handleNestedClose2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ backgroundColor: '#23699C', '&:hover': { backgroundColor: '#23699C' }, color: 'white' }}>Company Reports</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#BAE2FF' } }}>Manage Companies</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#BAE2FF' } }}>Manage Projects</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#BAE2FF' } }}>Project Sub Assignments</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#BAE2FF' } }}>Company Admins</MenuItem>
      </Popover>
      <Popover
        id="nested-menu3"
        anchorEl={nestedAnchorEl3}
        open={Boolean(nestedAnchorEl3)}
        onClose={handleNestedClose3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ backgroundColor: '#AA155D', '&:hover': { backgroundColor: '#AA155D' }, color: 'white' }}>Invoice Reports</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#FFDDED' } }}>Manage Invoices</MenuItem>
      </Popover>
      <Popover
        id="nested-menu4"
        anchorEl={nestedAnchorEl4}
        open={Boolean(nestedAnchorEl4)}
        onClose={handleNestedClose4}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ backgroundColor: '#348D4D', '&:hover': { backgroundColor: '#348D4D' }, color: 'white' }}>Timesheet Reports</MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#A4F5A3' } }}>Submit Timesheet</MenuItem>
      </Popover>

      <IconButton
        edge="start"
        color="black"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ position: 'fixed', top: 20, left: 20 }}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        onOpen={() => setDrawerOpen(true)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      ></SwipeableDrawer>

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
          },
        }}
      >
        <List sx={{ width: '100%', textAlign: 'center' }}>
          <ListItem sx={{
            justifyContent: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 3,
              backgroundColor: '#F57407', 
              borderRadius: 1,
            },
          }}>
            <ListItemText 
              primaryTypographyProps={{fontSize: '1.5rem'}}
              primary="Employees"
            />
          </ListItem>
          <List component="div" disablePadding sx={{ width: '100%' }}>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Employee Reports" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4, marginBottom: 4 }}>
              <ListItemText primary="Manage Employees" />
            </ListItem>
          </List>

          <ListItem sx={{
            justifyContent: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 3,
              backgroundColor: '#047CA3', 
              borderRadius: 1,
            },
          }}>
            <ListItemText 
              primaryTypographyProps={{fontSize: '1.5rem'}}
              primary="Clients"
            />
          </ListItem>
          <List component="div" disablePadding sx={{ width: '100%' }}>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Company Reports" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Manage Companies" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Manage Projects" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Project Sub Assignments" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4, marginBottom: 4 }}>
              <ListItemText primary="Company Admins" />
            </ListItem>
          </List>

          <ListItem sx={{
            justifyContent: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 3,
              backgroundColor: '#E43B8C', 
              borderRadius: 1,
            },
          }}>
            <ListItemText 
              primaryTypographyProps={{fontSize: '1.5rem'}}
              primary="Invoices"
            />
          </ListItem>
          <List component="div" disablePadding sx={{ width: '100%' }}>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Invoice Reports" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4, marginBottom: 4 }}>
              <ListItemText primary="Manage Invoices" />
            </ListItem>
          </List>

          <ListItem sx={{
            justifyContent: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 3,
              backgroundColor: '#54C488', 
              borderRadius: 1,
            },
          }}>
            <ListItemText 
              primaryTypographyProps={{fontSize: '1.5rem'}}
              primary="Timesheets"
            />
          </ListItem>
          <List component="div" disablePadding sx={{ width: '100%' }}>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4 }}>
              <ListItemText primary="Timesheet Reports" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'center', paddingLeft: 4, marginBottom: 4 }}>
              <ListItemText primary="Submit Timesheet" />
            </ListItem>
          </List>
        </List>
      </Drawer>
      <div>
          <GravelTechnologiesCard />
      </div>
    </div>
  );
}