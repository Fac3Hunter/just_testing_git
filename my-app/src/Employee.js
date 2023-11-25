import React, { PureComponent } from "react";

function Employee(props) {
  const emu = "normalno";
  const on = "krutoy";
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.surname}</p>
      <p>{props.paycheck}</p>
    </div>
  );
}

export default Employee;
