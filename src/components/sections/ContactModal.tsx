import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "pt" | "en";
}

// Vanessa can paste her unique Web3Forms Access Key here once she gets it in her email
const WEB3FORMS_ACCESS_KEY = "3235b80a-9d95-46b0-9e90-252f534fc487"; // Placeholder - Vanessa will confirm/change this

export default function ContactModal({ isOpen, onClose, lang = "pt" }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<"geral" | "projeto" | "consultoria">("geral");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage(lang === "pt" ? "Por favor, preencha todos os campos obrigatórios." : "Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          subject: `Novo Contacto Portfólio - [${category.toUpperCase()}] - ${name}`,
          category: category,
          message: message,
          from_name: "Portfólio Vanessa Martins Pinto",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setCategory("geral");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(result.message || (lang === "pt" ? "Ocorreu um erro ao enviar." : "An error occurred while sending."));
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(lang === "pt" ? "Erro de ligação. Tente novamente." : "Connection error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with elegant blur */}
      <div 
        className="absolute inset-0 bg-[#2C2822]/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-surface border border-[#3B4A28]/45 shadow-2xl rounded-2xl max-w-lg w-full p-6 md:p-8 overflow-hidden z-10 animate-[drawerPull_0.3s_ease-out] font-sans">
        
        {/* Decorative subtle background branch overlay */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 text-olive/5 pointer-events-none select-none">
          <svg width="128" height="128" className="w-full h-full rotate-45" viewBox="0 0 100 100" fill="currentColor">
            <path d="M10 80 C 35 75, 65 75, 90 80" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M25 77 C 20 70, 18 62, 25 60 C 32 58, 35 66, 25 77 Z" />
            <path d="M45 75 C 42 66, 44 58, 51 58 C 58 58, 55 67, 45 75 Z" />
            <path d="M68 76 C 68 67, 71 59, 78 59 C 85 59, 81 68, 68 76 Z" />
          </svg>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-txt-muted hover:text-wine p-1.5 rounded-full hover:bg-frost transition-soft cursor-pointer"
          title={lang === "pt" ? "Fechar" : "Close"}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          /* SUCCESS STATE VIEW */
          <div className="flex flex-col items-center text-center py-8 gap-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-olive/15 flex items-center justify-center text-olive border border-olive/30 shadow-inner">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-wine tracking-tight">
                {lang === "pt" ? "Mensagem Enviada!" : "Message Sent!"}
              </h3>
              <p className="text-sm text-txt-muted mt-2 max-w-sm mx-auto leading-relaxed">
                {lang === "pt" 
                  ? "Obrigado pelo seu contacto. A Vanessa responderá o mais breve possível para o e-mail indicado."
                  : "Thank you for reaching out. Vanessa will get back to you as soon as possible via the provided email."}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-[#3B4A28] hover:bg-[#4E5F2A] text-[#FCFAF7] font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-soft cursor-pointer"
            >
              {lang === "pt" ? "Voltar ao Portfólio" : "Back to Portfolio"}
            </button>
          </div>
        ) : (
          /* FORM VIEW */
          <div className="flex flex-col gap-5 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" className="w-3.5 h-3.5 text-terracotta rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 2 C8 3.5 7.5 5.5 8 7.5 C6.5 8.2 5.5 9.8 6 11.5 C4.5 12.5 4 14.5 5.5 16.5 C4.8 17.8 5 19.2 6.5 20 C7.5 20.5 8.5 20.2 9 20.8 C9.5 21.5 9.2 22.8 9.5 24 L10.5 24 C10.8 22.8 10.5 21.5 11 20.8 C11.5 20.2 12.5 20.5 13.5 20 C15 19.2 15.2 17.8 14.5 16.5 C16 14.5 15.5 12.5 14 11.5 C14.5 9.8 13.5 8.2 12 7.5 C12.5 5.5 12 3.5 10 2 Z" />
                </svg>
                <span className="text-xs uppercase tracking-wider font-extrabold text-terracotta font-mono">
                  {lang === "pt" ? "ENTRAR EM CONTACTO" : "GET IN TOUCH"}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-wine tracking-tight mt-1">
                {lang === "pt" ? "Enviar Mensagem" : "Send a Message"}
              </h3>
              <p className="text-xs text-txt-muted mt-1">
                {lang === "pt"
                  ? "Preencha o formulário abaixo para enviar um e-mail diretamente para a Vanessa."
                  : "Fill out the form below to send an email directly to Vanessa."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Category selector (pills style) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-txt-muted uppercase tracking-wider font-mono">
                  {lang === "pt" ? "Assunto / Objetivo" : "Subject / Goal"}
                </label>
                <div className="flex gap-2">
                  {(["geral", "projeto", "consultoria"] as const).map((cat) => {
                    const active = category === cat;
                    const labels = {
                      geral: lang === "pt" ? "Geral / Dúvida" : "General / Inquiry",
                      projeto: lang === "pt" ? "Projeto / Proposta" : "Project / Proposal",
                      consultoria: lang === "pt" ? "Consultoria" : "Consulting",
                    };
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-soft flex-1 text-center ${
                          active
                            ? "bg-[#3B4A28] border-[#3B4A28] text-white shadow-xs"
                            : "bg-surface border-border-soft hover:bg-frost text-txt-main"
                        }`}
                      >
                        {labels[cat]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="modal-name" className="text-[10px] font-bold text-txt-muted uppercase tracking-wider font-mono">
                  {lang === "pt" ? "Nome *" : "Name *"}
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === "pt" ? "O seu nome completo" : "Your full name"}
                  className="px-3.5 py-2 text-xs md:text-sm bg-frost/50 border border-border-soft rounded-lg focus:outline-hidden focus:ring-1 focus:ring-olive focus:border-olive text-txt-main font-sans placeholder-txt-muted/50 w-full"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="modal-email" className="text-[10px] font-bold text-txt-muted uppercase tracking-wider font-mono">
                  {lang === "pt" ? "E-mail *" : "Email *"}
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@dominio.com"
                  className="px-3.5 py-2 text-xs md:text-sm bg-frost/50 border border-border-soft rounded-lg focus:outline-hidden focus:ring-1 focus:ring-olive focus:border-olive text-txt-main font-sans placeholder-txt-muted/50 w-full"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="modal-message" className="text-[10px] font-bold text-txt-muted uppercase tracking-wider font-mono">
                  {lang === "pt" ? "Mensagem *" : "Message *"}
                </label>
                <textarea
                  id="modal-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === "pt" ? "Escreva os detalhes do seu contacto..." : "Write your message details..."}
                  className="px-3.5 py-2 text-xs md:text-sm bg-frost/50 border border-border-soft rounded-lg focus:outline-hidden focus:ring-1 focus:ring-olive focus:border-olive text-txt-main font-sans placeholder-txt-muted/50 w-full resize-none leading-relaxed"
                />
              </div>

              {status === "error" && (
                <div className="p-3 bg-wine/10 border border-wine/20 text-wine rounded-lg text-xs font-semibold animate-fadeIn">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-2.5 bg-[#542E3B] hover:bg-[#774F4C] text-[#FCFAF7] font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-soft flex items-center justify-center gap-2 cursor-pointer ${
                  status === "submitting" ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {lang === "pt" ? "A Enviar..." : "Sending..."}
                  </>
                ) : (
                  lang === "pt" ? "Enviar Mensagem" : "Send Message"
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
