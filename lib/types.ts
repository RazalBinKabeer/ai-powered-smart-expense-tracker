export type Profile = {
    id: string
    email: string
    full_name: string | null
    avatar_url: string | null
    monthly_budget: number
    created_at: string
}

export type Expense = {
    id: string
    user_id: string
    title: string
    amount: number
    category: string
    date: string
    notes: string | null
    created_at: string
}

export type ExpenseCategory = 
  | 'Food & Dining'
  | 'Transportation'
  | 'Shopping'
  | 'Entertainment'
  | 'Health & Medical'
  | 'Bills & Utilities'
  | 'Education'
  | 'Travel'
  | 'Other' | 'Food & Dining'
  | 'Transportation'
  | 'Shopping'
  | 'Entertainment'
  | 'Health & Medical'
  | 'Bills & Utilities'
  | 'Education'
  | 'Travel'
  | 'Other'