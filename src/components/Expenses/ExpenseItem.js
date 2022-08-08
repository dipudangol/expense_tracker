import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
    const [title, setTitle]=useState(props.title);

    const clickHandler=()=>{
        setTitle("updated!");
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.price}
                </div>
                <button onClick={clickHandler}>click here</button>
            </div>
        </Card>
    )
}
export default ExpenseItems; 