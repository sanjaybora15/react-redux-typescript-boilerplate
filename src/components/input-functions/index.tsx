import React from 'react';
import {SelectFieldInterface, TextFieldInterface} from "../../models";
import "./styles.scss";

export function TextField(props: TextFieldInterface) {
    return (
        <div className="form-group">
            {props.label && <label className="col-md-12 px-2 my-0 gray-clr-text">{props.label}</label>}
            <div className="col-md-12 px-2">
                <input
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder ? props.placeholder : ""}
                    className={`bg-transparent custom-input-box form-control form-control-line ${props.error && props.error.trim() !== "" ? "error-border" : null}`}
                    onChange={(e) => props.onChange(props.fieldName, e.target.value, props.valueType)}
                    disabled={props.disabled ? props.disabled : false}
                />
            </div>
            {props.error && props.error.trim() !== "" && <small className={"pr-2 float-right danger-clr-text"}>
                {props.error}
            </small>}
        </div>
    )
}

export function DropDownField(props: SelectFieldInterface) {
    return (
        <div className="form-group">
            {props.label && <label className="col-md-12 px-2 my-0 gray-clr-text">{props.label}</label>}
            <div className="col-md-12 px-2">
                <select
                    value={props.value !== null ? props.value : ""}
                    className={`custom-input-box bg-transparent form-control form-control-line ${props.error && props.error.trim() !== "" ? "error-border" : null}`}
                    onChange={(e) => props.onChange(props.fieldName, e.target.value)}
                    disabled={props.disabled ? props.disabled : false}
                >
                    {props.options.map((option, index: number) => {
                        return <option key={index} value={option.value}>{option.name}</option>
                    })}
                </select>
            </div>
            {props.error && props.error.trim() !== "" && <div className="pr-2 float-right danger-clr-text">
                {props.error}
            </div>}
        </div>
    );
}
