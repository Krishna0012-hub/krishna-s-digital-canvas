import { useState, FormEvent } from "react";
import { Send, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 section-alt relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:krishna@example.com" className="text-sm font-medium hover:text-primary transition-colors">
                    krishna@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">India</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Connect with me</h3>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/krishnadubey", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/krishnadubey", label: "GitHub" },
                  { icon: Mail, href: "mailto:krishna@example.com", label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-bg hover:text-primary-foreground hover:border-transparent hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-card border border-border rounded-xl p-7 space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-background/50"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-background/50"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              className="bg-background/50"
            />
            <Button type="submit" className="w-full gradient-bg border-0 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
