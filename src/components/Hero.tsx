import Button from "./Button";
import Icon from "./Icon";

import useScroll from "../hooks/useScroll";
import { PROFILE } from "../constants/profile";

export default function Hero() {
    const scroll = useScroll();

    return (
        <section
            id="top"
            className="hero"
        >
            <div className="hero-copy">

                <div className="eyebrow">

                    <span />

                    AVAILABLE FOR OPPORTUNITIES

                </div>

                <h1>

                    Building ideas

                    <br />

                    into <em>useful</em> software.

                </h1>

                <p className="intro">
                    I'm Tokoloho, a software developer
                    who enjoys transforming thoughtful
                    ideas into accessible digital
                    experiences.
                </p>

                <div className="hero-actions">

                    <Button
                        onClick={() => scroll("work")}
                        icon={<Icon name="arrow" />}
                    >
                        See My Work
                    </Button>

                    <a
                        className="text-link"
                        href={PROFILE.mailto}
                    >
                        Get in Touch

                        <Icon name="arrow" />
                    </a>

                </div>
            </div>

            <div className="hero-art">

                <div className="orb orb1" />

                <div className="orb orb2" />

                <div className="portrait">

                    <div className="portrait-code">

                        {"</>"}

                    </div>

                    <div className="portrait-name">

                        TL

                        <span>_</span>

                    </div>

                    <div className="floating f1">
                        React
                    </div>

                    <div className="floating f2">
                        C#
                    </div>

                    <div className="floating f3">
                        Flutter
                    </div>

                </div>

                <div className="artifact a1">

                    const idea =

                    <br />

                    <b>solution</b>;

                </div>

                <div className="artifact a2">

                    ● shipping

                </div>

            </div>
        </section>
    );
}