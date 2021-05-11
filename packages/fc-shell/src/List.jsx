// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

// import DialogMarkdown from "../docs/Dialog.md";
// import Markdown from "markdown-to-jsx";
// import Page from "../Page";
import React from "react";

const FcList = React.lazy(() => import("fc_list/FcList"));

const List = () => (
  <div>
      List:
    <React.Suspense fallback="Loading List...">
      <FcList />
    </React.Suspense>
  </div>
  //   <Page title="Dialog Demo">
  //     <Markdown>{DialogMarkdown}</Markdown>
  //   </Page>
);

export default List;
