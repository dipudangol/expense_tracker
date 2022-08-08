import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItems from './ExpenseItem';

const Expenses = (props) => {
    return (
        <Card className="expenses">

            {
                props.data.map((eachData) => (
                    <ExpenseItems key={eachData.id} title={eachData.title} price={eachData.price} date={eachData.date}></ExpenseItems>
                ))
            }
        </Card>
    )
}

export default Expenses;