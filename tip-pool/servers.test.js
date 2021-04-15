describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function () {
    allServers = {};
    updateServerTable();
  });
});

describe('Servers table test', function () {
  it('should add a new table row to the server table body', function () {
    let newTr = document.createElement('tr');
    newTr.setAttribute('id', 1);
    appendTd(newTr, 'emily');
    appendTd(newTr, '$' + 10.5);
    serverTbody.append(newTr);
    console.log(serverTbody.childElementCount);
    expect(serverTbody.childElementCount).toEqual(1);
  });

  afterEach(function () {
    allServers = {};
    updateServerTable();
  });
});
