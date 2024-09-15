import React from "react";
import { useParams } from "react-router-dom";

function DynamicPage(){
    const {id}=useParams()
    return(
        <h1 className="text-5xl text-center">this is dynamic page</h1>
    )
}
export default DynamicPage;