import React from 'react'
import clsx from 'clsx'

export const Button = ({ variant, children, onClick, type, icon: Icon }) => {
    return (
        <>
            <button
                onClick={onClick}
                type={type}
                className={
                    clsx("px-[38px] py-[18px] gap-2  items-center",
                        { "bg-darkblue  text-white text-xl  font-bold flex rounded-2xl hover:bg-transparent hover:text-darkblue border hover:border-darkblue border-transparent duration-500": variant === "primary", "bg-yellow flex rounded-2xl text-darkblue text-xl font-bold hover:text-darkblue duration-500 ": variant === "outline", "bg-white   text-xl font-bold flex rounded-2xl border border-darkblue  text-darkblue duration-500 ": variant === "primary2", "bg-white rounded-2xl text-darkblue text-xl font-bold  ": variant === "outline1","bg-grey duration-500 text-darkblue text-xl font-bold flex rounded-2xl hover:bg-transparent hover:text-darkblue border hover:border-darkblue border-transparent":variant==="outline2" }
                    )}>
                <span>
                    {children}
                </span>
                {Icon ? Icon : ""}
            </button>
        </>
    )
}

