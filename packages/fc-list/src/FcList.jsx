import { DataGrid } from "@material-ui/data-grid";

import React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "brand", headerName: "Brand", width: 130 },
  { field: "model", headerName: "Model", width: 130 },
  {
    field: "fisc",
    headerName: "Fiscal",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, brand: "Volvo", model: "XC40 P8 Pro", fisc: 61060 },
  { id: 2, brand: "Polestar", model: "2 Pilot Plus", fisc: 58900 },
  { id: 3, brand: "Tesla", model: "Model 3 LR", fisc: 60780 },
];

function FcList() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onRowSelected={(newSelection) => {
          console.log(newSelection.data.id, newSelection.data.model);
        }}
      />
    </div>
  );
}

export default FcList;
