import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./inventory.css";
import { UsefruitsData } from "../../hooks/UsefruitsData";
import CustomLink from "../../hooks/CustomLink";
import { async } from "@firebase/util";

function createData(Fruit, Vendor, price, quantity, Sold) {
  return { Fruit, Vendor, price, quantity, Sold };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const Inventory = () => {
  const [fruits, setFruits] = UsefruitsData();

  return (
    <div className="inventory">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="headrow">
              <TableCell>Fruits</TableCell>
              <TableCell align="right">Vendor</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">quantity</TableCell>
              <TableCell align="right">Sold</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fruits.map((row) => (
              <TableRow
                key={fruits._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <CustomLink to={"/inventory/" + `${row._id}`}>
                    {row.Fruit}
                  </CustomLink>
                </TableCell>
                <TableCell align="right">{row.vendor}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.sold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
