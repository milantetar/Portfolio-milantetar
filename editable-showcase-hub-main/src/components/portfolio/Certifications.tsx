import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export const badgeData = [
    {
        id: 1,
        title: 'AWS Educate Introduction to Cloud 101',
        issuer: 'Amazon Web Services Training and Certification',
        date: 'Jul 8, 2025',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
    {
        id: 2,
        title: 'Cybersecurity Essentials',
        issuer: 'Cisco',
        date: 'May 19, 2024',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
    {
        id: 3,
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'May 16, 2024',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
    {
        id: 4,
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        issuer: 'Cisco',
        date: 'Mar 9, 2024',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
    {
        id: 5,
        title: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        date: 'Feb 10, 2024',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
    {
        id: 6,
        title: 'Enterprise Data Science in Practice',
        issuer: 'IBM',
        date: 'Jan 24, 2024',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
    {
        id: 7,
        title: 'Getting Started with Enterprise Data Science',
        issuer: 'IBM',
        date: 'Jan 24, 2024',
        link: 'https://www.credly.com/users/milan-tetar/badges#credly',
    },
];

const certificateData = [
    {
        id: 1,
        title: 'Explore Machine Learning using Python',
        issuer: 'Infosys',
        date: 'March 19, 2025',
        link: 'https://drive.google.com/drive/folders/1tNh_nfFKtOTLdwwGbpfK8gnmCcSA7Eaw?usp=sharing',
    },
    {
        id: 2,
        title: 'Android Fundamentals',
        issuer: 'Infosys',
        date: 'August 30, 2024',
        link: 'https://drive.google.com/drive/folders/1tNh_nfFKtOTLdwwGbpfK8gnmCcSA7Eaw?usp=sharing',
    },
    {
        id: 3,
        title: 'Machine Learning with SciKit-Learn',
        issuer: 'Infosys',
        date: 'March 20, 2025',
        link: 'https://drive.google.com/drive/folders/1tNh_nfFKtOTLdwwGbpfK8gnmCcSA7Eaw?usp=sharing',
    },
    {
        id: 4,
        title: 'AWS Cloud Certificate',
        issuer: 'Amazon Web Services',
        date: 'July 7, 2025',
        link: 'https://drive.google.com/drive/folders/1tNh_nfFKtOTLdwwGbpfK8gnmCcSA7Eaw?usp=sharing',
    },
    {
        id: 5,
        title: 'PHP Fundamentals',
        issuer: 'Simplilearn-Cursa',
        date: 'April 2024',
        link: 'https://drive.google.com/drive/folders/1tNh_nfFKtOTLdwwGbpfK8gnmCcSA7Eaw?usp=sharing',
    },
];

const CertificationSection = () => {
    return (
        <section id="certifications" className="py-20 px-6 space-y-24">
            {/* Badges Section */}
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Digital Badges</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Verified digital badges from Credly and similar platforms.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {badgeData.map((badge) => (
                        <Card
                            key={badge.id}
                            className="p-5 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-300 group"
                        >
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                                {badge.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{badge.issuer}</p>
                            <p className="text-xs text-muted-foreground mb-3">{badge.date}</p>
                            <a
                                href={badge.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Badge
                            </a>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Certificates Section */}
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Certificates</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognized course completions in ML, Android, and backend technologies.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificateData.map((cert) => (
                        <Card
                            key={cert.id}
                            className="p-5 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-300 group"
                        >
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Certificate
                            </a>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Internship Certificate Section */}
            <div className="container mx-auto max-w-4xl text-center">
                <div className="text-center mb-10 mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Internship Certificate</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        During my internship at TSS Consultancy, I had the opportunity to work on real-world projects
                        involving backend development, automation, and cloud integration. I gained hands-on experience with
                        technologies like Java, Spring Boot, Selenium, Jsoup, and AWS. I was involved in debugging production
                        environments, writing scalable code, and collaborating with senior developers to enhance the application’s
                        performance. This experience solidified my skills in software engineering, CI/CD pipelines, and team
                        collaboration — preparing me for full-time roles in DevOps and backend engineering.
                    </p>
                </div>

                <a
                    href="https://drive.google.com/file/d/1DdHdfheLCAt_1n1RAdt9WWEh48X-vPte/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src="/Internship-certificate.jpeg"
                        alt="Internship Certificate"
                        className="rounded-lg shadow-lg border border-border max-w-full"
                    />
                </a>
            </div>
        </section>
    );
};

export default CertificationSection;
