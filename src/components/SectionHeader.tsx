interface SectionHeaderProps {
    children: any
}

const SectionHeader = ({children} : SectionHeaderProps) => {
    return <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{children}</h1>
}

export default SectionHeader;