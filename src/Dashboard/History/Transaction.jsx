import React, { useState, useRef } from 'react';
import './Transaction.css';

const Transaction = () => {
  const [currentTab, setCurrentTab] = useState('Deposits');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const tableRef = useRef(null);

  const data = {
    Deposits: [
      { amount: 100, paymentMode: 'Bank Transfer', status: 'Completed', dateCreated: '2024-01-01' },
      { amount: 200, paymentMode: 'Card', status: 'Pending', dateCreated: '2024-01-02' },
    ],
    Withdrawals: [
      { amountRequested: 150, charges: 5, receivingMode: 'Bank Transfer', status: 'Completed', dateCreated: '2024-01-01' },
      { amountRequested: 250, charges: 10, receivingMode: 'Card', status: 'Pending', dateCreated: '2024-01-02' },
    ],
    Others: [
      { amount: 50, plan: 'Investment', type: 'Auto-deposit', dateCreated: '2024-01-01' },
      { amount: 75, plan: 'Savings', type: 'Manual deposit', dateCreated: '2024-01-02' },
    ],
  };

  const tableData = data[currentTab]
    .filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const totalEntries = data[currentTab].filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  ).length;

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1);
    setSearchQuery('');
  };

  const handleScroll = (direction) => {
    if (direction === 'down' && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else if (direction === 'up' && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="Transaction">
      <h3>Transactions on your account</h3>
      <div className="tranWrap">
        <div className="tranHead">
          {['Deposits', 'Withdrawals', 'Others'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={currentTab === tab ? 'active' : ''}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tableControls">
          <label>
            Show
            <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            entries
          </label>

          <label>
            <span>Search:</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>

        <table ref={tableRef}>
          <thead>
            <tr>
              {currentTab === 'Deposits' && (
                <>
                  <th>
                    Amount
                    <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Payment Mode
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Status
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Date Created
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                </>
              )}
              {currentTab === 'Withdrawals' && (
                <>
                  <th>
                    Amount Requested
                    <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Charges
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Receiving Mode
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Status
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Date Created
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                </>
              )}
              {currentTab === 'Others' && (
                <>
                  <th>
                    Amount
                    <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Plan/Narration
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Type
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                  <th>Date Created
                  <div className="scroll-icons">
                      <span onClick={() => handleScroll('up')}>&uarr;</span>
                      <span onClick={() => handleScroll('down')}>&darr;</span>
                    </div>
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((item, index) => (
                <tr key={index}>
                  {currentTab === 'Deposits' && (
                    <>
                      <td>{item.amount}</td>
                      <td>{item.paymentMode}</td>
                      <td>{item.status}</td>
                      <td>{item.dateCreated}</td>
                    </>
                  )}
                  {currentTab === 'Withdrawals' && (
                    <>
                      <td>{item.amountRequested}</td>
                      <td>{item.charges}</td>
                      <td>{item.receivingMode}</td>
                      <td>{item.status}</td>
                      <td>{item.dateCreated}</td>
                    </>
                  )}
                  {currentTab === 'Others' && (
                    <>
                      <td>{item.amount}</td>
                      <td>{item.plan}</td>
                      <td>{item.type}</td>
                      <td>{item.dateCreated}</td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  No entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">
        <span>
            Showing {currentPage} to {totalPages} of {entriesPerPage} entries
          </span>

            <div className="pagButtons">
            <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
