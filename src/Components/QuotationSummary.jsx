import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const data = [
  { desc: 'Total Amount', qty: 3, amount: 3600.00 },
  { desc: 'Total Discount', qty: '10%', amount: -100.00 },
  { desc: 'Total Refundable', qty: '0%', amount: 0 },
  { desc: 'Total Tax', qty: '18%', amount: 648.00 },
];

const totalAmount = 4148.00;

export default function QuotationSummary() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400, p: 1, ml: -2,width:'100%',height:'65vh',msScrollWidth: 'none', scrollbarWidth: 'none',boxShadow:'none' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', p: 0.5, fontSize: '1rem' }}>
        Quotation Summary
      </Typography>
      <Table sx={{ minWidth: 350, backgroundColor: '#F5F7FA', '& .MuiTableCell-root': { padding: '4px',width:'10rem' } }} aria-label="quotation summary">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem',width:'20%' }}>Description</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '0.875rem',width:'30%' }}>Qty</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '0.875rem',width:'30%' }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} sx={{ backgroundColor: '#F5F7FA',pt:'10px',height:'2.5rem' }}>
              <TableCell sx={{ fontSize: '0.875rem' }}>{row.desc}</TableCell>
              <TableCell align="center" sx={{ fontSize: '0.875rem' }}>{row.qty}</TableCell>
              <TableCell align="right" sx={{ fontSize: '0.875rem' }}>{`$ ${row.amount.toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ height: '9rem',backgroundColor:'white'}}></TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table sx={{ minWidth: 400, backgroundColor: '#F5F7FA', '& .MuiTableCell-root': { padding: '10px' } }} aria-label="quotation summary">
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Quote Amount</TableCell>
            <TableCell />
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
              {`$ ${totalAmount.toFixed(2)}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
