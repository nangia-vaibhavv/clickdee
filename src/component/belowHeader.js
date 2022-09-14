import React from "react";
import './index.css'
import { Link } from 'react-router-dom'

class BelowHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    proceedToForm(){

    }

    render() {
        return (
            <div className="banner">
               <h1 className="bannerHeading"> NEW MEDICARE BENEFITS UPDATE</h1>
               <p className="bannerSubHeading">Americans Ages 65+ In Rajasthan Have
                10 days to claim additional benefits & get up to $240 monthly in OTC benefits</p>
                <p className="bannerSubHeadingTwo">Thanks to a new Medicare Advantage package, Americans age 65+ could get $148.50* monthly
                 added to their social security check with No-Cost Vision & Dental Benefits.</p>
                <Link to ="/form"><button className="isQualify">See If You Qualify</button></Link> 
            </div>
        );
    }
}

export default BelowHeader;