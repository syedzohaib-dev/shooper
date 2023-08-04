import React from "react";

export default function CartItems({ data }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={data.thumbnail}
                        style={{
                            width: "100%",
                            height: "20vh",
                            objectFit: "contain",
                        }}
                        className="img-fluid rounded-start bg-dark"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="card-title">
                                {data.title.length > 20
                                    ? data.title.slice(0, 20) + "..."
                                    : data.title}
                            </h6>
                            <span className="badge bg-secondary">{data.price}</span>
                        </div>

                        <p className="card-text">
                            <small className="text-body-secondary">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}