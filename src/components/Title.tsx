interface TitleProps {
    children: any
}

const Title = ({children} : TitleProps) => {
    return <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">{children}</h1>
}

export default Title;