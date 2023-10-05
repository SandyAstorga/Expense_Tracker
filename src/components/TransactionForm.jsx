import { useState } from "react"
import { useGlobalState } from "../context/GlobalState";

const TransactionForm = () => {
  const {addTransaction} = useGlobalState();
  const [ description, setDescription ] = useState('');
  const [ amount, setAmount ] = useState(0);
  
  const submit = (e) =>{
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })
    // console.log(description, amount)
    setAmount(0);
    setDescription('');
  }

  return (
    <div>
      <form onSubmit={submit}>
          <input onChange={(e) => setDescription(e.target.value)}
          type="text" 
          placeholder="Enter a Description"
          className="bg-zinc-600 text-white px-3 py-2 
          rounded-lg block mb-3 w-full "
          value={description}
          />

          <input onChange={(e) => setAmount(e.target.value)}
          type="number" 
          step="0.01" 
          placeholder="00.00"
          className="bg-zinc-600 text-white px-3 py-2 
          rounded-lg block mb-3 w-full"
          value={amount}
          />

          <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-3 w-full">
            Add Transaction
          </button>
      </form>
    </div>
  )
}

export default TransactionForm
