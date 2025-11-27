const Logo = ({ className = "" }) => {
    return (
        <div className={`flex flex-col items-start leading-none ${className}`}>
            <div className="flex items-center gap-1">
                <span className="text-3xl font-bold tracking-wider text-brand-orange">NEXORA</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
                <span className="text-xl font-bold tracking-[0.2em] text-white">LABS</span>
            </div>
        </div>
    )
}

export default Logo
