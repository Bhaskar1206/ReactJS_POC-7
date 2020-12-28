import React from 'react';
import {Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import {makeStyles,useTheme} from '@material-ui/core/styles';
import { AppBar, CssBaseline, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { FormatColorTextSharp } from '@material-ui/icons';

import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function DrawerComponent(){

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const clickButton = () => {
      
      <button>yes</button>
      
    }

    const handleDrawrOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <div className={classes.root}>
            <CssBaseline></CssBaseline>
            <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawrOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                    ><MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant ="h6" noWrap>
                        Menu
                </Typography>
            </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistant"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                        <ListItem button onClick={() => { clickButton()}}>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText>Account</ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><TransferWithinAStationIcon/></ListItemIcon>
                            <ListItemText>My Trip</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><SettingsIcon/></ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </ListItem>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><PowerSettingsNewIcon/></ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItem>
                    
                </List>
                <Divider />
       
            </Drawer>
        </div>
    )

}
export default DrawerComponent;