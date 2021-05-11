import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";
import AppBar from "./AppBar";
import List from "./List";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import React from "react";
// import { HashRouter } from "react-router-dom";
// import Routes from "./Routes";
// import SideNav from "./SideNav";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      marginTop: spacing(2),
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main className={classes.root}>
        <List />
      </main>
    </ThemeProvider>
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
