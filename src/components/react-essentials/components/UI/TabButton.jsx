export default function TabButton({ children, onTabSelect, isTabSelected }) {
    return (
        <li>
            <button className={isTabSelected ? 'active': ''} onClick={onTabSelect}>{children}</button>
        </li>
    )
}
