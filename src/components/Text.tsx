interface TextProps {
    children: any
}

const Text = ({ children }: TextProps) => {
    return <p className="text-zinc-300">{children}</p>
}

export default Text
