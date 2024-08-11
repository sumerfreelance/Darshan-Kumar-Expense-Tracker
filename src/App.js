import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addExpense = () => {
    if (isEditing) {
      setExpenses(
        expenses.map(expense =>
          expense.id === editId
            ? { ...expense, name, amount, date }
            : expense
        )
      );
      setIsEditing(false);  
      setEditId(null);
    } else {
      setExpenses([
        ...expenses,
        { id: Date.now(), name, amount, date }
      ]);
    }
    setName('');
    setAmount('');
    setDate('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find(expense => expense.id === id);
    setName(expenseToEdit.name);
    setAmount(expenseToEdit.amount);
    setDate(expenseToEdit.date);
    setIsEditing(true);
  

    setEditId(id);
  };

  return (
    
 
   <div className="container" >    
    <div className="App" >
         <h1 style={{textAlign:"center"}}>Expense Tracker</h1>
         <br />
      
      <div className='package'>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          class="form-control"
        />
        <br />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          class="form-control"
        />
        <br />
        <div className="cal" style={{display:"flex", justifyContent:"center"}}>
        
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        </div>
       
        <br /><br />
        <div className="btn" style={{display:"flex", justifyContent:"center"}}>
        <button onClick={addExpense} class="btn btn-outline-primary">
          {isEditing ? 'Update Expense' : 'Add Expense'}
        </button>
        </div>
      </div>
      <br />
      <div className="lis" style={{display:'flex', justifyContent:'center'}}>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.name}</span>
            <span>{expense.amount}</span>
            <span>{expense.date}</span>
            <button onClick={() => editExpense(expense.id)} class="btn btn-outline-success">Edit</button>
            <button onClick={() => deleteExpense(expense.id)} class="btn btn-outline-danger">Delete</button>
          </li>
          
        ))}

      </ul>
      </div>
    </div>
    </div>

  );
}

export default App;