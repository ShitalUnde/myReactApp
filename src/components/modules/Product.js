import React, { useState } from "react";
import { Link,createSearchParams,  Outlet, useNavigate } from "react-router-dom";


export default function Product() {
  let ProductsListData = [
    { id: 1, name: "LG" },
    { id: 2, name: "Sony" },
    { id: 3, name: "Boash" },
  ];

  const [ProductsList, setProductsList] = useState([...ProductsListData]);

  const navigate = useNavigate();

  const deleteById = (product,index) => {
    let data = [...ProductsList];
    data.splice(index,1)

    console.log(data)
    setProductsList([...data])
  }

  const navigateToDetailPage = (product,index) => {
    const queryParams = { name: product.name, id: product.id };

   //relative path
    navigate({
      pathname: `${product.id}`,
      search: `?${createSearchParams(queryParams).toString()}`,
    });

   // navigate(`${product.id}`);  //without params


    //absolute path
    // navigate({
    //   pathname: `/product/${product.id}`,
    //   search: `?${createSearchParams(queryParams).toString()}`,
    // });
  }

  const addNewProduct = () => {
    let obj = {
      id : ProductsList.length + 1,
      name : `abc ${ProductsList.length + 1}`
    };

    let data = [...ProductsList];
    data.push(obj)
    
    setProductsList([...data])
  }

  return (
    <>
    <div className="container my-3">
      <div className="">

      <div className="d-flex justify-content-between">
      <h2>Product List</h2>

      <button onClick={addNewProduct}  className="btn btn-primary">Add New </button>
      </div>
 

        { ProductsList.length > 0 &&<table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {ProductsList.map((el, index) => (
              <tr key={index}>
                <th onClick= {() => navigateToDetailPage(el,index )}  scope="row">{index + 1}</th>
                <td>{el.name}</td>
                <td>
                <button onClick= {() => deleteById(el)} className="btn btn-primary mx-2">Edit </button>

                <button onClick= {() => deleteById(el, index )} className="btn btn-danger">Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}

        {ProductsList.length <= 0 && <div className="m-4">
          No Data Available
        </div>}

        {/* {Products.map((el, index) => (
          <div key={el.id}>
          <p>{el.id} - {el.name}</p>
          </div>
        ))} */}

        <nav className="my-3">
          <Link to={"featured-product"} className="mx-2">
            Featured Product
          </Link>
          <Link to={"new-product"}> New Product</Link>
        </nav>
        <Outlet />
      </div>
    </div>
    </>
  );
}
