import * as React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BasicTable({ tableData }) {
  return (
    <TableContainer component={Paper}>
      <Table width="90%" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Govt Type</TableCell>
            <TableCell align="right">Govt ID</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Sex}</TableCell>
              <TableCell align="right">{row.Mobile}</TableCell>
              <TableCell align="right">{row["Govt-ID-Type"]}</TableCell>
              <TableCell align="right">{row["Govt ID"]}</TableCell>
              <TableCell align="right">{row.Address}</TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.Country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
