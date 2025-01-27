import React, { useState, useRef } from 'react';
import './Transaction.css';


const Profit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const tableRef = useRef(null);

  const data = [
    {  plan: 'Investment',  amount: 50, type: 'Auto-deposit', dateCreated: '2024-01-01' },
    { plan: 'Savings', amount: 75,  type: 'Manual deposit', dateCreated: '2024-01-02' },
  ];

  const filteredData = data
    .filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const totalEntries = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  ).length;

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleScroll = (direction) => {
    if (direction === 'down' && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else if (direction === 'up' && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderTableHeaders = () => {
    const headers = Object.keys(data[0] || {});
    return (
      <tr>
        {headers.map((header) => (
          <th key={header}>
            {header.charAt(0).toUpperCase() + header.slice(1)}
            <div className="scroll-icons">
              <span onClick={() => handleScroll('up')}>&uarr;</span>
              <span onClick={() => handleScroll('down')}>&darr;</span>
            </div>
          </th>
        ))}
      </tr>
    );
  };

  return (
    <div className="Transaction">
      <h3>Your ROI history</h3>
      <div className="tranWrap">
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
          <thead>{renderTableHeaders()}</thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                No data available in table
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

export default Profit;
