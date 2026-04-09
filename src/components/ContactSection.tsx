import { useState, FormEvent } from "react";
import { Send, Linkedin, Github, Mail } from "lucide-react";
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
    <section id="contact" className="py-20 section-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:krishna@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                krishna@example.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Socials</h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/krishnadubey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/krishnadubey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:krishna@example.com"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
            />
            <Button type="submit" className="w-full">
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
