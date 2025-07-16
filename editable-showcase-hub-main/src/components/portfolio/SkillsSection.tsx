import { Card } from '@/components/ui/card';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", level: 90 },
                { name: "C++", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "PHP", level: 75 },
                { name: "TypeScript", level: 70 }
            ]
        },
        {
            title: "Backend & Tools",
            skills: [
                { name: "Spring Boot", level: 88 },
                { name: "MySQL", level: 85 },
                { name: "Firebase", level: 80 },
                { name: "Jsoup", level: 78 },
                { name: "Selenium", level: 75 }
            ]
        },
        {
            title: "DevOps & Others",
            skills: [
                { name: "Git", level: 95 },
                { name: "Jenkins (CI/CD)", level: 85 },
                { name: "AWS", level: 78 },
                { name: "Linux CLI", level: 82 },
                { name: "Figma", level: 65 }
            ]
        }
    ];

    const techStack = [
        "Java", "Spring Boot", "MySQL", "Git", "Jenkins", "PHP", "Firebase",
        "Selenium", "Jsoup", "AWS", "Linux", "C++", "JavaScript", "Figma"
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Skills & Technologies
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        These are the languages, tools, and frameworks I use to build secure and scalable applications.
                    </p>
                </div>

                {/* Skill Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={category.title}
                            className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>

                            <div className="space-y-5">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>

                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Technologies Grid */}
                <div className="mt-16">
                    <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
                        Technologies I Love Working With
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {techStack.map((tech, index) => (
                            <Card
                                key={tech}
                                className="p-4 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center group cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                    {tech}
                                </span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
