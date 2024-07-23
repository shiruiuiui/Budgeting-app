const transactionTypes = [
    "Food/Drink",
    "Utilities",
    "Wellness/Fitness",
    "Transportation",
    "Medical/Healthcare",
    "Household Supplues",
    "Investing",
    "Savings",
    "Gifts/Donations",
    "Entertainment",
    "Income",
]

export type transaction = {
    type: string;
    amount: string;
    date: Date;
  };
export {transactionTypes};