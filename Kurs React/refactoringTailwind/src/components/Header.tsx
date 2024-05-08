interface IProps {
    name: string;
    slogan: string;
}

export default function Header({ name, slogan }: IProps) {
    return (
        <header className="py-10 text-center">
            <div className="header-content">
                <h1 className="text-3xl mb-4">{name}</h1>
                <p className="text-lg">{slogan}</p>
            </div>
        </header>
    );
}