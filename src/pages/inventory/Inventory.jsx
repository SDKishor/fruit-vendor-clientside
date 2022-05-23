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
              <TableCell align="center">price</TableCell>
              <TableCell align="center">quantity</TableCell>
              <TableCell align="center">Sold</TableCell>
              <TableCell align="center">manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fruits.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="fruitName">
                  {row.Fruit}
                </TableCell>
                <TableCell align="center">{row.vendor}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.sold}</TableCell>
                <TableCell align="center">
                  <CustomLink to={"/inventory/" + `${row._id}`}>
                    <button>Update</button>
                  </CustomLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
