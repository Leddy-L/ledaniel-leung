interface SubtitleProps {
    children: any
}

const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <p className="mt-2 text-md sm:text-lg md:text-2xl text-zinc-400">
            {children}
        </p>
    )
}

export default Subtitle
