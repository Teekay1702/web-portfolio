import Button from './Button'; import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

interface Props {
    onNavigate: (target: string) => void
}
export default function Hero({ onNavigate }: Props) {
    const routerNavigate = useNavigate();

    return <>
        <section className="hero">
            <div className="hero-copy">
                <div className="eyebrow">
                    <span /> AVAILABLE FOR OPPORTUNITIES
                </div>
                <h1><br /><em>Tokoloho Lekoro</em></h1>
                <p className="intro">I am an aspiring programmer with a passion for developing innovative software using industry-standard technologies. I
                    demonstrate strong commitment to teamwork and effective code management, ensuring project success through
                    collaborative goal alignment.
                </p>
                <div className="hero-actions">
                    <Button onClick={() => onNavigate('work')}>See my work <Icon name="arrow" /></Button>
                    <Button onClick={() => routerNavigate('/cv')}>
                        View my CV <Icon name="arrow" />
                    </Button>
                    <a className="text-link" href="mailto:tokoloho57@gmail.com">Get in touch <Icon name="arrow" /></a>
                </div>
            </div>
            <div className="hero-art">
                <div className="orb orb1" />
                <div className="orb orb2" />
                <div className="portrait">
                    <div className="portrait-code">&lt;/&gt;
                    </div>
                    <div className="portrait-name">Tokoloho Lekoro<span>_</span>
                    </div>
                    <div className="floating f1">React.js</div>
                    <div className="floating f2">C#</div>
                    <div className="floating f3">Firebase</div>
                </div>
                <div className="artifact a1">const idea =<br /><b>solution</b>;</div>
                <div className="artifact a2">● shipping</div>
            </div>
        </section>
        <section className="marquee">
            <div>REACT <b>✦</b> NODE.JS <b>✦</b> FLUTTER <b>✦</b> DJANGO <b>✦</b> C# <b>✦</b> TYPESCRIPT <b>✦</b> FIREBASE <b>✦</b> SUPABASE <b>✦</b> GIT <b>✦</b> PRISMA <b>✦</b>
            </div>
        </section>
    </>
}
