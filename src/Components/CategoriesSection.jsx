import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function CategoriesSection() {

  const [categories, setCategories] = useState([])

  const getData = async () => {
    await axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }
  useEffect(() => {
    getData()
  }, [])

  return (

    <div className="container">
      <div className="my-5 text-center">
        <h1>CATEGORIES</h1>
        <p>Explore our extensive range of products across various categories, including fashion, electronics, home appliances, beauty, lifestyle, and much more. Discover the latest fashion trends, high-quality electronics, and lifestyle essentials all in one place. </p>
        <marquee behavior="scroll" direction="right" scrollamount="12">SALE    SALE    SALE</marquee>
      </div>
      <div className="row">
        {/* {console.log(categories)} */}
        {/* {categories.length > 0 &&
          categories.map((val, key) =>
            <div className="col-md-3 py-5" key={key}>
              <Link className='text-decoration-none' to={`/product/category/${val}`}>
                <Card style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Body className='text-center'>
                    <Card.Title>..{val.toUpperCase().replace('-', ' ')}..</Card.Title>
                    <Button variant="danger">CHECK....OUT</Button>
                  </Card.Body>
                </Card>
              </Link>
            </div>)
        } */}heeloo 

      </div>
    </div>
  )
}
