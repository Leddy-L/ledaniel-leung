interface CardTitleProps {
    children: any
}

const CardTitle = ({ children }: CardTitleProps) => {
    return (
        <h1 className="font-bold text-zinc-200 text-lg sm:text-1xl md:text-2xl">
            {children}
        </h1>
    )
}

export default CardTitle
