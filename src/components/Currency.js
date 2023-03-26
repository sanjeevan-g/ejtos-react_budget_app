import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency() {
    const {dispatch } = useContext(AppContext);

    const updateCurrency = (value) => {
        dispatch( {
            type: "CHG_CURRENCY",
            payload: value
        })
    }

    return (
        <div className="alert alert-secondary">
            <select name="Location" id="Location"
                style={{
                    background: "#77E977",
                    border: 0,
                    color: "white",
                    outline: 0,
                    fontSize: "18px"
                }}
                onChange={ (event) => updateCurrency(event.target.value) }
            >
                <option value="$">Currency ($ Dollar)</option>
                <option value="£" selected>Currency (£ Pound)</option>
                <option value="€">Currency (€ Euro)</option>
                <option value="₹">Currency (₹ Ruppee)</option>
            </select>
        </div>

    )
}