import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post title="Andi Yuditya Mustika Ramadani Contact" body="NIM: 2341728039 | Phone: 085342589658 | E-mail: andiyuditya.3@gmail.com"/>
        </Section2>
    );
}