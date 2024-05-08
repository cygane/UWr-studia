
export default function Navbar({ elements }: { elements: string[] }) {
    const themeSwitcher = () => {
        document.documentElement.classList.toggle("dark");
    };
    
    
    return (
        <div className="sticky top-0 py-2 px-0 text-center z-50">
            {elements.map((element) => (
                <a className="no-underline px-4" href={`#${element.toLowerCase()}`}>{element}</a>
            ))}

            <button onClick={() => themeSwitcher()} className="theme-toggle-button">
               {/* </div>{theme === 'light' ? "Light Mode" : "Dark Mode"} */}
               Theme Switch
            </button>
        </div>
    );
}
