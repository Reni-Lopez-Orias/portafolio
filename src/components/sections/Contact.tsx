import { forwardRef } from "react";
import { Heart, Mail, Linkedin, Github, Send } from "lucide-react";
import type { Translation } from "../../types";

interface ContactProps {
  t: Translation["contact"];
  language: string; // "es" o "en"
}

export const Contact = forwardRef<HTMLElement, ContactProps>(
  ({ t, language }, ref) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;
      const name = (form.elements.namedItem("name") as HTMLInputElement).value;
      const email = (form.elements.namedItem("email") as HTMLInputElement)
        .value;
      const message = (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value;

      const dataEmail = { name, email, message };

      try {
        const resp = await fetch("https://wagerhubnet.vercel.app/api/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "contact-resume", payload: dataEmail }),
        }).then((res) => res.json());

        if (resp.success) {
          alert(
            language === "es"
              ? "¡Mensaje enviado correctamente!"
              : "Message sent successfully!"
          );
          form.reset(); // LIMPIA EL FORMULARIO
        } else {
          alert(
            language === "es"
              ? "Error al enviar el mensaje: " + resp.error
              : "Error sending message: " + resp.error
          );
        }
      } catch (error) {
        console.error(error);
        alert(
          language === "es"
            ? "Ocurrió un error al enviar el mensaje."
            : "An error occurred while sending the message."
        );
      }
    };

    return (
      <section ref={ref} className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="pb-5 text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="bg-gradient-to-br from-card to-muted border border-border/50 rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  {t.info}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{t.email}</p>
                      <p className="text-muted-foreground">19lopz@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground">@Reni López</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground">@Reni-Lopez-Orias</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder={t.namePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder={t.emailPlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t.message}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-all duration-300 resize-none"
                      placeholder={t.messagePlaceholder}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    {t.sendMessage}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Contact.displayName = "Contact";
