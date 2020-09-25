export interface Actions {
    actionName: string;
    body?: object;
    type?: string;
    url?: string;
    authType?: string;
    token?: string;
}
export interface DropDownOption {
    name: string;
    value: string;
}
export interface TextFieldInterface {
    label?: string;
    error?: string;
    value: string | number;
    disabled?: boolean;
    placeholder?: string;
    fieldName: string;
    onChange: (fieldName: string, value: string | number, valueType: string) => void;
    type: string;
    valueType: string;
}
export interface SelectFieldInterface {
    label?: string;
    error?: string;
    value: string | number;
    options: DropDownOption[];
    disabled?: boolean;
    fieldName: string;
    onChange: (fieldName: string, value: string | number) => void;
}
