import { MessageCircle } from "lucide-react";

const TalkToUsWpBtn = () => {
    const phoneNumber = "919876543210"; 

    const message =
        "Hi Zyncode! I'm interested in your website design and development services. I'd love to discuss my project with you.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Zyncode on WhatsApp"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
            <MessageCircle className="size-5" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
        </a>
    );
};

export default TalkToUsWpBtn;

