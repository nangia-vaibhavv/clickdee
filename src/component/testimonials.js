import React from "react";
import './index.css'
class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            // <div className="aboveFooter">
            <div className="aboveFooterHeader">
                Our Customers Say
                <h1 className="aboveFooterSubheader">What they're saying?</h1>
                <h5 className="aboveFooterSubHeaderDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis tellus eu turpis sit eget mattis urna</h5>
                <div className="testimonialCards">
                    <div className="card">
                        <p className="rating">⭐⭐⭐⭐</p>
                        <h4 className="ratingSubject">assd</h4>
                        <h6 className="ratingDesc">sada</h6>
                    </div>
                    <div className="card">
                        <p className="rating">⭐⭐⭐⭐</p>
                        <h4 className="ratingSubject">assd</h4>
                        <h6 className="ratingDesc">sada</h6>
                    </div>
                    <div className="card">
                        <p className="rating">⭐⭐⭐⭐⭐</p>
                        <h4 className="ratingSubject">assd</h4>
                        <h6 className="ratingDesc">sada</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;