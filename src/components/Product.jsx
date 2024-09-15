import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {

    const markedPrice=props.product.price
    const discount_percent=props.product.discountPercentage 
    const discount=(markedPrice*discount_percent)/100
    const sellingPrice= (markedPrice-discount).toFixed(2)
  return (
    <div className="w-full bg-blue-300 rounded-xl p-2">
    <img src={props.product.thumbnail} className="h-48 w-full object-contain"alt=''></img>
    <h1 className="mt-2 font-bold text-2xl">{props.product.title}</h1>
    <h2 className="pl-2 line-through text-red-500 font-bold">Rs.{markedPrice}</h2>
    <h2 className="pl-2  text-black-500 font-bold">Rs.{sellingPrice}</h2>
    <Link to={"/products/" + props.product.id } className="bg-blue-700 py-2 px-4 w-full cursor-pointer rounded-xl text-white text-center " >View </Link>
    </div>



  )
}

export default Product;
