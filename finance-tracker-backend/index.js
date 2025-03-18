const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON body

// Sample route to test
app.get('/', (req, res) => {
    res.send('Finance Tracker API Running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Dummy transactions data
let transactions = [
    { id: 1, text: "Salary", amount: 5000 },
    { id: 2, text: "Groceries", amount: -1500 },
    { id: 3, text: "Electricity Bill", amount: -500 },
  ];
  
  // GET all transactions
  app.get('/api/transactions', (req, res) => {
    res.json(transactions);
  });
  // POST to add a new transaction
app.post('/api/transactions', (req, res) => {
    const { text, amount } = req.body;
    const newTransaction = {
      id: transactions.length + 1,
      text,
      amount: Number(amount)
    };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
  });
  
// DELETE transaction by ID
app.delete('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    console.log(`DELETE request received for ID: ${id}`); // ✅ ADD THIS

    const index = transactions.findIndex(txn => txn.id === parseInt(id));

    if (index !== -1) {
      transactions.splice(index, 1); // Remove item
      res.json({ message: 'Transaction deleted' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
});

  
