import React from "react";

const InvoiceDetail = () => {
  return (
    <main className="main--container">
      {/* Page Header Start */}
      <section className="page--header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {/* Page Title Start */}
              <h2 className="page--title h5">Invoice</h2>
              {/* Page Title End */}
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <span>Extra Pages</span>
                </li>
                <li className="breadcrumb-item active">
                  <span>Invoice</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              {/* Summary Widget Start */}
              <div className="summary--widget">
                <div className="summary--item">
                  <p
                    className="summary--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={5}
                    data-height={38}
                    data-color="#009378"
                  >
                    2,9,7,9,11,9,7,5,7,7,9,11
                  </p>
                  <p className="summary--title">This Month</p>
                  <p className="summary--stats text-green">2,371,527</p>
                </div>
                <div className="summary--item">
                  <p
                    className="summary--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={5}
                    data-height={38}
                    data-color="#e16123"
                  >
                    2,3,7,7,9,11,9,7,9,11,9,7
                  </p>
                  <p className="summary--title">Last Month</p>
                  <p className="summary--stats text-orange">2,527,371</p>
                </div>
              </div>
              {/* Summary Widget End */}
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}
      {/* Main Content Start */}
      <section className="main--content">
        <div className="panel">
          {/* Invoice Start */}
          <div className="invoice">
            <div className="invoice--header">
              <div className="invoice--logo">
                <img src="./src/assets/img/invoice/logo.png" alt="" />
              </div>
              <div className="invoice--address">
                <h5 className="h5">Address</h5>
                <p>795 Park Ave, Suite 120</p>
                <p>San Francisco, CA 94107</p>
                <p>Phone: +(123) 456 1234</p>
              </div>
            </div>
            <div className="invoice--billing">
              <div className="invoice--address">
                <h3 className="h3">
                  <span>To:</span>
                </h3>
                <h5 className="h5">ABC Company</h5>
                <p>795 Park Ave, Suite 120</p>
                <p>San Francisco, CA 94107</p>
                <p>Phone: +(123) 654 7890</p>
              </div>
              <div className="invoice--info">
                <h5 className="h5">
                  <span>Invoice:</span> #9048392
                </h5>
                <p>
                  Invoice Date: <strong>25th Mar 2018</strong>
                </p>
                <p>
                  Due Date: <strong>28th Mar 2018</strong>
                </p>
              </div>
            </div>
            <div className="invoice--order">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#12345678</td>
                    <td>20 Inch Philips LCD Black Color Monitor</td>
                    <td>12</td>
                    <td>$75.00</td>
                    <td>$900.00</td>
                  </tr>
                  <tr>
                    <td>#12345677</td>
                    <td>22 Inch Philips LCD Black Color Monitor</td>
                    <td>5</td>
                    <td>$135.00</td>
                    <td>$675.00</td>
                  </tr>
                  <tr>
                    <td>#12345676</td>
                    <td>24 Inch Philips LCD Black Color Monitor</td>
                    <td>1</td>
                    <td>$175.00</td>
                    <td>$175.00</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <strong>Subtotal</strong>
                    </td>
                    <td>$1750.00</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <strong>Shipping</strong>
                    </td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <strong>VAT</strong>
                    </td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>$1800.00</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="invoice--footer">
              <div className="invoice--payment">
                <p>
                  <strong>Payment Method:</strong> Credit Card
                </p>
                <p>
                  <strong>Card Type:</strong> Mastercard
                </p>
                <p>
                  <strong>Number Verification:</strong> 598746325950
                </p>
              </div>
              <div className="invoice--actions">
                <a href="#" className="btn btn-rounded btn-outline-secondary">
                  Save PDF
                </a>
                <a href="#" className="btn btn-rounded btn-outline-secondary">
                  Print
                </a>
                <a href="#" className="btn btn-rounded btn-info">
                  Pay Now
                </a>
              </div>
            </div>
          </div>
          {/* Invoice End */}
        </div>
      </section>
      {/* Main Content End */}
      {/* Main Footer Start */}
      <footer className="main--footer main--footer-light">
        <p>
          Copyright © <a href="#">DAdmin</a>. All Rights Reserved.
        </p>
      </footer>
      {/* Main Footer End */}
    </main>
  );
};

export default InvoiceDetail;
