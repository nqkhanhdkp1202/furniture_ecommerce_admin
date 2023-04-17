import React from 'react'

const RowTable = () => {
  return (                <tr>
    <td>
      <a href="#" className="btn-link">
        #{e.ID}
      </a>
    </td>
    <td>
      <a href="#" className="btn-link">
        <img
          src={e.Image}
          alt=""
        />
      </a>
    </td>
    <td>
      <a href="#" className="btn-link">
      {e.DisplayName}
      </a>
    </td>
    <td>
      <a href="#" className="btn-link">
        Baby Products
      </a>
    </td>
    <td>${e.Price}</td>
    <td>{e.Quantity}</td>
    <td>{e.DateAdd}</td>
    <td>
      <span className="label label-warning">Available</span>
    </td>
    <td>
      <div className="dropleft">
        <a href="#" className="btn-link" data-toggle="dropdown">
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">
            Edit
          </a>
        </div>
      </div>
    </td>
  </tr>
  )
}

export default RowTable