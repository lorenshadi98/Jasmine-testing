describe('Setup and teardown of payments system', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  });
  it('should submit payment info correctly', function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('10');
    expect(allPayments['payment1'].tipPercent).toEqual(10);
  });
  it('should create current payment object for positive inputs', function () {
    billAmtInput.value = 125;
    tipAmtInput.value = 25;

    let newPayment = {
      billAmt: '125',
      tipAmt: '25',
      tipPercent: 20
    };
    expect(createCurPayment()).toEqual(newPayment);
  });
  it('should not create currPayment Object with empty inputs', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    expect(createCurPayment()).toEqual(undefined);
  });
  it('should not create currPayment Object with negative inputs', function () {
    billAmtInput.value = '-100';
    tipAmtInput.value = '';
    expect(createCurPayment()).toEqual(undefined);
  });
  it('should create a table row for valid currPayment object', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let tdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(tdList.length).toEqual(3);
    expect(tdList[0].innerText).toEqual('$100');
    expect(tdList[1].innerText).toEqual('$10');
    expect(tdList[2].innerText).toEqual('10%');
  });
  it('should append a remove button to specified tr', function () {
    let newTr = document.createElement('tr');
    appendPaymentDeleteBtn(newTr);

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
