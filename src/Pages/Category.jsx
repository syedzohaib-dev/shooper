import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';




export default function Category() {

  const { categoryName } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))
  }, [categoryName])

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-secondary">Welcome to our diverse and extensive E-commerce Website Category! Here, you'll discover an impressive array of products carefully curated to cater to all your needs and desires. Whether you're a tech enthusiast, a fashionista, a home decor aficionado, or simply seeking everyday essentials, our comprehensive category has something special for everyone.</p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          products.map((val, key) =>
            <div className="col" key={key}>
              <Link className='text-decoration-none' to={`/products/${val.id}`}>
                <div className="card shadow-sm h-100 text-center" style={{ backgroundColor: 'black', color: 'white' }}>
                  <img src={val.thumbnail} className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225} alt="product" />
                  <div className="card-body">
                    <h3>{val.title}</h3>
                    <p className="card-text">
                      {val.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-end">
                      <div className="btn-group">
                        <button type="button" className="btn btn-danger">
                          Buy Now
                        </button>

                      </div>
                      <big className="text-body-light">${val.price}..</big>
                    </div>
                  </div>
                </div>
              </Link>
            </div>)
        }

      </div>
    </div>
  )
}
