import React,{ useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/sidebar.components";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button";
import { BASE_URL } from "../../config";
import './product.styles.css';
import axios from 'axios';


const Product = () => {
const [data, setData] = useState([]);
useEffect(() => {
  // Fetch data from the API endpoint using Axios
  axios.get(`${BASE_URL}/walmart`)
  .then((response) => {
   //Assuming the data is in the 'data' property pf the response
   setData(response.data);// updating the state with received data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
}, []);
    return (
        <>
        <div className="web-page p-0">
          <div className="col-3 p-0">
            <Sidebar />
          </div>
        <div className="right-view">
        <div>
            <h3 className="text-center text-dark mt-5 text-lg">Our Products</h3>
            </div>
            <div className="flex justify-evenly">
              <div>
                <FormInput
                name="search"
                type="search"
                style={{
                  border: "1px solid red",
                  height:"30px",
                  textAlign:"left",
                  padding:"8px",
                }}
                placeholder="Search for card"
                required
                />
              </div>
              <div>
                <CustomButton
                style={{
                  height:"30px",
                  pading:"12px",
                  margin:"20px",
                  fontSize:"10px",
                  backgroundColor:"teal",
                }}
                >
                  Create a new product
                </CustomButton>
              </div>
              </div>
              <div id="tableDiv">
         <table className="table">
          <thead>
            <tr className="head">
              {/* <th scope="col">S/N</th> */}
                <th scope="col">FullName</th>
                <th scope="col">Goods</th>
                <th scope="col">Amount</th>
                <th scoope="col">Cards</th>
                <th scoope="col">Products</th>
            </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.fullName}</td>
                  <td>{item.yourGoods}</td>
                  <td>{item.amount}</td>
                  <td>{item.cards}</td>
                  <td>{item.product}</td>
                </tr>
              ))}
             
              
             
            </tbody>
         </table>
        </div>
        </div>
        </div>
        </>
    )
}

export default Product;