import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
}

const ProjectsSection = () => {
    const [repos, setRepos] = useState<Project[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/users/milantetar/repos'
                );
                const data = await response.json();

                const formatted = data.map((repo: any) => ({
                    id: repo.id,
                    title: repo.name,
                    description: repo.description || 'No description provided.',
                    technologies: repo.topics || [],
                    githubUrl: repo.html_url,
                    liveUrl: repo.homepage || repo.html_url,
                }));

                setRepos(formatted);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        GitHub Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        These are the public repositories from my GitHub profile.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((project) => (
                        <Card
                            key={project.id}
                            className="group p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                <div className="flex gap-2">
                                    <a
                                        href={project.liveUrl}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {project.technologies.length > 0 ? (
                                    project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-medium bg-muted/30 text-muted-foreground rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-xs text-muted-foreground">No topics</span>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                    >
                        <a
                            href="https://github.com/milantetar?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View All on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
