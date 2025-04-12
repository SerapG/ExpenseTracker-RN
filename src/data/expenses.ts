export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: string;
};

export const dummyExpenses: Expense[] = [
  {
    id: '1',
    title: 'Market Alışverişi',
    amount: 150,
    date: '2025-04-12',
    category: 'Market',
  },
  {
    id: '2',
    title: 'Sinema Bileti',
    amount: 60,
    date: '2025-04-10',
    category: 'Eğlence',
  },
  {
    id: '3',
    title: 'Elektrik Faturası',
    amount: 200,
    date: '2025-04-08',
    category: 'Faturalar',
  },
];
