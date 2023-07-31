import React from 'react'
import "./HeaderSection.css"

export default function HeaderSection() {
  return (
    <>
      <div
        className="px-lg-5 tns-item tns-slide-cloned tns-slide-active tns-fadeIn"
        style={{ backgroundColor: "rgb(245, 177, 176)", left: "0%" }}
      >
        <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
          <img
            className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
            src="https://www.pngplay.com/wp-content/uploads/6/Clothes-Vector-PNG-HD-Quality.png"
            alt="Summer Collection"
          />
          <div
            className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
            style={{ maxWidth: "42rem", zIndex: 10 }}
          >
            <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
              <h3 className="h2 text-bold fw-light pb-1 from-start">
                Has just arrived!
              </h3>
              <h2 className="text-bold display-5 from-start delay-1">
                Huge Summer Collection
              </h2>
              <p className="fs-lg text-bold pb-3 from-start delay-2">
                Swimwear, Tops, Shorts, Sunglasses &amp; much more...
              </p>
              <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                <a className="btn btn-danger" href="/Product">
                  Shop Now
                  <i className="ci-arrow-right ms-2 me-n1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tns-nav"
        aria-label="Carousel Pagination"
        style={{ display: "none" }}
      >
        <button
          type="button"
          data-nav={0}
          aria-controls="tns2"
          style={{ display: "none" }}
          aria-label="Carousel Page 1 (Current Slide)"
          className="tns-nav-active"
        />
        <button
          type="button"
          data-nav={1}
          tabIndex={-1}
          aria-controls="tns2"
          style={{ display: "none" }}
          aria-label="Carousel Page 2"
        />
        <button
          type="button"
          data-nav={2}
          tabIndex={-1}
          aria-controls="tns2"
          style={{ display: "none" }}
          aria-label="Carousel Page 3"
        />
      </div>

    </>
  )
}
