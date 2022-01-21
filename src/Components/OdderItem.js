import React from 'react';

const OdderItem = (props) => {
    const {order_id, customer, address, product_title, product_description, date, status} = props.item;
   
    return (
       <tr>
           <td>{order_id}</td>
           <td>{customer}</td>
           <td> <b> {address}</b><br/> {product_description} </td>
           <td>{product_title}</td>
           <td>{date}</td>
           <td id='status'>{status}</td>
       </tr>
    );
};

export default OdderItem;