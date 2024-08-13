import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './App.css';

function App() {
  const pricingData = [
    { api: 'OpenAI', model: 'GPT-3.5', price: '$0.002' },
    { api: 'OpenAI', model: 'GPT-4', price: '$0.03' },
    { api: 'Together AI', model: 'Llama-2-70b', price: '$0.0008' },
    { api: 'Together AI', model: 'Llama-2-13b', price: '$0.0006' },
  ];

  return (
    <Box className="container-box">
      <Typography variant="h6" gutterBottom className="heading" style={{color: '#a5b4fc',fontWeight:'bold'}}>
        API Pricing
      </Typography>
      <Typography variant="body2" gutterBottom className="subheading">
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 300 }}>
          <TableHead>
            <TableRow >
              <TableCell className="table-head-cell" style={{color:'white'}}>API</TableCell>
              <TableCell className="table-head-cell" style={{color:'white'}}>Model</TableCell>
              <TableCell className="table-head-cell" style={{color:'white'}}>Price Per 1K Tokens</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pricingData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="table-body-cell" style={{color: 'white'}}>{row.api}</TableCell>
                <TableCell className="table-body-cell" style={{color: 'white'}}>{row.model}</TableCell>
                <TableCell className="table-body-cell" style={{color: 'white'}}>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" sx={{ mt: 2 }} className="subheading">
        <strong className="strong-text">Token Estimation:</strong> On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }} className="subheading">
        <strong className="strong-text">Billing:</strong> You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
      </Typography>
    </Box>
  );
}

export default App;
