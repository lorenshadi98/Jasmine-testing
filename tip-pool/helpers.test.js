describe('Setup and teardown', function () {
  beforeEach(function () {
    billAmtInput.value = 125;
    tipAmtInput.value = 25;
    submitPaymentInfo();
  });
  it('should sum total tip amount for all payments', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(25);
    billAmtInput.value = 100;
    tipAmtInput.value = 30;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(55);
  });

  it('should sum total bill amount for all payments ', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(125);
    billAmtInput.value = 250;
    tipAmtInput.value = 60;
    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toEqual(375);
  });
  it('should sum total tip percent for all payments', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);
    billAmtInput.value = 100;
    tipAmtInput.value = 30;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipPercent')).toEqual(50);
  });
  it('should sum tip percentage of single tip', function () {
    expect(calculateTipPercent(100, 30)).toEqual(30);
    expect(calculateTipPercent(125, 60)).toEqual(48);
  });

  it('should append a newly created td element from given value to table row', function () {
    let testTr = document.createElement('tr');
    appendTd(testTr, 'testable row');
    expect(testTr.children.length).toEqual(1);
    expect(testTr.firstChild.innerHTML).toEqual('testable row');
  });

  // Append delete Button test here.
  it('should append a remove button to specified tr', function () {
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerText).toEqual('X');
  });
  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    paymentId = 0;
  });
});
