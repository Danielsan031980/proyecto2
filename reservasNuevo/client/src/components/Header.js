import { AppBar, Avatar, Drawer, IconButton, InputBase,  makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import logo from "../img/logo.png"
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from 'react-router-dom'


const Header = () => {
    const[tablet,setTablet]= useState(true)
    const [draweropen, setDraweropen] = useState(true)
    const classes = useStyle()


    useEffect(() => {
        const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
        responsiveness();
        window.addEventListener("resize", ()=>responsiveness())


    },[])


    const displayTablet = () => {
        const handleDrawerOpen = () => {
            setDraweropen(true)
        }
        const handleDrawerClose = () => {
            setDraweropen(false)
        }

        const headersData = ["My Account", "previous bookings", "log out"]

        const getDrawerChoises = () => {
            return headersData.map((data)=>{
                return (
                    <ul>
                        <li>{data}</li>
                    </ul>

                )
            })
        }

        return(
            <Toolbar className={classes.toolbar}   >
            <IconButton {...{edge: "start", 
            color:"#ccc",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
            }}>
                <MenuIcon fontSize="large" />
            </IconButton>
                <Drawer {...{
                anchor: "left",
                open: draweropen,
                onClose: handleDrawerClose,
            }}>
                <div>{ getDrawerChoises()}</div>
                </Drawer>
                <Link to="/home">
                    <img src={logo}  className={ classes.logo} alt="logo"/>
                </Link>
                <div className={classes.right}>
                <Typography> Sing in </Typography>
                <Avatar className={classes.avatar}></Avatar>
             </div>
            </Toolbar>
        )
       
    }
    const displayDesktop = () => (
        <Toolbar className={classes.toolbar}>
            <Link to="/home">
                    <img src={logo}  className={ classes.logo} alt="logo"/>
                </Link>
            <div className={classes.center}>
            <InputBase  fullWidth placeholder='Search here...' inputProps={{className: classes.input}} />
            <SearchIcon/>
            </div>
            <div className={classes.right}>
                <Typography> Sing in </Typography>
                <Avatar className={classes.avatar}></Avatar>
            </div>
          
        </Toolbar>
    )
    
    return (
    <AppBar className={classes.root}>
       <h1>Encabezamiento</h1>
       {
           tablet ? displayTablet() : displayDesktop()
       }
       </AppBar>
      
  )
}

const useStyle = makeStyles((theme) => ({
    root:{
        position:"sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 99,
        width: "100vw",
        display: "flex",
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
  
    },
    logo:{
        height:"30px",
        margin: theme.spacing(1,0,0,2),
        objectFit: "contain",
    },
    input:{
        fontSize: "1.2rem",
        padding: theme.spacing(1,5,1,5),
    },
    center:{
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        minWidth: "200px",
        borderRadius: "999px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    right:{
        color:"#333",
        display:"flex",
        alignItems: theme.spacing(2)
    },
    avatar:{
        marginleft: theme.spacing(2)
    }

}))

export default Header 