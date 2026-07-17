import { useState } from "react";

import Logo from "./Logo";
import Icon from "./Icon";
import MobileNav from "./MobileNav";

import useScroll from "../hooks/useScroll";

import { NAVIGATION } from "../constants/navigation";
import { PROFILE } from "../constants/profile";

export default function Header() {
    const [open, setOpen] = useState(false);

    const scroll = useScroll();

    const navigate = (section: string) => {
        scroll(section, () => setOpen(false));
    };

    return (
        <>
            <header>
                <button
                    className="brand-button"
                    type="button"
                    onClick={() => scroll("top")}
                >
                    <Logo />
                </button>

                <nav>
                    {NAVIGATION.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => navigate(item)}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <a
                    className="navmail"
                    href={PROFILE.mailto}
                >
                    <Icon name="mail" />

                    Let's Talk
                </a>

                <button
                    className="menubtn"
                    aria-label="Toggle navigation"

                    aria-expanded={open}

                    aria-controls="mobile-navigation"

                    type="button"

                    onClick={() => setOpen((v) => !v)}
                >
                    <Icon
                        name={open ? "close" : "menu"}
                        size={22}
                    />
                </button>
            </header>

            <MobileNav
                open={open}
                onNavigate={navigate}
            />
        </>
    );
}