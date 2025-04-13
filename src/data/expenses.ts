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
    title: 'Migros Alışverişi',
    amount: 250,
    date: '2024-04-01',
    category: 'Market',
  },
  {
    id: '2',
    title: 'Netflix Üyeliği',
    amount: 63,
    date: '2024-04-03',
    category: 'Eğlence',
  },
  {
    id: '3',
    title: 'Elektrik Faturasi',
    amount: 190,
    date: '2024-04-05',
    category: 'Fatura',
  },
  {
    id: '4',
    title: 'Dolmuş Ücreti',
    amount: 30,
    date: '2024-04-06',
    category: 'Ulaşim',
  },
  {
    id: '5',
    title: 'Kitap Alimi',
    amount: 120,
    date: '2024-04-08',
    category: 'Kültür',
  },
  {
    id: '6',
    title: 'Kahve - Starbucks',
    amount: 58,
    date: '2024-04-09',
    category: 'Eğlence',
  },
  {
    id: '7',
    title: 'İnternet Faturasi',
    amount: 145,
    date: '2024-04-10',
    category: 'Fatura',
  },
  {
    id: '8',
    title: 'Pazardan Sebze Meyve',
    amount: 95,
    date: '2024-04-11',
    category: 'Market',
  },
  {
    id: '9',
    title: 'Otobüs Karti Doldurma',
    amount: 75,
    date: '2024-04-12',
    category: 'Ulaşim',
  },
  {
    id: '10',
    title: 'Spotify Aylik Abonelik',
    amount: 39.99,
    date: '2024-04-13',
    category: 'Eğlence',
  },
];

