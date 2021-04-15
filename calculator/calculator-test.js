it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 400000,
    years: 30,
    rate: 3.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('1729.87');
});

it('should return a result with 2 decimal places', function () {
  let values = {
    amount: 430000,
    years: 25,
    rate: 2.6
  };
  expect(calculateMonthlyPayment(values)).not.toEqual('1950.7788');
});
