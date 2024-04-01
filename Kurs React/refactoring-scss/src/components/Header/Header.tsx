import classes from "./styles.module.scss";

interface HeaderIProps {
    name: string;
    slogan: string;
}

export default function Header({name, slogan}: HeaderIProps) {
    return (
        <header id="header" className={classes["header"]}>
        <div className={classes["header-content"]}>
          <h1>{name}</h1>
          <p>{slogan}</p>
        </div>
      </header>
    );
}