import classes from "./styles.module.scss";
import Section from "../Section";

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
            <div className={classes["team-members"]}>
            {teamMembers.map((member) => (
                <div key={member.id} className={classes["team-member"]}>
                <img src={member.image} alt={member.name} />
                <div>
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                    <p>{member.bio}</p>
                </div>
                </div>
            ))}
            </div>
        </Section>
    );
}