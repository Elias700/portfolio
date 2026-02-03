
type LinkButtonProps = {
    href?: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
};

export function LinkButton({
    href,
    children,
    variant = 'secondary',
    disabled = false,
}: LinkButtonProps) {
    return (
        <a
            href={disabled ? undefined : href}
            onClick={disabled ? (e) => e.preventDefault() : undefined}
            aria-disabled={disabled}
            target="blank"
            className={`
                px-4 py-2 rounded-md text-sm font-medium transition
                ${variant === 'primary' 
                    ? 'bg-(--primary-500) text-(--primary-50)' 
                    : 'bg-zinc-800 text-white'}
                ${disabled
                    ? 'opacity-40 cursor-not-allowed pointer-events-none'
                    : 'hover:opacity-90'}
            `}
        >
            {children}
        </a>
    );
}
