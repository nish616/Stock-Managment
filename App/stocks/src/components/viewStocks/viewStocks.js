import React, { useEffect, useState } from "react";

import axios from "../axios";

import Stock from "./Stock";


function ViewStocks() {

  const [stocks, setStocks] = useState([]);

  const [clicked, setClicked] = useState(true);

  //const [searchText, setSearchText] = useState("");

  useEffect(() => {

    async function fetchData() {

      const request =  await axios.get("/stocks");

      console.log(request.data);

      localStorage.setItem("data", JSON.stringify(request.data));

      setStocks(request.data);

      return request;

    }

    fetchData().catch((err) => console.log(err));

  },[clicked]);


  async function deleteStock(pId) {

    //console.log(noteId);

    axios.delete("/stocks",{

      headers: {

        'Content-Type': 'application/json'

      },

      data : {

        pId : pId

      }

     }).then((res) => setClicked((prev) => {return !prev})).catch((err) => console.log(err));  

    }

    function handleSearch(e) {
      const {value} = e.target;
      //setSearchText(value);
      filterData(value);
    };

   
    function filterData(value){
      const data = JSON.parse(localStorage.getItem("data"));
      //console.log(data);
      const lowerCaseValue = value.toString().toLowerCase();
      //console.log("data",data);
      //console.log(value);
      if(lowerCaseValue === ""){
        setStocks(data);
      } else{

        const filteredData = data.filter(item => {
          return item.pId.toString() === lowerCaseValue.toString() || item.pName.toString().toLowerCase() === lowerCaseValue.toString();
        });
        setStocks(filteredData);

      }
      
    }



  return (

    <div>

      Search:<input className="-" type="text" name="pId" placeholder="Product ID or Product name" required onChange={handleSearch}  />

      {/* Status:<select class="" id="inputGroupSelect01" name="status" required>

        <option name="status" value="Active">Active</option>

        <option name="status" value="Inactive">Inactive</option>

      </select>

      Stock:<select class="" id="inputGroupSelect01" name="stock" required>

        <option name="status" value="Available">Available</option>

        <option name="status" value="Unavailable">Unavailable</option>

      </select> */}

      {stocks.map((item, index) => {

        return (

          <Stock

            key={index}

            pId={item.pId}

            pName={item.pName}

            qAvailable={item.qAvailable}

            date = {item.date}

            status = {item.status}

            onDelete={deleteStock}

          />

        );

      })}


    </div>

  );

}



export default ViewStocks;