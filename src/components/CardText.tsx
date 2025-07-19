interface CardTextProps {
    children: any
}

const CardText = ({ children }: CardTextProps) => {
    return <div className="text-zinc-300">{children}</div>
}

export default CardText
