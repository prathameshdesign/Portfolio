

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take?",
      answer: "Most projects wrap up in 2-4 weeks just depends on what all you need."
    },
    {
      question: "What do you need from me?",
      answer: "Mainly some details about your business, goals, and any brand stuff (like logos or colors)."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "Of course. Whether you've got a full brand guide or just an idea in your head, I'll make sure the site fits perfectly."
    },
    {
      question: "Can you redesign my current website?",
      answer: "Absolutely. I often take outdated sites and turn them into modern, trust-building machines."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes , I can handle tweaks, updates, or just be around if you need a hand after launch."
    },
    {
      question: "What if I don't like the first draft?",
      answer: "No worries. I include revisions to make sure you're 100% happy with how things look and feel."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Got questions? I've got answers. Here's what most people want to know.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
              <button
                className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-teal-400 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;