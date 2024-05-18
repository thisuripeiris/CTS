import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackCards = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Customer Feedback</h2>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"This product is amazing! It has greatly improved my daily routine."</p>
                            <footer className="blockquote-footer">John Doe</footer>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Excellent customer service and the quality is top-notch."</p>
                            <footer className="blockquote-footer">Jane Smith</footer>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Highly recommend! The performance exceeded my expectations."</p>
                            <footer className="blockquote-footer">Alice Brown</footer>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Great value for money. I'm very satisfied with the product."</p>
                            <footer className="blockquote-footer">Michael Johnson</footer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Amazing product quality and fast shipping!"</p>
                            <footer className="blockquote-footer">Emma Wilson</footer>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"User-friendly and very efficient."</p>
                            <footer className="blockquote-footer">Olivia Davis</footer>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Exceeded my expectations. Highly recommended."</p>
                            <footer className="blockquote-footer">Liam Martinez</footer>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Fantastic product and great customer support."</p>
                            <footer className="blockquote-footer">Sophia Garcia</footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCards;
