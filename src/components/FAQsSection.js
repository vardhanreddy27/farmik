'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Are Farmik products certified organic?',
    answer:
      'Yes. All our superfoods are certified under USDA Organic, EU Organic, India Organic (NPOP), and other global standards like BRC, FSSC 22000, and HACCP.',
  },
  {
    question: 'What is the shelf life of your products?',
    answer:
      'Most Farmik cereals, bars, and beverages have a shelf life of 9–24 months under recommended storage conditions. Details are listed on each pack.',
  },
  {
    question: 'Are your products suitable for children?',
    answer:
      'Absolutely! We offer kid-friendly, maida-free products like Multi-Millet Chocos, Choco Fills, and Nutri Fusion drinks made with clean ingredients.',
  },
  {
    question: 'Do you deliver across India?',
    answer:
      'Yes, Farmik delivers pan-India. We’re also export-ready with compliant packaging and documentation for global markets.',
  },
  {
    question: 'What makes Farmik bars different?',
    answer:
      'Our energy and meal replacement bars are rich in protein, packed with clean ingredients like dates, millet crisps, seeds, and nuts — with no added sugar or fillers.',
  },
  {
    question: 'Do your snacks contain palm oil or preservatives?',
    answer:
      'No harmful preservatives are used. We follow clean-label practices. Palm oil, where used, is sustainably sourced and limited to specific product categories.',
  },
];

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [query, setQuery] = useState('');

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-[var(--main-bg)] py-20 px-6 w-full" id="faqs">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-[var(--text-primary)] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Everything you need to know about Farmik superfoods.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-md divide-y divide-gray-200">
          {filteredFaqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-5 px-4 text-left"
              >
                <span className="font-medium text-[var(--text-primary)]">{item.question}</span>
                <span className="text-2xl text-gray-400">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
