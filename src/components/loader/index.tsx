import React from "react";

export default function FullScreenLoader() {
    return (
        <div style={{
            zIndex: 99,
            position: "fixed",
            top: 0, width: "100%",
            height: "100%",
            background: "#f5f5f5"
        }}
             className={"text-center"}
        >
            <div style={{
                    position:"fixed",
                    top: "45vh",
                    left: "47vw",
                    color: "coral",
                    fontSize: "7px"
                }}>
                <span style={{color: "coral"}}
                      className="spinner-border"
                      role="status"
                />
            </div>
        </div>
    )
}
