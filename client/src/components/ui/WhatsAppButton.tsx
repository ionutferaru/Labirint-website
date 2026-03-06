export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/40768526104?text=Salut!%20Vreau%20să%20rezerv%20o%20masă%20VIP%20la%20LABIRINT%20Gentlemen's%20Club."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 px-6 py-3 rounded-full 
      bg-gradient-to-r from-[#d4af37] to-[#f5e6a8]
      text-black font-semibold tracking-wide shadow-lg
      transition-all duration-300
      hover:scale-105 hover:shadow-2xl">

        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.38 0 .02 5.36.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62A11.93 11.93 0 0012.02 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.82c-1.82 0-3.59-.49-5.13-1.42l-.37-.22-3.67.96.98-3.58-.24-.37A9.78 9.78 0 012.22 12c0-5.41 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 012.87 6.93c0 5.4-4.4 9.82-9.8 9.82zm5.4-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.49s1.07 2.9 1.22 3.1c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.2-.57-.35z"/>
        </svg>

        <span>Book VIP Table</span>
      </div>
    </a>
  );
}