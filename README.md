# 💸 Personal Finance Visualizer

A responsive web application to **track personal finances**, **categorize expenses**, and **compare budgets vs actual spending** — all visualized beautifully with charts and a modern neon UI.

---

## 🚀 Features

### ✅ Stage 1: Basic Transaction Tracking
- Add, edit, and delete transactions
- Monthly expenses bar chart
- Transaction list view
- Basic form validation

### ✅ Stage 2: Categories
- Predefined categories (e.g. Food, Travel, Rent)
- Category-wise Pie Chart
- Summary cards (Total expenses, Recent transactions, Category breakdown)

### ✅ Stage 3: Budgeting & Insights
- Set monthly budget per category
- Budget vs Actual comparison chart
- Smart insights on overspending

---

## 🛠 Tech Stack

- **Frontend:** [Next.js 14+](https://nextjs.org/), [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **ORM:** [Mongoose](https://mongoosejs.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🧱 Folder Structure

app/
├─ api/
│ └─ budgets/comparison/route.js # API route for budget vs actual
├─ page.jsx # Root page (Dashboard)
└─ components/
├─ TransactionForm.jsx
├─ TransactionList.jsx
├─ BudgetForm.jsx
├─ SummaryCards.jsx
├─ CategoryPieChart.jsx
├─ MonthlyExpensesBarChart.jsx
├─ BudgetComparisonChart.jsx
└─ SpendingInsights.jsx

lib/
└─ db.js # MongoDB connection

models/
├─ transaction.js
└─ budget.js

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/aadilaliofficial/personalFinanceVisualizer
   cd personalFinanceVisualizer
Install dependencies

npm install
Set environment variables

Create a .env.local file:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
Run the development server

npm run dev
Visit the app

http://localhost:3000
📊 Demo Features
✅ Budget Comparison Chart (/api/budgets/comparison)

✅ Neon glassmorphism UI

✅ Realtime updates with SWR

✅ MongoDB Atlas cloud backend

✨ Roadmap Ideas
Add authentication (e.g. Clerk or NextAuth)

Export data to PDF/CSV

Monthly filters & date-range picker

AI-based spending predictions

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

🧑‍💻 Author
Aadil Ali
