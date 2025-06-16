import React from 'react';

function ListGroup({ name }) {
  return (
    <ul className="list-group">
      <li className="list-group-item">{name}</li>
    </ul>
  );
}

export default ListGroup;