import { FC } from "react";

type Props = {
    children: React.ReactNode;
}

export const Container:FC<Props> = ({ children }) => {
    return <div className="px-8">
        {children}
    </div>
}