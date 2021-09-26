import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

const useStyles = makeStyles((theme) => ({
    appBar: {
        palette: {
            primary: {
              light: "#33c9dc",
              main: "#00bcd4",
              dark: "#008394",
              contrastText: "#fff",
            },
            secondary: {
              light: "#ff6333",
              main: "#ff3d00",
              dark: "#b22a00",
              contrastText: "#fff",
            },
          },
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },

      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));


const App = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
            {/* style={{ color: "#7fa0a3"}} */}
                <Typography variant="h2" align="center" style={{ color: "#7fa0a3"}} >VIA</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
            {/* VideoPlayer */}
            {/* Options -> Notifications */}
        </div>
    );
}

export default App;
