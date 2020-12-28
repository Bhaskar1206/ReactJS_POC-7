import React from 'react';

import {useHistory} from 'react-router-dom';
import {makeStyles,ThemeProvider} from '@material-ui/core/styles'
import { Button, createMuiTheme, FormControl, IconButton, Input, InputAdornment, TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Fingerprint from '@material-ui/icons/Fingerprint';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {green} from '@material-ui/core/colors'

import { deepOrange } from '@material-ui/core/colors';


const useStyle = makeStyles((theme) =>({
    root : {
       width:'580px',
    },
    box:{

        paddingTop:'100px',
        textAlign:'center',
        backgroundColor:"white",
        
       
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
   
    margin: {
        paddingTop:'10px',
        margin: theme.spacing(1),
    },
    withoutLabel:{
        marginTop: theme.spacing(3),
    },
    textField : {
        width:'25ch',
    }
}))

const theme = createMuiTheme({
    palette:{
        primary:green,
    },
})

function LoginPage(){
    const history = useHistory();
    const classes = useStyle();
    const [values,setValues] = React.useState({
        userName:'',
        password:'',
        showPassword:false,
    });
    const handleSubmit = e =>{
        e.preventDefault();
        if(values.userName==="Bhaskar" && values.password==="123"){
            history.push(`/home`);
        }else if(values.username==="" && values.password===""){
            history.push(`/`);
        }else{
            history.push(`/error`);
        }
    }
    const handleChange =(prop) =>(event) => {
        setValues({...values,[prop]: event.target.value});
        console.log(values);
    }
    const handleClickShowPassword =() => {
        setValues({...values,showPassword: !values.showPassword});
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    return(
        <div className={classes.box}>
            <h1 >Loggin</h1>
            <FormControl className={classes.margin}>
                
                <ThemeProvider theme={theme}>
                    <TextField
                        id="userName"
                        variant="outlined"
                        placeholder="UserName"
                        values={values.userName}
                        onChange={handleChange('userName')}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <AccountCircle></AccountCircle>
                                </InputAdornment>
                            )
                        }}
                    ></TextField>
                </ThemeProvider>
            </FormControl>
            <FormControl className={classes.margin}>
                <ThemeProvider theme={theme}>
                    <TextField
                        id="password"
                        variant="outlined"
                        placeholder="Password"
                        type={values.showPassword? 'text' : 'password'}
                        values={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <Fingerprint></Fingerprint>
                                </InputAdornment>
                            ),
                            endAdornment:(
                                <InputAdornment position ="end">
                                    <IconButton
                                    aria-label="password"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility/> :<VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    ></TextField>
                </ThemeProvider>
            </FormControl>
            
            <div>
                <Button 
                variant="outlined"
                color="secondary"
                onClick={handleSubmit}
                className={classes.root}
                >Submit</Button>
            </div>
           
            
        </div>
    )
    }
    export default LoginPage;