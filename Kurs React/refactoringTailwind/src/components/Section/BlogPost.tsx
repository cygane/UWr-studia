import Section from "./Section";
//TODO: do the hover in button

interface BlogIProps {
    blogdata: {
        id: number;
        title: string;
        date: string;
        content: string;
    }[];
}

export default function BlogPost({ blogdata }: BlogIProps) {
    return (
        <Section id={"blog"}>
          <h2>Latest Blog Posts</h2>
          <div className="grid grid-cols-auto-fit minmax-300px-1fr gap-20">
            {blogdata.map((post) => (
              <div key={post.id} className="rounded-lg p-20 text-left">
                <h3 className="mb-4">{post.title}</h3>
                <p className="mb-4">{post.date}</p>
                <p className="mb-4">{post.content}</p>
                <button className="border-none rounded-md cursor-pointer py-2 px-4 transition duration-300 ease-in-out ">Read More</button>
              </div>
            ))}
          </div>
        </Section>
    )
}