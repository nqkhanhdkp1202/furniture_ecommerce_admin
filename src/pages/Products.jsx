import React, { useEffect, useState } from "react";
import { furnitureAPI } from "../api/furnitureAPI";
import DataTable from "../components/data-table/DataTable";
import HeadingTable from "../components/heading-table/HeadingTable";

const Products = () => {
  const [items, setItems] = useState([]);
  const [header, setHeader] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProductList = async () => {
      const params = {};
      let response = null;
      response = await furnitureAPI.getProductsList(params);
      setItems(response.data);
      if(items){
      setHeader(Object.keys(items[0].filter((name)=> name !== 'shortDesc' ||	name !== 'longDesc' ||	name !== 'IDSupplier' || name !== 	'IDUnit' || name !==	'IDCategory'	|| name !== 'IsDisabled')));
      }
    };
    getProductList();
    setIsLoading(false);
  }, []);
  console.log(items);

  return (
    <main className="main--container">
      <section className="main--content">
        <div className="panel">
          {/* Records Header Start */}
          <HeadingTable
            header="Ecommerce Products"
            subHeader="Manager Products"
            isSearchCategory
            placeholderSearch="Product Name"
            placeholderCategory="Product Category"
            isAdd
            btnAdd="Add Product" 
            totalItems={items.length}
          />
        </div>
        {/* Records Header End */}
        <DataTable dataHeader={header} dataList={items}/>
      </section>
    </main>
  );
};

export default Products;
