import {
  CssBaseline,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AppBar from "./AppBar";
import List from "./List";

// import { HashRouter } from "react-router-dom";
import React from "react";
// import Routes from "./Routes";
// import SideNav from "./SideNav";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//   })
// );

function App() {
  // const classes = useStyles();

  return (
    <>
      <AppBar />
      <div style={{ height: "15px" }}></div>
      <List />
    </>
  );
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
