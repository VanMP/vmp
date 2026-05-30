import React from "react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "pt" | "en";
}

export default function PrivacyModal({ isOpen, onClose, lang = "pt" }: PrivacyModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with elegant blur */}
      <div 
        className="absolute inset-0 bg-[#2C2822]/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-surface border border-[#3B4A28]/45 shadow-2xl rounded-2xl max-w-lg w-full p-6 md:p-8 z-10 animate-[drawerPull_0.3s_ease-out] font-sans flex flex-col max-h-[85vh]">
        
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

        {/* Header */}
        <div className="mb-4 pr-6 flex-shrink-0">
          <div className="flex items-center gap-2">
            <svg width="15" height="15" className="w-3.5 h-3.5 text-olive" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-extrabold text-olive font-mono">
              {lang === "pt" ? "Privacidade & Termos" : "Privacy & Terms"}
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-extrabold text-wine tracking-tight mt-1">
            {lang === "pt" ? "Políticas de Privacidade" : "Privacy Policy"}
          </h3>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 text-xs md:text-sm text-txt-main/90 space-y-4 leading-relaxed font-sans scrollbar-thin">
          {lang === "pt" ? (
            <>
              <p>
                Esta política de privacidade descreve como os seus dados pessoais são recolhidos, utilizados e protegidos quando utiliza este website e o respetivo formulário de contacto. O tratamento de dados é realizado em conformidade com o <strong>Regulamento Geral sobre a Proteção de Dados (RGPD - União Europeia)</strong> e a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Brasil)</strong>.
              </p>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  1. Dados Recolhidos e Consentimento
                </h4>
                <p>
                  Recolhemos apenas os dados pessoais que insere voluntariamente no nosso formulário de contacto, nomeadamente:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Nome Completo:</strong> Para o identificar e responder de forma personalizada.</li>
                  <li><strong>E-mail:</strong> Para podermos retornar a sua mensagem.</li>
                  <li><strong>Assunto / Objetivo & Mensagem:</strong> Para compreender a natureza do seu contacto e prestar os esclarecimentos necessários.</li>
                </ul>
                <p className="mt-2">
                  Ao submeter o formulário de contacto, o utilizador declara consentir explicitamente com a recolha e tratamento dos dados para esta finalidade exclusiva.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  2. Finalidade do Tratamento
                </h4>
                <p>
                  Os dados recolhidos servem única e exclusivamente para responder a mensagens de contacto, propostas comerciais ou agendamento de reuniões comerciais de consultoria. Não utilizamos os dados para envio de newsletters de marketing não solicitadas (spam) e não criamos perfis automáticos de utilizadores.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  3. Partilha de Dados e Processamento
                </h4>
                <p>
                  Este website não possui bases de dados persistentes que armazenem as suas mensagens. As mensagens enviadas são processadas em trânsito de forma segura através do serviço externo <strong>Web3Forms</strong>, que as encaminha diretamente para a caixa de correio eletrónico privada da responsável. Os dados não são vendidos ou partilhados com outros terceiros.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  4. Período de Retenção
                </h4>
                <p>
                  As informações recolhidas são mantidas apenas na caixa de e-mail privada durante o tempo estritamente necessário para prestar o atendimento solicitado ou cumprir obrigações comerciais e legais decorrentes do contacto.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  5. Os Seus Direitos
                </h4>
                <p>
                  De acordo com o RGPD e a LGPD, o utilizador tem o direito de:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Consultar e aceder aos dados pessoais guardados.</li>
                  <li>Solicitar a retificação de informações incorretas ou incompletas.</li>
                  <li>Solicitar a eliminação definitiva ("direito ao esquecimento") dos seus dados.</li>
                  <li>Retirar o consentimento a qualquer momento.</li>
                </ul>
                <p className="mt-2">
                  Para exercer qualquer um destes direitos, basta enviar um pedido simples por e-mail para a encarregada do tratamento: <strong>vanessa.smartinsp@gmail.com</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  6. Encarregada do Tratamento
                </h4>
                <p>
                  A responsável pelo tratamento dos dados recolhidos neste site é:
                  <br />
                  <strong>Vanessa Schemes Martins Pinto</strong>
                  <br />
                  Contacto: <a href="mailto:vanessa.smartinsp@gmail.com" className="text-olive hover:underline font-semibold">vanessa.smartinsp@gmail.com</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                This privacy policy describes how your personal data is collected, used, and protected when you use this website and its contact form. Data processing is performed in compliance with the <strong>General Data Protection Regulation (GDPR - European Union)</strong> and the <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Brazil)</strong>.
              </p>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  1. Collected Data & Consent
                </h4>
                <p>
                  We only collect the personal data that you voluntarily submit through our contact form:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Full Name:</strong> To identify you and reply in a personalized manner.</li>
                  <li><strong>Email:</strong> To reply to your message.</li>
                  <li><strong>Subject & Message:</strong> To understand the nature of your request and provide details.</li>
                </ul>
                <p className="mt-2">
                  By submitting the contact form, you explicitly consent to the collection and processing of your data for this sole purpose.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  2. Purpose of Processing
                </h4>
                <p>
                  The collected data is used exclusively to reply to contact requests, project proposals, or consulting meeting requests. We do not use the data for marketing campaigns (spam) or build automated profiling structures.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  3. Data Sharing & Processor
                </h4>
                <p>
                  This website does not feature persistent databases storing your messages. Sent messages are processed securely in transit via the external <strong>Web3Forms</strong> service, which routes them directly to the controller's private email inbox. Your data is never sold or shared with other third parties.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  4. Retention Period
                </h4>
                <p>
                  Information is kept in the private email inbox only for the period strictly necessary to serve your request or maintain business relations arising from the contact.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  5. Your Rights
                </h4>
                <p>
                  According to GDPR and LGPD, you have the right to:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Inquire and access the stored personal data.</li>
                  <li>Request correction of inaccurate or incomplete details.</li>
                  <li>Request permanent erasure ("right to be forgotten") of your data.</li>
                  <li>Withdraw your consent at any time.</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, simply email your request to the data controller: <strong>vanessa.smartinsp@gmail.com</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-wine font-serif text-sm uppercase tracking-wider mb-1">
                  6. Data Controller
                </h4>
                <p>
                  The entity responsible for processing the data on this site is:
                  <br />
                  <strong>Vanessa Schemes Martins Pinto</strong>
                  <br />
                  Contact: <a href="mailto:vanessa.smartinsp@gmail.com" className="text-olive hover:underline font-semibold">vanessa.smartinsp@gmail.com</a>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer/Close Button */}
        <div className="mt-5 pt-3 border-t border-border-soft/40 flex justify-end flex-shrink-0">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-[#3B4A28] hover:bg-[#4E5F2A] text-[#FCFAF7] font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-soft cursor-pointer"
          >
            {lang === "pt" ? "Fechar" : "Close"}
          </button>
        </div>

      </div>
    </div>
  );
}
