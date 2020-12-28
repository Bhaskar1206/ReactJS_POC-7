import React from 'react';
import {createMuiTheme, makeStyles   } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';



import NavBar from '../NavBar'
import DrawerComponent from '../DrawerComponent'
import tileData from './tileData';



const useStyles = makeStyles((theme) => ({
    root:{
        display : 'flex',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        overflow:'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList : {
        textAlign:"center",
        transform:'translateZ(0)',
    },
    titleBar:{
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',

    },
    icon: {
        color:'white',
    }
}));



function MenuPage(){

    const classes = useStyles();

    

    return(
        <div className={classes.gridList}>
            <NavBar></NavBar>
            <DrawerComponent></DrawerComponent>
            <h1>This is The Full List</h1>
            <GridList celHeight={260} className={classes.gridList} cols={3}>
                <GridListTile key= "Subheader" cols={4} style={{height : 'auto'}}>
                    <ListSubheader component="div"></ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title}/>
                    <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}
                        actionIcon ={ 
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <StarBorderIcon/>
                                </IconButton>
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                        />
                   </GridListTile>     
                ))}
            </GridList>
        </div>
    )
}
export default MenuPage