static class SavingsAccount
{
    public static float InterestRate(decimal balance)
    {
      switch (balance)
      {
        case < 0.00m:
          return 3.213f;
        case < 1000.0m:
          return 0.5f;
        case >= 1000.0m and < 5000.0m:
          return 1.621f;
        default:
          return 2.475f;
      }
    }

    public static decimal Interest(decimal balance)
    {
      return balance * (decimal)(InterestRate(balance)) * 0.01m;
    }

    public static decimal AnnualBalanceUpdate(decimal balance)
    {
      return balance + Interest(balance);
    }

    public static int YearsBeforeDesiredBalance(decimal balance, decimal targetBalance)
    {
      int years = 0;
      while(balance < targetBalance)
      {
        years++;
        balance = AnnualBalanceUpdate(balance);
      }
      return years;
    }
}
