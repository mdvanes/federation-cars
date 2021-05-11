import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";
import List from "./List";

// import { HashRouter } from "react-router-dom";
// import React from "react";
// import Routes from "./Routes";
// import SideNav from "./SideNav";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

function App() {
  const classes = useStyles();

  return(<><Typography>Federation Cars - App Shell</Typography><List /></>);
//   return (
//     <HashRouter>
//       <CssBaseline />
//       <div className={classes.root}>
//         <SideNav />
//         <Routes />
//       </div>
//     </HashRouter>
//   );
}

export default App;