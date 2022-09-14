import React from "react";
import './index.css'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="footer">
            <div> Solar Panel Quotes</div>
            <div> Copyright © 2021 | Eruptic Inc.</div>
            <div>  CALIFORNIA PRIVACY | PRIVACY POLICY | TERMS OF USE</div>
            </div>
        );
    }
}

export default Footer;