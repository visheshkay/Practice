import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './UploadProduct.css'
function UploadProduct() {


    let { register, handleSubmit, formState: { errors } } = useForm();
  
  let [err, setErr] = useState("");
function formSubmit(productObj){
    console.log(productObj)

  }
  return (

    <div className="custom-product-container mx-auto w-50 bg-light mt-5">
    <div className="custom-text-center">
        <h1 className="custom-mb-4 custom-text-primary">Upload Product</h1>
        <form className="custom-form-inline mx-auto w-50" onSubmit={handleSubmit(formSubmit)}>
            <div className="custom-form-group mb-4">
                <label htmlFor="productname" className="custom-form-label custom-text-primary">Product Name</label>
                <input
                    type="text"
                    className="custom-form-control"
                    id="productname"
                    placeholder="Enter product name"
                    {...register("productname", { required: true, minLength: 4 })}
                />
                {errors.productname?.type === "required" && (
                    <p className="custom-lead custom-text-danger">Product name is required</p>
                )}
                {errors.productname?.type === "minLength" && (
                    <p className="custom-lead custom-text-danger">Minimum length of 4 characters</p>
                )}
            </div>

            <div className="custom-form-group mb-4">
                <label htmlFor="productprice" className="custom-form-label custom-text-primary">Product Price</label>
                <input
                    type="number"
                    className="custom-form-control"
                    id="productprice"
                    placeholder="Enter product price"
                    {...register("productprice", { required: true, min: 0 })}
                />
                {errors.productprice?.type === "required" && (
                    <p className="custom-lead custom-text-danger">Product price is required</p>
                )}
                {errors.productprice?.type === "min" && (
                    <p className="custom-lead custom-text-danger">Minimum price is 0</p>
                )}
            </div>

            <div className="custom-form-group mb-4">
                <label htmlFor="productimage" className="custom-form-label custom-text-primary">Product Image</label>
                <input
                    type="file"
                    className="custom-form-control"
                    id="productimage"
                    accept="image/*"
                    {...register("productimage", { required: true })}
                />
                {errors.productimage?.type === "required" && (
                    <p className="custom-lead custom-text-danger">Product image is required</p>
                )}
            </div>

            <button type="submit" className="custom-btn mx-auto d-block">Upload </button>
        </form>
    </div>
</div>
  )
}

export default UploadProduct