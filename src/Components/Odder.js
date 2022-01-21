import React, { useEffect, useState } from "react";
import "./Odder.css";
import OdderItem from "./OdderItem";
const Odder = () => {
  const [allOdder, setAllOdder] = useState([]);
  const odderApi = "https://my-json-server.typicode.com/Ved-X/assignment/orders";
  useEffect(() => {
    fetch(odderApi)
      .then((response) => response.json())
      .then((odder) => setAllOdder(odder));
  }, []);
  const convertDateSort = allOdder.sort((a, b) => (a.date > b.date ? 1 : -1));
//   odder filter by delevary status
  const [filter, setFilter] = useState([])
  const hendleorderFilter = (e) =>{
         const filterItem = allOdder.filter(item => item.status == e.target.value);
         setFilter(filterItem)
        
  }
//   odder filter by search customer name
  const hendleSearchCustomerName = (e) =>{
      const getValue = e.target.value;
      const nameFilter = allOdder.filter(item => item.customer.slice(0, getValue.length) == e.target.value);
      setFilter(nameFilter);
  }
  return (
    <div className="table_container">
      <h3>All Odders {allOdder.length}</h3>
      <div className="odder_filter">
        <input onChange={hendleSearchCustomerName} type="text" placeholder="Search" />
        <select onChange={hendleorderFilter} name="order" id="">
          <option selected value="filter">
            Filter
          </option>
          <option value="Completed">Completed</option>
          <option value="Delivered">Delivered</option>
          <option value="Prepared">Prepared</option>
        </select>
      </div>
      <table className="odder_table">
        <tr>
          <th>ODDER ID</th>
          <th>CUSTOMER</th>
          <th>ADDRESS</th>
          <th>PRODUCT</th>
          <th>Date Odder</th>
          <th>STATUS</th>
        </tr>

        { filter.length? filter.map((odder) => (
          <OdderItem item={odder}></OdderItem>
        )): convertDateSort.map((odder => <OdderItem item={odder}></OdderItem>))}
      </table>
    </div>
  );
};

export default Odder;
