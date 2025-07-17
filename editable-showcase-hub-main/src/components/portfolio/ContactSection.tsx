import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mwpqpejw");

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "milantetar@gmail.com",
            href: "mailto:milantetar@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 94294 85567",
            href: "tel:+919429485567"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Rajkot, Gujarat, India",
            href: "https://maps.google.com/?q=Rajkot"
        }
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/milantetar", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/milan-tetar-80192126a", label: "LinkedIn" },
    ];

    return (
        <section id="contact" className="py-20 px-6 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, projects, or just connecting.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">
                                Let's Connect
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Whether you have a project in mind, want to collaborate, or simply want to say hello,
                                feel free to reach out through any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((contact) => (
                                <Card
                                    key={contact.label}
                                    className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <a
                                        href={contact.href}
                                        className="flex items-center gap-4 group-hover:text-primary transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20">
                                            <contact.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground">{contact.label}</div>
                                            <div className="text-muted-foreground">{contact.value}</div>
                                        </div>
                                    </a>
                                </Card>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-foreground">
                                Follow Me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                                    >
                                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Formspree Contact Form */}
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border/50">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground">
                            Send Message
                        </h3>

                        {state.succeeded ? (
                            <p className="text-green-600 font-medium">Thank you! Your message has been sent.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">
                                            First Name
                                        </label>
                                        <Input type="text" name="firstName" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">
                                            Last Name
                                        </label>
                                        <Input type="text" name="lastName" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-foreground">
                                        Email
                                    </label>
                                    <Input type="email" name="email" required />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-foreground">
                                        Message
                                    </label>
                                    <Textarea name="message" rows={5} required />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                    disabled={state.submitting}
                                >
                                    {state.submitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>

                <div className="text-center mt-16 pt-8 border-t border-border/50">
                    <p className="text-muted-foreground">
                        © 2025 Milan Tetar. Built with React, TypeScript & Tailwind CSS.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
