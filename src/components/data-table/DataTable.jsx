import React from "react";

const DataTable = ({ dataList, dataHeader }) => {
  return (
    <div className="panel">
      {/* Records List Start */}
      <div className="records--list" data-title="Product Listing">
        <table id="recordsListView" className="dataTable no-footer">
          <thead>
            <tr>
                {
                    dataHeader && dataHeader.map((e,i) => (
                        <th>{e}</th>
                    ))
                }
              <th className="not-sortable">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList}
          </tbody>
        </table>
      </div>
      {/* Records List End */}
    </div>
  );
};

export default DataTable;
