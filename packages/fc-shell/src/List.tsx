import React from "react";

const FcList = React.lazy(() => import("fc_list/FcList"));

const List = () => (
  <div>
    <React.Suspense fallback="Loading List...">
      <FcList />
    </React.Suspense>
  </div>
);

export default List;
