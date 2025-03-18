import React, { useState, useEffect } from "react";
import supabase from "../supabase";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // Fetch transactions on load
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const { data, error } = await supabase.from("transactions").select("*");
    if (data) {
      setTransactions(data);
    } else {
      console.error(error);
    }
  };

  // Add new transaction
  const addTransaction = async () => {
    if (!name || !amount) return;
    const newTransaction = {
      name,
      amount: parseFloat(amount),
      type: parseFloat(amount) > 0 ? "Income" : "Expense",
    };

    const { data, error } = await supabase
      .from("transactions")
      .insert([newTransaction]);
    if (data) {
      fetchTransactions();
      setName("");
      setAmount("");
    } else {
      console.error(error);
    }
  };

  // Delete transaction
  const deleteTransaction = async (id) => {
    const { error } = await supabase.from("transactions").delete().eq("id", id);
    if (!error) {
      fetchTransactions();
    } else {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {/* Main Layout */}
      <div className="layout">
        <main className="main-content">
          <h2>Total Transactions</h2>

          {/* Add Transaction */}
          <div className="form-container">
            <input
              type="text"
              placeholder="Transaction Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount (negative for expenses)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={addTransaction}>+ Add Transaction</button>
          </div>

          {/* Transaction History */}
          <div className="transaction-history">
            <h3>Transaction History</h3>
            <ul>
              {transactions.map((t) => (
                <li key={t.id} className="transaction-item">
                  <p>{t.name} – ₹{t.amount}</p>
                  <button onClick={() => deleteTransaction(t.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
