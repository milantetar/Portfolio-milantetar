import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 web-card"
        >
            {/* Web Texture Background */}
            <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>

            {/* Animated Red Highlights */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: '1s' }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="animate-fade-in">
                    {/* Name/Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight hero-text">
                        <span className="text-foreground">HI, I'M </span>
                        <span className="text-primary">MILAN TETAR</span>
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 font-light uppercase tracking-wider">
                        Junior Software Engineer | Backend & DevOps Engineer
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                        Passionate about building scalable backend systems and cloud-native applications.
                        Experienced with Java, Spring Boot, AWS, and CI/CD pipelines.
                        Enthusiastic learner who thrives in fast-paced environments and hackathons.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        {/* Projects Button */}
                        <a href="#projects">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-none shadow-glow hover:shadow-lg transition-all duration-300 border-b-4 border-accent uppercase tracking-wider"
                            >
                                View My Work
                            </Button>
                        </a>

                        {/* Resume Button */}
                        <a
                            href="https://docs.google.com/document/d/1Xc9VHoLjg_zHhX1NPPvPq0Zf8XH73WQa/edit?usp=sharing&ouid=116573738544034524456&rtpof=true&sd=true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-muted-foreground/30 hover:border-primary text-foreground hover:text-primary bg-transparent px-8 py-4 rounded-none uppercase tracking-wider transition-all duration-300"
                            >
                                Download CV
                            </Button>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-16">
                        <a
                            href="https://github.com/milantetar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-none bg-card/50 backdrop-blur-sm border border-muted-foreground/20 hover:border-primary transition-all duration-300 hover:scale-110 group web-card"
                        >
                            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/milan-tetar-80192126a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-none bg-card/50 backdrop-blur-sm border border-muted-foreground/20 hover:border-primary transition-all duration-300 hover:scale-110 group web-card"
                        >
                            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="mailto:milantetar@gmail.com"
                            className="p-3 rounded-none bg-card/50 backdrop-blur-sm border border-muted-foreground/20 hover:border-primary transition-all duration-300 hover:scale-110 group web-card"
                        >
                            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <button
                        onClick={scrollToAbout}
                        className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-xs mb-1 uppercase tracking-widest">Scroll</span>
                            <ArrowDown className="w-6 h-6 mx-auto" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Optional Web Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/30"></div>
        </section>
    );
};

export default HeroSection;
