import Section from "./Section";

export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <Section id={"contact"}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-500 mx-auto p-5 rounded-lg">
                <div className="mb-4">
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="mb-4">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="mb-4">
                    <textarea rows={5} placeholder="Message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </Section>
    );
}