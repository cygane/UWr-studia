import Section from "./Section";

interface TeamCardIProps {
    teamMembers: {
        id: number,
        image: string,
        name: string,
        position: string,
        bio: string,
    }[];
}

export default function TeamCard({teamMembers}: TeamCardIProps) {

    return (
        <Section id="team">
            <h2>Meet Our Team</h2>
            <div className="flex flex-wrap justify-center">
            {teamMembers.map((member) => (
                <div key={member.id} className="flex-none w-1/3 md:w-1/3 lg:w-1/3 px-5 py-5 md:px-5 md:py-5 lg:px-5 lg:py-5 mx-2 md:mx-2 lg:mx-2 text-center">
                <img className="rounded-full mb-20" src={member.image} alt={member.name} />
                <div>
                    <h3 className="inline-block mb-10">{member.name}</h3>
                    <p>{member.position}</p>
                    <p>{member.bio}</p>
                </div>
                </div>
            ))}
            </div>
        </Section>
    );
}