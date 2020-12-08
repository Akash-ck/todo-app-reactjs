import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3>
                    Developed By <span>AKASH CK</span>
                    <br/>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    &nbsp;
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </h3>
            </div>
        );
    }
}
