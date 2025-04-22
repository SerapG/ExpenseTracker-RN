# 💸 ExpenseTracker-RN

A simple and functional React Native expense tracker app.  
Track your spending by category, view expense details, and manage your budget – all without using a backend.

---

## 🚀 Features

- 🏠 **Home Screen**:  
  View all expenses grouped by category.  
  Each item includes a title, amount, date, and category.

- ➕ **Add Expense Screen**:  
  Input title, amount, date, and select a category.  
  Submit to add the expense to the list.

- 🗂️ **Category Screen**:  
  View all existing categories.  
  Add new categories and navigate to category-specific expenses.

- 📄 **Expense Detail Screen**:  
  View the full detail of a selected expense.  
  Delete the expense if needed.

- 🎨 Custom UI Components:
  - AddButton
  - DeleteButton
  - BackToHomeButton
  - CategoryItem
  - ExpenseItem

- 🧠 Built using functional components and React Hooks (`useState`, `useEffect`)
- 📱 Responsive layout with `useWindowDimensions`
- 🌈 Theme folder with shared colors, spacing, and typography

---

## 🛠️ Technologies Used

- React Native (via Expo or CLI)
- TypeScript
- React Navigation
- Custom component structure
- Local state management (no backend)

---

## 🧪 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ExpenseTracker-RN.git

2. Install dependencies:
   ```bash
   yarn install

3. Start Metro Bundler:
   ```bash
   yarn start

4. Launch the Android emulator or connect your device:
   ```bash
   yarn android

✅ Make sure Android Studio is installed and at least one virtual device is configured.



📝 Notes
All state is handled locally – no external database is used.

Styling is centralized with a theme system.

All screens are built using clean and reusable logic.

Page titles are centered and styled.


🧑‍💻 Author

Made by Serap Gülgen 1.0.0