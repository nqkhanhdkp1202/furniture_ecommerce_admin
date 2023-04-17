import React, { useEffect, useState } from "react";
import { furnitureAPI } from "../api/furnitureAPI";
import DataTable from "../components/data-table/DataTable";
import HeadingTable from "../components/heading-table/HeadingTable";

const Customer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getOrderList = async () => {
      const params = {};
      let response = null;
      response = await furnitureAPI.getCustomerList(params);
      setItems(response.data);
    };
    getOrderList();
    setIsLoading(false);
  }, []);

  console.log(items);

  return (
    <main className="main--container">
      {/* Page Header Start */}
      {/* Page Header End */}
      {/* Main Content Start */}
      <section className="main--content">
        <div className="panel">
          {/* Records Header Start */}
          <HeadingTable />
          {/* Records Header End */}
        </div>
        <DataTable dataList={items}/>
      </section>
      {/* Main Content End */}
    </main>
  );
};

export default Customer;