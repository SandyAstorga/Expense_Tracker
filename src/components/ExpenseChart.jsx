import { VictoryPie } from 'victory';
import { useGlobalState } from '../context/GlobalState';

const ExpenseChart = () => {
    const { transactions } = useGlobalState();

    const totalIncome = transactions.filter(transaction =>
        transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);
    const totalExpense = transactions.filter(transaction =>
        transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
    const totalExpensePer = Math.round((totalExpense / totalIncome) * 100);
    const totalIncomePer = 100 - totalExpensePer;
    
        return (
        <div className='w-2/3'>
            <VictoryPie               
                style={{ labels: { fill: "white", fontSize: 11, fontWeight: "bold" } }}
                colorScale={["gray", "white"]}
                
                animate={{
                    duration: 1000,
                    onLoad: { duration: 100 }
                }}
                data={[
                    { x: "Income", y: totalIncomePer },
                    { x: "Expense", y: totalExpensePer },
                ]}
                innerRadius={100}
                radius={({ datum }) => 5 + datum.y * 2}
            />
        </div>
    )
}

export default ExpenseChart
