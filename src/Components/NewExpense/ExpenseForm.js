import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState(''); //So that the value would be stored even after re evluation of the component.
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',           //Making one state by using objects
    //     enteredDate:'',
    // });
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value); //For getting input value
        // setUserInput({
        //     ...userInput,               //Copies all the key value pairs and then added into this object. If we don't write this line, then the updated object would e of 1 key-value pair i.e. both enteredAmount and enteredDate data would get lost.
        //     enteredTitle:event.target.value, //enteredTitle value would get replaced by new value
        // });
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value); //Also, event.target.value returns value as string
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });
    };
const submitHandler=(event)=>{
    event.preventDefault();  //To avoid refreshing of page while clicking the button

    const expenseData={      //Storing the values in an object
        title:enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData); //Passing the expenseData to the onSaveExpenseData function present in NewExpense component.
    setEnteredTitle('');    //To clear the i/p fields after clicking the submit button.
    setEnteredAmount('');
    setEnteredDate('');
};

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;