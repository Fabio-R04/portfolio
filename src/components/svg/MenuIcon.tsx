interface MenuIconProps {
    onClick?: any;
}

function MenuIcon({ onClick }: MenuIconProps) {
    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <g fill="#0F0F0F">
                <path d="M1 12a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1zM1 4a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1zM1 20a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1z"></path>
            </g>
        </svg>
    );
}

export default MenuIcon;