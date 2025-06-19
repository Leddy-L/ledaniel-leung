interface CardSubtitleProps {
    children: any
}

const CardSubtitle = ({ children }: CardSubtitleProps) => {
    return <p className="italic text-zinc-500 text-sm -mt-4">{children}</p>
}

export default CardSubtitle
