import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/message/J2TBIHOFWLLKH1"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat to Seraphis on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-xl transition-all hover:bg-green-600 hover:shadow-2xl"
  >
    <MessageCircle size={20} />
    <span className="hidden sm:inline">WhatsApp Us</span>
  </a>
);

export default WhatsAppButton;
