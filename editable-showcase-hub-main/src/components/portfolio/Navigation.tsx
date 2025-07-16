import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'hero', label: 'HOME' },
        { id: 'about', label: 'ABOUT' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'contact', label: 'CONTACT' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false); // Close on click
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="w-full max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="text-xl font-bold uppercase tracking-wider text-primary cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <span className="text-foreground">MILAN</span>
                        <span className="text-primary"> TETAR</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative px-3 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200 ${activeSection === item.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"></div>
                                )}
                            </button>
                        ))}

                        {/* Social Icons */}
                        <div className="flex items-center ml-6 space-x-4">
                            <a href="https://github.com/milantetar" target="_blank" className="hover:text-primary text-muted-foreground">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/milan-tetar-80192126a" target="_blank" className="hover:text-primary text-muted-foreground">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:milantetar@gmail.com" className="hover:text-primary text-muted-foreground">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary focus:outline-none z-50"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle Mobile Menu"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Nav */}
                <div
                    className={`md:hidden absolute left-0 right-0 top-0 z-40 bg-background transition-transform duration-300 shadow-lg ${mobileMenuOpen ? 'translate-y-16 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col items-start px-6 pt-6 pb-4 space-y-2 border-t border-primary/20">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left py-3 px-2 text-sm font-semibold uppercase tracking-wider transition-colors ${activeSection === item.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Mobile Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/milantetar" target="_blank" className="hover:text-primary text-muted-foreground">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/milan-tetar-80192126a" target="_blank" className="hover:text-primary text-muted-foreground">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:milantetar@gmail.com" className="hover:text-primary text-muted-foreground">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
