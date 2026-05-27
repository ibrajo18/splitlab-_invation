import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, User } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorOnSubmit, setErrorOnSubmit] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorOnSubmit(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      school: formData.get('school'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: `New SPLITLAB Partner Inquiry: ${formData.get('school')} (${formData.get('name')})`,
      _replyto: formData.get('email'),
      _honey: formData.get('_honey'), // Spam honeypot
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/splitlab.ng@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json().catch(() => ({}));

      if (response.ok && responseData.success !== 'false') {
        setSubmitted(true);
      } else {
        const errMsg = responseData.message || 'Failed to deliver your message. If this is splitlab.ng@gmail.com, please check your inbox for an activation email from FormSubmit.';
        throw new Error(errMsg);
      }
    } catch (err: any) {
      setErrorOnSubmit(err.message || 'An unexpected error occurred. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-[80vh] flex items-center justify-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="text-center p-12 glass-card rounded-3xl max-w-lg mx-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Send className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-8 font-medium">
            Thank you for reaching out. A copy of your submission has been forwarded to <strong className="text-brand-primary">splitlab.ng@gmail.com</strong>.
            <span className="block mt-4 text-xs text-indigo-600/90 font-normal bg-indigo-50/60 p-4 rounded-xl border border-indigo-100/30 text-left leading-relaxed">
              💡 <strong>Administrator Note:</strong> If this was your first test submission, please check the inbox of <strong>splitlab.ng@gmail.com</strong> for a FormSubmit activation email and click the confirmation link inside. Succeeding submissions will automatically arrive instantly in your inbox without any confirmation!
            </span>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-brand-indigo-soft py-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight text-brand-dark">Let's <span className="text-brand-primary">Innovate</span> Together</h1>
              <p className="text-xl text-slate-700 mb-12 leading-relaxed max-w-lg font-medium">
                Whether you're a school administrator looking to enhance your curriculum or a parent wanting to bring Splitlab to your local school, we're here to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="font-bold text-slate-900">Splitlab.ng@gmail.com</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-brand-primary mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="font-bold text-slate-900">09067864457</p>
                </div>
              </div>
            </div>

            <div className="section-card bg-white p-8 md:p-12 border-none shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h2 className="text-3xl font-bold mb-2 text-brand-dark relative z-10">Partner Inquiry Form</h2>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed relative z-10">
                Inquiries are sent directly to <span className="font-semibold text-brand-primary">splitlab.ng@gmail.com</span>.
                <span className="block mt-1.5 text-indigo-600/90 font-semibold bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/30">
                  💡 Note: If this is your first submission, please locate the FormSubmit activation email in splitlab.ng@gmail.com and click the confirmation link inside to authorize deliveries!
                </span>
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Honeypot spam filter */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                      <User className="w-3 h-3 mr-2 text-brand-primary" /> Your Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                      <Building2 className="w-3 h-3 mr-2 text-brand-primary" /> School Name
                    </label>
                    <input
                      required
                      type="text"
                      name="school"
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm font-medium"
                      placeholder="St. Mary's Academy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                    <Mail className="w-3 h-3 mr-2 text-brand-primary" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm font-medium"
                    placeholder="jane@school.edu"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                    <MessageSquare className="w-3 h-3 mr-2 text-brand-primary" /> How can we help?
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm font-medium"
                    placeholder="Tell us about your school's current tech landscape..."
                  ></textarea>
                </div>

                {errorOnSubmit && (
                  <p className="text-sm font-semibold text-rose-500 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">{errorOnSubmit}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-5 text-lg disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Inquiry...</span>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Request Partnership Info</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
