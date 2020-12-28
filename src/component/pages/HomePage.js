import NavBar from '../NavBar';
import './HomePage.css'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {makeStyles,createMuiTheme,withStyles,ThemeProvider} from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { green,purple } from '@material-ui/core/colors';

import DrawerComponent from '../DrawerComponent';

const BootStrapButton = withStyles({
    
    root: {
        boxShadow:'none',
        textTransform: 'none',
        fontSize:'16',
        padding:'6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor:'#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor:'#0069d9',
            borderColor:'#0062cc',
            boxShadow:'none',
        },
        '&:active':{
            boxShadow:'none',
            backgroundColor: '#0063cc',
            borderColor:'#005cbf',
        },
        '&:focus': {
            boxShadow:'0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover' : {
            backgroundColor:purple[700],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    container:{
        height:'100vh',
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        boxShadow: 'inset 0 0 0 10000px rgba(0,0,0,0.2)',
        objectFit: 'contain',
    },
    h1:{
        color:'#ffffff',
        fontSize:'60px',
        textAlign:'center',
        paddingTop:'50px',
    },
    p:{
        color:'#ffffff',
        fontSize:'20px',
        textAlign:'center',
        paddingTop:'50px',
    },
    vid:{
        objectFit:'cover',
        width:'100%',
        height:'100%',
        position:'fixed',
        zIndex:'-1',
    },
    btn:{
        textAlign:'center'
    }
}));
const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

function HomePage(){
    const classes = useStyles();
return(
    <div className={classes.container}>
        {/*<NavBar></NavBar>*/}
        <DrawerComponent></DrawerComponent>
        <video src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
        className={classes.vid}
        ></video>
        <h1 className={classes.h1}>Welcome to the HomePage</h1>
        <p className={classes.p}>This website is all about the destination
            which we have some information
        </p>
        <div className={classes.btn}>
            <Button 
                className={classes.root}
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<SendIcon></SendIcon>}
            >Details</Button>
            <Button 
                className={classes.root}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<PlayCircleOutlineIcon></PlayCircleOutlineIcon>}
            >Watch</Button>
                <div className={classes.btn}>
                    <ColorButton
                    className={classes.root}
                    color="primary"
                    variant="contained"
                    endIcon={<PlayCircleOutlineIcon></PlayCircleOutlineIcon>}
                    >Custom Button</ColorButton>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.root}
                        >Theme Provider</Button>
                    </ThemeProvider>
                    <BootStrapButton
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.root}
                    >BootStrap</BootStrapButton>
            </div>
        </div>
        
    </div>
)
}
export default HomePage;