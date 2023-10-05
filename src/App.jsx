import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
          <div className="container mx-auto w-3/5">
              <div className=" flex bg-zinc-800 p-10 rounded-lg gap-x-10 ">
                  <div>
                      <Header/>
                      <IncomeExpenses/>
                      <Balance/>
                      <TransactionForm/>
                  </div>
                  <div className="flex flex-col">
                    <div className=" flex justify-center items-center">
                      <ExpenseChart />
                    </div>
                      <TransactionList/>
                  </div>
              </div>
          </div>
      </div>
    </GlobalProvider>
  )
}

export default App
