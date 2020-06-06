import React from 'react';

const ListEntry = props => (
  <li onClick={() => props.deleteTodo(props.index)}>
    {props.name}
  </li>
);

export default ListEntry;
