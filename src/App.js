import React, { useState } from 'react';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <Select options={options} />
      <DatePicker selected={startDate} onChange={setStartDate} />
    </div>
  );
}

export default App;
