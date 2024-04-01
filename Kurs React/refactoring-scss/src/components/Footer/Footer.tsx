import classes from "./styles.module.scss";

interface FooterIprops {
  name: string;
}

export default function Footer({name}: FooterIprops) {
    return(
        <footer className={classes["footer"]}>
        <div className={classes["footer-content"]}>
          <p>
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
      </footer>
    );
}