
export const getBotResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  // Wallet and balance queries
  if (input.includes('balance') || input.includes('wallet') || input.includes('money')) {
    return "Your current wallet balance is $15,750. You have $4,500 in monthly income and $3,200 in monthly expenses. Your net savings this month is $1,300.";
  }
  
  // Spending advice
  if (input.includes('spend') || input.includes('buy') || input.includes('purchase') || input.includes('advice')) {
    return "Based on your spending patterns, I recommend following the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings. Before making any large purchase, consider if it aligns with your financial goals.";
  }
  
  // Scheduled payments
  if (input.includes('scheduled') || input.includes('payment') || input.includes('bills')) {
    return "You have $850 in scheduled payments this month including: Rent ($600), Utilities ($120), Insurance ($80), and Subscription services ($50). All payments are set to auto-pay.";
  }
  
  // Budget planning
  if (input.includes('budget') || input.includes('plan') || input.includes('save')) {
    return "I can help you create a personalized budget! Based on your income of $4,500, I recommend: Essential expenses (50% - $2,250), Discretionary spending (30% - $1,350), and Savings (20% - $900).";
  }
  
  // Investment advice
  if (input.includes('invest') || input.includes('investment') || input.includes('stocks')) {
    return "Given your current savings rate, you might consider diversifying with low-risk investments. I recommend starting with index funds or consulting with a financial advisor for personalized investment strategies.";
  }
  
  // Emergency fund
  if (input.includes('emergency') || input.includes('fund')) {
    return "You should aim for 3-6 months of expenses as an emergency fund. Based on your monthly expenses of $3,200, your target emergency fund should be between $9,600 and $19,200.";
  }
  
  // Customer service
  if (input.includes('help') || input.includes('support') || input.includes('contact')) {
    return "I'm here to help! For complex issues, you can reach our customer support at support@financebot.com or call 1-800-FINANCE. I can assist with wallet details, spending advice, budget planning, and general financial guidance.";
  }
  
  // Greetings
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return "Hello! I'm your personal finance assistant. I can help you track your spending, plan your budget, provide financial advice, and answer questions about your wallet. What would you like to know?";
  }
  
  // Default response
  return "I understand you're asking about your finances. I can help with wallet details, spending advice, budget planning, scheduled payments, and general financial guidance. Could you please be more specific about what you'd like to know?";
};
