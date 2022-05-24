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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Inventory = () => {
  const [fruits, setFruits] = UsefruitsData();

  const handleDelete = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
    const proceed = window.confirm("are you sure?");

    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = fruits.filter((fruit) => fruit._id !== id);
            setFruits(remaining);
          }
        });
    }
  };

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
              <TableCell align="center">Manage</TableCell>
              <TableCell align="center">Delete</TableCell>
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
                <TableCell align="center">
                  <button
                    onClick={() => handleDelete(row._id)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
