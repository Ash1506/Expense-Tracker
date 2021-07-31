import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate= new Date(2021,2,28);  //Date(yyyy,mm,dd) where month starts with 0. Since, expenseDate is returning as object, so we need to convert it into text. We can also use toDateString()
  // const expenseTitle= 'Car Insurance';
  // const expenseAmount = 294.67;
  // const [title,setTitle]=useState(props.title); //Returns an array of 2 elements. 1st one is current state value and 2nd one is function for updating that.

  // const clickHandler = () => {
  //     setTitle('Updated');
  //     console.log(title);
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
