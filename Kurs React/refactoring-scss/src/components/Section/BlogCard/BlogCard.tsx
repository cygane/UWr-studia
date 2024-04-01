import classes from "./styles.module.scss";
import Section from "../Section";

interface BlogIProps {
    blogdata: {
        id: number;
        title: string;
        date: string;
        content: string;
    }[];
}

export default function BlogCard({ blogdata }: BlogIProps) {
    return (
        <Section id={classes["blog"]}>
          <h2>Latest Blog Posts</h2>
          <div className={classes["blog-posts"]}>
            {blogdata.map((post) => (
              <div key={post.id} className={classes["blog-post"]}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <button>Read More</button>
              </div>
            ))}
          </div>
        </Section>
    )
}