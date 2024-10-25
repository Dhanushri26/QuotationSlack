import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';


// const totalAmount = 4148.0;

export default function QuotationSummary({ totalAmount, totalQty }) {
  const data = [
    { desc: "Total Amount", qty: totalQty, amount: totalAmount },
    { desc: "Total Discount", qty: "10%", amount: -100.0 },
    { desc: "Total Refundable", qty: "0%", amount: 0 },
    { desc: "Total Tax", qty: "18%", amount: (totalAmount * 0.18) },

  ];
    
  const {totalAmenities,totalPrice} = useSelector((state) => state.amenities)
 const{totalUtility , totalCost} = useSelector((state) => state.utilities)
  console.log("Total from Aminities",totalAmenities,totalPrice);
  console.log("Total from Utility",totalUtility,totalCost);

  var QuoteAmount = totalAmount-100+(totalAmount*0.18)+totalPrice+totalCost;
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 410,
        p: 1,
        ml: -1,
        width: "100%",
        height: "65vh",
        msScrollWidth: "none",
        scrollbarWidth: "none",
        boxShadow: "none",
        fontFamily: "Nunito Sans",
        mt: -1,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "bold",
          p: 0.5,
          fontSize: "0.95rem",
          fontFamily: "Nunito Sans",
        }}
      >
        Quotation Summary
      </Typography>
      <Table
        sx={{
          minWidth: 330,
          backgroundColor: "#F5F7FA",
          borderRadius: "4px",
          "& .MuiTableCell-root": {
            padding: "4px",
            width: "10rem",
            fontFamily: "Nunito Sans",
          },
          pt: -1,
          mt: -0.5,
        }}
        aria-label="quotation summary"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                width: "15%",
                color: "gray",
              }}
            >
              &nbsp;&nbsp;DESCRIPTION
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                width: "30%",
                color: "gray",
              }}
            >
              QTY
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                width: "30%",
                color: "gray",
              }}
            >
              AMOUNT&nbsp;&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ backgroundColor: "#F5F7FA", pt: "10px", height: "2.5rem" }}
            >
              <TableCell
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#4E5A6B",
                }}
              >
                &nbsp;&nbsp;{row.desc}
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "0.875rem", color: "#4E5A6B" }}
              >
                {row.qty}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: "0.875rem",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {`$ ${row.amount.toFixed(2)}`}&nbsp;&nbsp;
              </TableCell>
            </TableRow>
          ))}
          <TableRow></TableRow>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{ height: "6rem", backgroundColor: "#F5F7FA" }}
            ></TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table
        sx={{
          minWidth: 400,
          backgroundColor: "#F5F7FA",
          "& .MuiTableCell-root": { padding: "10px" },
          fontFamily: "Nunito Sans",
          borderRadius: "4px",
          borderBottom: "none",
        }}
        aria-label="quotation summary"
      >
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "0.875rem",
                fontFamily: "Nunito Sans",
                color: "black",
                borderBottom: "none",
              }}
            >
              Quote Amount
            </TableCell>
            <TableCell />
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                fontSize: "0.875rem",
                fontFamily: "Nunito Sans",
                color: "black",
                borderBottom: "none",
              }}
            >
              {/* {`$ ${totalAmount.toFixed(2)}`} */}
              {`$ ${QuoteAmount}.00`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

QuotationSummary.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  totalQty: PropTypes.number.isRequired,
};