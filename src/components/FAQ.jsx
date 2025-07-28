"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can participate in the bootcamp?",
      answer:
        "The bootcamp is open to all MANIT students and external participants interested in web development. No prior programming experience is required, though basic computer literacy is recommended.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The bootcamp is completely free for MANIT students. For external participants, there is a nominal fee of ₹500 to cover material and certificate costs.",
    },
    {
      question: "What are the prerequisites?",
      answer:
        "No specific prerequisites are required. However, participants should have access to a laptop/computer with a stable internet connection.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes! Participants who complete all 7 days and submit the final project will receive an IEEE-verified certificate of completion.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
          <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold text-black">FAQs</h2>
        <p className="text-gray-500 mt-4">
          Get your common queries answered below.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white text-left"
            >
              <h3 className="font-semibold text-black">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="text-blue-600" />
              ) : (
                <Plus className="text-blue-600" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-6 pb-4 text-gray-500"
            >
              {faq.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
