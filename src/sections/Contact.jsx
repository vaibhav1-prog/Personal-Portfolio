import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "Email", value: "baishkhiyarv@gmail.com", href: "mailto:baishkhiyarv@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-7667166487", href: "tel:+917667166487" },
  { icon: MapPin, label: "Location", value: "Delhi, India", href: "#" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS config missing.");

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: error.text || "Failed to send. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">something great.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind or an opportunity to share? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" required placeholder="Your name..." value={formData.name} onChange={handleChange("name")} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange("email")} className={inputClass} />
              </div>
              {/* Subject — NEW field */}
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" required placeholder="What's this about?" value={formData.subject} onChange={handleChange("subject")} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} required placeholder="Your message..." value={formData.message} onChange={handleChange("message")} className={`${inputClass} resize-none`} />
              </div>

              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}>
                  {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-sm">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Open to Opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Actively looking for full-time or internship roles in full-stack development.
                If you have an exciting opportunity, let's connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
