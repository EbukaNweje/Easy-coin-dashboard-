import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Transaction.css";
import toast from "react-hot-toast";

const Transaction = () => {
  const userId = useSelector((state) => state.toptiertrade.user); 
  console.log(userId);
  
  const [currentTab, setCurrentTab] = useState("Deposits");
  const [transactions, setTransactions] = useState({
    Deposits: [],
    Withdrawals: [],
    Others: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!userId) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `https://toptiertrade-back-end-new.vercel.app/api/getalltransactions/${userId}`
        );
        console.log(response);
        toast.success(response?.data.message || 'success fetching your transaction history')
        const data = {
          Deposits: transactions.deposits || [],
          Withdrawals: transactions.withdrawals || [],
          Others: [...(transactions.interests || []), ...(transactions.investments || [])],
        };

        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [userId]);

  const tableData = transactions[currentTab]
    ?.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const totalEntries = transactions[currentTab]?.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  ).length;

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="Transaction">
      <h3>Transactions on your account</h3>
      <div className="tranWrap">
        <div className="tranHead">
          {["Deposits", "Withdrawals", "Others"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setCurrentTab(tab);
                setCurrentPage(1);
                setSearchQuery("");
              }}
              className={currentTab === tab ? "active" : ""}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tableControls">
          <label>
            Show
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
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

        {loading ? (
          <p>Loading transactions...</p>
        ) : (
          <table ref={tableRef}>
            <thead>
              <tr>
                {currentTab === "Deposits" && (
                  <>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                    <th>Date Created</th>
                  </>
                )}
                {currentTab === "Withdrawals" && (
                  <>
                    <th>Amount Requested</th>
                    <th>Charges</th>
                    <th>Receiving Mode</th>
                    <th>Status</th>
                    <th>Date Created</th>
                  </>
                )}
                {currentTab === "Others" && (
                  <>
                    <th>Amount</th>
                    <th>Plan</th>
                    <th>Type</th>
                    <th>Date Created</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((item, index) => (
                  <tr key={index}>
                    {currentTab === "Deposits" && (
                      <>
                        <td>{item.amount}</td>
                        <td>{item.paymentMode}</td>
                        <td>{item.status}</td>
                        <td>{item.dateCreated}</td>
                      </>
                    )}
                    {currentTab === "Withdrawals" && (
                      <>
                        <td>{item.amountRequested}</td>
                        <td>{item.charges}</td>
                        <td>{item.receivingMode}</td>
                        <td>{item.status}</td>
                        <td>{item.dateCreated}</td>
                      </>
                    )}
                    {currentTab === "Others" && (
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
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No entries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

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
