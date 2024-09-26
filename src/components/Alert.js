import React from "react";

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong></strong>{props.alert.msg}
    </div>
  );
}

export default Alert;
