/* eslint-disable react/prop-types */
import { useGlobalState } from "../context/GlobalState"

const TransactionItem = ({ transaction }) => {
    const {deleteTransaction } = useGlobalState();

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button className="bg-stone-800 text-white px-1 py-1 rounded-lg ml-3  hover:bg-zinc-950 " onClick={() => {
                    deleteTransaction(transaction.id)
                }}>
                    ❌
                </button>
            </div>
        </li>
    )
}

export default TransactionItem
