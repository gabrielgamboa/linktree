import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input className="border-none h-9 outline-none px-2 rounded mb-3"
         {...props}
        />
    )
}