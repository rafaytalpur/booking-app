import React, { useState } from 'react'
import { Component } from 'react'
import DatePicker from 'react-datepicker'
import logo from './logo.svg'
import Select from 'react-select'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const options = [
    { value: 1, label: '1'},{ value: 2, label: '2'},{ value: 3, label: '3'},{ value: 4, label: '4'},
    { value: 5, label: '5'},{ value: 6, label: '6'},{ value: 7, label: '7'},{ value: 8, label: '8'},{ value: 9, label: '9'}, { value: '9+', label: '9+'}
  ]

  const [selectedHours, setSelectedHours] = useState(0)

  var str = ""
  if (selectedDate != null){
    str = selectedDate.toString()
  }

  var strday = str.slice(0,3)

  var weekend = 0
  var priceperhr = 0
  var totalprice = 0

  if (strday == 'Sat' || strday == 'Sun'){
    weekend = 1
  } else{weekend = 0}

  if(weekend == 1){
    priceperhr = 150
  } else{priceperhr = 100}

  if (selectedHours.value == "9+"){
    totalprice = "Please contact us for further assistance."
  } else {totalprice = priceperhr * selectedHours.value}

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <h1 className = "App-title" >Booking Assistant</h1>

          
        
        <div className="sentence-container">Please select the date and time you'd like to book for. </div>


        <DatePicker
          selected = {selectedDate}
          onChange = {(date)=>setSelectedDate(date)}
          showTimeSelect
          dateFormat = 'MMMM d, yyyy h:mm aa'
          minDate = {new Date()}
        />

        <div className="sentence-container">Please enter how many hours you'd like to book for. </div>

        <Select 
        options = {options}
        onChange = {setSelectedHours}
        color='black'
        />

        <div className="sentence-container">Your total for the booking is: </div>          


        <div className="variable-container">{typeof(totalprice) == "string" ? totalprice : isNaN(totalprice) ? 0: "$" + totalprice.toString()}
</div>


      </header>
    </div>
  );
}

export default App;
