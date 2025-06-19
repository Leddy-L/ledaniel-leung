interface CardTextProps {
    children: any
}

const CardText = ({ children }: CardTextProps) => {
    return <p className="text-zinc-300">{children}</p>
}

export default CardText
