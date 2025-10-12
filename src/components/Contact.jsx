// src/components/Contact.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Dribbble,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const root = useRef(null);
  const title = useRef(null);
  const para = useRef(null);
  const form = useRef(null);
  const details = useRef(null);

  // ✅ Formspree hook (replace with your own form ID)
  const [state, handleSubmit] = useForm("xdklbddy");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(title.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title.current,
          start: "top 85%",
        },
      });

      gsap.from(para.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para.current,
          start: "top 85%",
        },
      });

      gsap.from([form.current, details.current], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: form.current,
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="bg-white text-black pt-20 pb-5 sm:pb-0 md:py-14 font-roboto"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 md:mb-24 items-start">
          <div>
            <h2
              ref={title}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] text-black tracking-tight"
            >
              {/* text-4xl md:text-6xl lg:text-7xl  */}
              Great Work Starts with a <span className="text-blue-600">Hello</span>
            </h2>
          </div>

          <div className="lg:pt-4">
            <p
              ref={para}
              className="text-xl sm:text-lg md:text-xl lg:text-lg text-gray-800 leading-relaxed"
            >
               {/* text-xl sm:text-lg md:text-xl lg:text-lg */}
              <span className="font-semibold text-blue-600">Great design </span>
              starts with a conversation. Whether you have a project in mind or
              just want to connect, we&apos;d love to hear from you.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
          {/* Left: Form */}
          <div ref={form} className="lg:col-span-7">
            {state.succeeded ? (
              <p className="text-green-600 font-semibold text-lg">
                ✅ Thanks for reaching out! We’ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none focus:border-blue-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none focus:border-blue-600"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none focus:border-blue-600"
                  />
                  <select
                    name="service"
                    className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Select Service</option>
                    <option value="branding">Branding</option>
                    <option value="web">Web Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="long-video">Long-form Video Editing</option>
                    <option value="short-video">Short-form Video Editing</option>
                    <option value="production">Full Video Production</option>
                    <option value="graphics">Social Media Graphics</option>
                    <option value="ugc">UGC Creation</option>
                    <option value="shoots">Product Shoots</option>
                    <option value="smm">Social Media Management</option>
                    <option value="logo">Logo Design and Animation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none focus:border-blue-600"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div
            ref={details}
            className="lg:col-span-5 flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let’s Talk</h3>
              <p className="text-gray-800 text-lg">
                Have an idea? Let’s bring it to life together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 w-5 h-5" />
                <span className="text-gray-800 text-lg">Connect@digiplix.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600 w-5 h-5" />
                <span className="text-gray-800 text-lg">+91 89899 13443</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600 w-5 h-5" />
                <span className="text-gray-800 text-lg">Indore, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-800 hover:text-blue-600 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition">
                <Dribbble className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
