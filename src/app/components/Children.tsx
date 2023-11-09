import {ReactNode} from "react"

type Children = {
    children: ReactNode;
}

export const Children = ({children}:Children) => {
    return (
        <div className="bg-green-500 text-white w-1/3 mx-auto p-3">
            {children}
        </div>
    );
}