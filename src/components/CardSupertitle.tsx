interface CardSupertitleProps {
    children: any
}

const CardSupertitle = ({ children }: CardSupertitleProps) => {
    return <p className="italic text-zinc-400 -mt-4">{children}</p>
}

export default CardSupertitle
