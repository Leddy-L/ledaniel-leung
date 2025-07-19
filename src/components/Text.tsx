interface TextProps {
    children: any
}

const Text = ({ children }: TextProps) => {
    return <div className="text-zinc-300">{children}</div>
}

export default Text
