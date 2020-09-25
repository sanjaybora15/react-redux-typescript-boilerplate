import React from 'react';
import "./styles.scss";

export default function Footer() {
    return (
        <footer className="footer-section pt-5">
          <div className="footer-bottom row mt-4 pb-2 text-center">
                    <div className="col-md-12">
                        <p className="text-light" style={{fontSize: "13px"}}>
                            Copyright &copy;&nbsp;
                            {new Date().getFullYear()} &nbsp;Your website.
                            All Rights Reserved
                        </p>
                    </div>
                </div>
        </footer>
    );
}
