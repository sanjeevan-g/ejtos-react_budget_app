
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget, currency, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setButget = ( value ) => {

        if(value > 20000) {
            alert("The butget cannot exceed remaining funds £30");
            return;
        }

        if(value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return 
        }

        dispatch( {
            type: "SET_BUDGET",
            payload: value
        })

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                step="10"
                onChange = { (event) => {setButget(event.target.value)}}
                value={budget} >
            </input>
        </div>
    );
};
export default Budget;