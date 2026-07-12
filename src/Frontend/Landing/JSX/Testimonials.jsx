import "../CSS/Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "IT Administrator",
    review:
      "AssetFlow has simplified our asset tracking process. The dashboard is intuitive and saves our team hours every week.",
  },
  {
    name: "Priya Verma",
    role: "Operations Manager",
    review:
      "The maintenance scheduling and reporting features have significantly reduced equipment downtime.",
  },
  {
    name: "Amit Patel",
    role: "Facility Manager",
    review:
      "Managing office equipment across departments is now seamless. AssetFlow is reliable and easy to use.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-title">
        <h2>What Our Users Say</h2>
        <p>
          Hear how organizations benefit from using AssetFlow.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <FaQuoteLeft className="quote"/>

            <p>{item.review}</p>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <h4>{item.name}</h4>

            <span>{item.role}</span>

          </div>
        ))}
      </div>
    </section>
  );
}