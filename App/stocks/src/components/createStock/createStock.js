import React,{useState} from "react";

import {toast, ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {useForm} from "react-hook-form";

import axios from "../axios";



function CreateStock(){

      const notify = (message) => toast(message);

      //const {register , handleSubmit, errors} = useForm();
        const {register, handleSubmit, errors} = useForm();

      function onSubmit(data){

        console.log(data);

        axios.post("/create", {

            pId : data.pId ,
            pName : data.pName ,
            qAvailable : data.qAvailable ,
            date : data.date ,
            status : data.status

         }, {

           headers: {

             'Content-Type': 'application/json'

           }

         }).then((res) => {

           console.log(res);

           notify("Stock created");

         })

         .catch((err) => {

           

           if(err){

             notify("Stock creation failed ");

             console.log(err.message);

           } 

         });

      }

    


    return(

        <div className="container w-25">

        <form action="" method="" onSubmit={handleSubmit(onSubmit)} >

            <label className="form-label"> product ID</label>

            <input className="form-control" type="text" name="pId" ref={register} required  />

            <label className="form-label"> product name</label>

            <input className="form-control" type="text" name="pName" ref={register} required />

            <label className="form-label"> Quantity available</label>

            <input className="form-control" type="text" name="qAvailable" ref={register} required />

            <label className="form-label"> Date</label>

            <input className="form-control" type="date" name="date" ref={register} required />

            <div class="input-group mb-3 mt-4">

                <label class="input-group-text" for="inputGroupSelect01">Status</label>

                <select class="form-select" id="inputGroupSelect01" name="status" ref={register} required>

                    <option name="status" value="Active">Active</option>

                    <option name="status" value="Inactive">Inactive</option>

                </select>

            </div>


            <input className="btn btn-primary mb-3" type="submit" />

        </form>

        <ToastContainer />

    </div>

    )

}



export default CreateStock;