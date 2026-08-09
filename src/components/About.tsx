import Section from './Section';

export default function About(){
    return <Section id="about" className="about">
        <div className="section-label">01 / ABOUT</div>
        <div>
            <h2>An ambitious developer with a <em>collaborative</em> mindset.</h2>
            <p>I bring curiosity, care and a practical approach to every project. From software architecture to the final user interaction, I’m motivated by solving real problems with clean, dependable code.</p>
            <div className="facts">
                <div>
                    <strong>2024</strong>
                    <span>IT National Diploma<br/>Central University of Technology</span>
                </div>
                <div>
                    <strong>5+</strong>
                    <span>Years building<br/>technical skills</span>
                </div>
                <div>
                    <strong>SA</strong>
                    <span>Based in<br/>South Africa</span>
                </div>
            </div>
        </div>
    </Section>
}
