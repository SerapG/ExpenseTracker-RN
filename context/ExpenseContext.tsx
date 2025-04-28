import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Expense } from '../src/data/expenses';

//Context için type tanimi
interface ExpenseContextType{
    expenses:Expense[];
    addExpense: (expense: Expense) => void;
    deleteExpense: (id:string) => void;
}

//Context olusturuluyor
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

//Provider bileseni
export const ExpenseProvider = ({children}: {children :ReactNode}) => {
    
    const[expenses,setExpenses] = useState<Expense[]>([]);

    const addExpense = (expense:Expense) => {
        setExpenses(prev =>[...prev,expense]);
    }

    const deleteExpense = (id:string) => {
        setExpenses(prev => prev.filter(exp =>exp.id !== id))
    }


    return(
        <ExpenseContext.Provider value={{expenses,addExpense,deleteExpense}}>
            {children}
        </ExpenseContext.Provider>
    );
};

//hook: Context'i kolayca kullanmak için
export const useExpense = () => {
    const context = useContext(ExpenseContext);
    if(!context) {
        throw new Error('useExpense must be used within an ExpenseProvider')
    }
    return context;
};