import { useState } from "react";
import { Send, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "krishnajob0007@gmail.com";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hello Krishna,

You have received a new message from your portfolio contact form.

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}

Best regards,
${form.name}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Email draft ready!",
      description: "Your email app has been opened with the message details.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#030805] py-20 text-emerald-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_34%),linear-gradient(135deg,rgba(3,8,5,0.98),rgba(5,18,12,0.96)_48%,rgba(1,24,13,0.98))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

      <div className="container relative mx-auto max-w-4xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-white">Get In Touch</h2>
        <p className="mx-auto mb-12 max-w-md text-center text-emerald-100/70">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3 rounded-lg border border-emerald-400/20 bg-white/[0.06] p-4 shadow-lg shadow-emerald-950/30 backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/15 ring-1 ring-emerald-300/25">
                <Mail className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-xs text-emerald-100/60">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium text-emerald-50 transition-colors hover:text-emerald-300">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-emerald-400/20 bg-white/[0.06] p-4 shadow-lg shadow-emerald-950/30 backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/15 ring-1 ring-emerald-300/25">
                <MapPin className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-xs text-emerald-100/60">Location</p>
                <p className="text-sm font-medium text-emerald-50">India</p>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-emerald-100">Connect with me</h3>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-dubey-57a915216/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/Krishna0012-hub", label: "GitHub" },
                  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-white/[0.06] text-emerald-100 transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-emerald-400/20 bg-black/35 p-6 shadow-2xl shadow-emerald-950/40 backdrop-blur md:col-span-3">
            <Input
              className="border-emerald-400/20 bg-emerald-950/35 text-emerald-50 placeholder:text-emerald-100/45 focus-visible:ring-emerald-300"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
            />
            <Input
              className="border-emerald-400/20 bg-emerald-950/35 text-emerald-50 placeholder:text-emerald-100/45 focus-visible:ring-emerald-300"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
            />
            <Textarea
              className="border-emerald-400/20 bg-emerald-950/35 text-emerald-50 placeholder:text-emerald-100/45 focus-visible:ring-emerald-300"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
            />
            <Button type="submit" className="w-full bg-emerald-400 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300">
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
