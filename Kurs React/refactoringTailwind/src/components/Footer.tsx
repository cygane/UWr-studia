
interface FooterIprops {
  name: string;
}

export default function Footer({name}: FooterIprops) {
    return(
        <footer className="py-5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
      </footer>
    );
}