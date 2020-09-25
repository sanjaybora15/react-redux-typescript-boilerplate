import * as React from "react";
import "./styles.scss";

export interface IProps {
    title?: string | any;
    onSubmit?: () => void;
    active?: boolean;
    cancellable?: boolean;
    submitTitle?: string;
    cancelTitle?: string;
    onClose?: () => void;
    error?: string;
    large?: boolean;
    small?: boolean;
    xLarge?: boolean;
    bodyStyle?: object;
    disableSubmit?: boolean;
}

export default function Modal(props: any | IProps) {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit();
        }
    };

    return(
        <div className={"modal"} role="dialog" style={{display: props.active ? "block": "none"}}>
            <div
                className={`modal-dialog ${props.large ? "modal-lg" : ""} ${props.small ? "modal-sm" : ""} ${props.xLarge ? "modal-x-lg" : ""}`} role="document">
                <div className="modal-content">
                    {props.title &&
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        {props.cancellable &&
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        }
                    </div>
                    }
                    <div className="modal-body" style={props.bodyStyle}>
                        {props.children}
                    </div>
                    {(props.onSubmit || props.cancellable) &&
                    <div className="modal-footer">
                        {props.cancellable &&
                        <button
                            type="button"
                            className="close-btn"
                            data-dismiss="modal"
                            onClick={handleClose}>
                            {props.cancelTitle || "Close"}
                        </button>
                        }
                        {props.onSubmit &&
                        <button
                            type="button"
                            className="submit-btn-modal"
                            disabled={props.disableSubmit}
                            onClick={handleSubmit}>
                            {props.submitTitle || "Submit"}
                        </button>
                        }
                        <div>
                            {props.error &&
                            <div className="alert alert-danger" role="alert">
                                <strong>Error!</strong> {props.error}
                            </div>
                            }
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
