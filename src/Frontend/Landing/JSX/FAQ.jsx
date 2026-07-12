import { useState } from "react";
import "../CSS/FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What is AssetFlow?",
    answer:
      "AssetFlow is an Enterprise Asset & Resource Management System that helps organizations track, allocate, maintain, and monitor assets from a centralized platform.",
  },
  {
    question: "Who can use AssetFlow?",
    answer:
      "AssetFlow is suitable for schools, colleges, hospitals, offices, factories, government organizations, and any business that manages physical assets.",
  },
  {
    question: "Can I track assets using QR codes?",
    answer:
      "Yes. AssetFlow supports QR/Barcode-based asset tracking for quick identification and management.",
  },
  {
    question: "Does AssetFlow support maintenance scheduling?",
    answer:
      "Yes. You can schedule preventive maintenance, track repair history, and receive maintenance reminders.",
  },
  {
    question: "Can multiple users access the system?",
    answer:
      "Yes. AssetFlow provides role-based access for administrators, employees, and department managers.",
  },
  {
    question: "Does AssetFlow provide reports and analytics?",
    answer:
      "Yes. The system generates detailed reports and dashboards to help monitor asset usage, maintenance, and overall performance.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to common questions about AssetFlow and its features.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}