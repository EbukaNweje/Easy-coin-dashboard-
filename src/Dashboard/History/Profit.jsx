import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux"; 
import "./Transaction.css";
import axios from "axios";
import toast from "react-hot-toast";

const Profit = () => {
  const id = useSelector((state) => state.toptiertrade.user); 
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; 

      setLoading(true);
      try {
        const response = await axios.get(
          `https://toptiertrade-back-end-new.vercel.app/api/getallinvestmentplan/${id}`
        );
        toast.success(response?.data.message)
        setData(response?.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error('Error fetching data')
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  const filteredData = data.length > 0 
  ? data.filter((item) =>
      Object.values(item || {}).some((value) =>
        String(value || "").toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)
  : [];

  const totalEntries = data.length > 0 
  ? data.filter((item) =>
      Object.values(item || {}).some((value) =>
        String(value || "").toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length
  : 0;

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="Transaction">
      <h3>Your ROI history</h3>
      <div className="tranWrap">
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
          <p>Loading data...</p>
        ) : (
          <table ref={tableRef}>
            <thead>
              {data.length > 0 && (
                <tr>
                  {Object.keys(data[0]).map((header) => (
                    <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
                  ))}
                </tr>
              )}
            </thead>
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
                  <td colSpan="5" style={{ textAlign: "center" }}>No data available</td>
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

export default Profit;
