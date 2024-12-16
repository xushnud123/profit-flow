export const transactionsInitialValue = [
  {
    transactionId: "TX12345",
    date: "2024-12-15",
    type: "Income",
    amount: 150.0,
    currency: "USD",
    paymentMethod: "Bank Transfer",
    description: "Freelance Project Payment",
    category: "Salary",
    counterparty: "John Doe",
    status: "Completed",
    referenceNumber: "REF20241215ABC123",
    userId: "U001",
  },
  {
    transactionId: "TX12346",
    date: "2024-12-16",
    type: "Expense",
    amount: 75.0,
    currency: "USD",
    paymentMethod: "Credit Card",
    description: "Office Supplies",
    category: "Office Expenses",
    counterparty: "Office Depot",
    status: "Completed",
    referenceNumber: "REF20241216XYZ456",
    userId: "U002",
  },
  {
    transactionId: "TX12347",
    date: "2024-12-17",
    type: "Income",
    amount: 200.0,
    currency: "EUR",
    paymentMethod: "Bank Transfer",
    description: "Consulting Fee",
    category: "Consulting",
    counterparty: "Tech Solutions Ltd.",
    status: "Completed",
    referenceNumber: "REF20241217LMN789",
    userId: "U003",
  },
  {
    transactionId: "TX12348",
    date: "2024-12-18",
    type: "Expense",
    amount: 50.0,
    currency: "EUR",
    paymentMethod: "Cash",
    description: "Lunch with Client",
    category: "Entertainment",
    counterparty: "Italian Bistro",
    status: "Completed",
    referenceNumber: "REF20241218DEF123",
    userId: "U001",
  },
  {
    transactionId: "TX12349",
    date: "2024-12-19",
    type: "Income",
    amount: 300.0,
    currency: "USD",
    paymentMethod: "Bank Transfer",
    description: "Bonus Payment",
    category: "Salary",
    counterparty: "ABC Corporation",
    status: "Pending",
    referenceNumber: "REF20241219GHI456",
    userId: "U004",
  },
  {
    transactionId: "TX12350",
    date: "2024-12-20",
    type: "Expense",
    amount: 120.0,
    currency: "USD",
    paymentMethod: "Debit Card",
    description: "Travel Expenses",
    category: "Travel",
    counterparty: "Airline Company",
    status: "Completed",
    referenceNumber: "REF20241220JKL789",
    userId: "U002",
  },
  {
    transactionId: "TX12351",
    date: "2024-12-21",
    type: "Income",
    amount: 500.0,
    currency: "UZS",
    paymentMethod: "Cash",
    description: "Local Sale",
    category: "Sales",
    counterparty: "Local Customer",
    status: "Completed",
    referenceNumber: "REF20241221NOP123",
    userId: "U001",
  },
  {
    transactionId: "TX12352",
    date: "2024-12-22",
    type: "Expense",
    amount: 20.0,
    currency: "USD",
    paymentMethod: "Credit Card",
    description: "Stationery Purchase",
    category: "Office Supplies",
    counterparty: "Stationery Store",
    status: "Completed",
    referenceNumber: "REF20241222QRS456",
    userId: "U003",
  },
  {
    transactionId: "TX12353",
    date: "2024-12-23",
    type: "Income",
    amount: 400.0,
    currency: "EUR",
    paymentMethod: "Bank Transfer",
    description: "Partnership Commission",
    category: "Commission",
    counterparty: "Global Partners",
    status: "Completed",
    referenceNumber: "REF20241223TUV789",
    userId: "U005",
  },
  {
    transactionId: "TX12354",
    date: "2024-12-24",
    type: "Expense",
    amount: 300.0,
    currency: "UZS",
    paymentMethod: "Cash",
    description: "Local Taxes",
    category: "Taxes",
    counterparty: "Tax Office",
    status: "Completed",
    referenceNumber: "REF20241224WXY123",
    userId: "U001",
  },
];

export const categoryData = [
  "Salary",
  "Office Expenses",
  "Consulting",
  "Entertainment",
  "Travel",
  "Sales",
  "Office Supplies",
  "Commission",
  "Taxes",
];

export const tableHeaders = [
  // "Transaction ID",
  "Date",
  "Type",
  "Amount",
  "Currency",
  // "Payment Method",
  // "Description",
  "Category",
  // "Counterparty",
  "Status",
  // "Reference Number",
  // "User ID",
];
export const statusOptions = [
  {
    label: "Completed",
    value: "Completed",
    bgColor: "#e4ffe0",
    textColor: "#047857",
  },
  {
    label: "Pending",
    value: "Pending",
    bgColor: "#FEF3C7",
    textColor: "#B45309",
  },
  {
    label: "Failed",
    value: "Failed",
    bgColor: "#FEE2E2",
    textColor: "#B91C1C",
  },
  {
    label: "Cancelled",
    value: "Cancelled",
    bgColor: "#E5E7EB",
    textColor: "#374151",
  },
];
