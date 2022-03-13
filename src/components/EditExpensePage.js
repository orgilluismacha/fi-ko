import React from "react";
import { useParams } from "react-router-dom";

const EditExpensePage = (props) =>{
  const params = useParams();
  console.log(params);
  return(
    <div>
      Editting {params.id}
    </div>
  )
};

export default EditExpensePage;