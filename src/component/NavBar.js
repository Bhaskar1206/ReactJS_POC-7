import React from 'react';
import {Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, colors } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles((theme) =>({
    box:{
        textAlign:"center",
        size:"small"
        
    },
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    root : {
        display:'flex',
        flexWrap:'wrap',
    },
    margin: {
        margin: theme.spacing(1),
        width:'25ch'
    },
    withoutLabel:{
        marginTop: theme.spacing(3),
    },
    textField : {
        width:'25ch',
    }
}))

 

function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl , setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose =() => {
        setAnchorEl(null);
    };

    return(
        <div>
            <BottomNavigation
                
                value={value}
                onChange={(event, newValue)=> {
                setValue(newValue);
                }}
                showLabels     
                    
            >
                <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon></HomeIcon>}></BottomNavigationAction>
                <BottomNavigationAction component={Link} to="/menu" label="List" icon={<MenuIcon></MenuIcon>}></BottomNavigationAction>
                <BottomNavigationAction component={Link}  label="Location" icon={<LocationOnIcon/>}></BottomNavigationAction>
                <BottomNavigationAction aria-controls="simple-menu" label="Account" aria-haspopup="true" onClick={handleClick} icon={<AccountCircleIcon></AccountCircleIcon>}></BottomNavigationAction>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <MenuItem > <PersonIcon/></MenuItem>
                        <MenuItem><SettingsIcon/></MenuItem>
                        <MenuItem component={Link} to="/"><PowerSettingsNewIcon/></MenuItem>
                    </Menu>
            </BottomNavigation>
           
        </div>
        

    )
}
export default NavBar;


{/*<List>
                        <ListItem>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText>Account</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><TransferWithinAStationIcon/></ListItemIcon>
                            <ListItemText>My Trip</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><SettingsIcon/></ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><PowerSettingsNewIcon/></ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItem>
                    
</List>*/}