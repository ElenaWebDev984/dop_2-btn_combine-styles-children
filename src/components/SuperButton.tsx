
// type SuperButtonType = {
//     title: string
//     onClick: () => void
//     color: string
//     children?: React.ReactNode
// };

import {ButtonHTMLAttributes} from "react";

type SuperButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const SuperButton = (props: SuperButtonType) => {
    const {title, onClick, color, children, ...restProps} = props

    return (
        <button>{title}</button>
    );
};