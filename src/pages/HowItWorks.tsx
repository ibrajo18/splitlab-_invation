import { motion } from 'motion/react';
import { Search, ClipboardList, PenTool, Rocket, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Consultation & Audit',
      description: 'We meet with school leadership to understand your specific goals, current tech infrastructure, and student needs.',
      icon: Search,
      color: 'bg-blue-500',
    },
    {
      title: 'Curriculum Customization',
      description: 'Our academic team tailors the Splitlab curriculum to fit your existing timetable and educational standards.',
      icon: ClipboardList,
      color: 'bg-indigo-500',
    },
    {
      title: 'Infrastructure Setup',
      description: 'We help you optimize your school lab or classroom for collaborative, project-based tech learning.',
      icon: PenTool,
      color: 'bg-purple-500',
    },
    {
      title: 'Program Launch',
      description: 'Classes begin with our certified instructors, or we train your staff to deliver the Splitlab experience.',
      icon: Rocket,
      color: 'bg-pink-500',
    },
    {
      title: 'Innovation Milestone',
      description: 'We cap off the term or year with a high-impact School Hackathon and a community Demo Day.',
      icon: PartyPopper,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-indigo-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-brand-dark tracking-tight">The <span className="text-brand-primary">Partnership</span> Path</h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
              We've developed a seamless "School-in-a-Box" model that makes integrating world-class tech education simple for administrators.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-100 -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Step Content */}
                  <div className={`w-full lg:w-5/12 px-8 py-10 rounded-huge section-card border-none z-10 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.color} text-white mb-6 lg:hidden`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-dark">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">{step.description}</p>
                  </div>

                  {/* Icon Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-indigo-50 z-20 items-center justify-center shadow-lg shadow-indigo-100">
                    <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Empty Spacer for desktop */}
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white text-center flex items-center justify-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Start the journey today.</h2>
            <p className="text-slate-300 mb-12 text-lg font-medium">
              Most schools can complete the onboarding process in as little as 4 weeks.
            </p>
            <Link to="/contact" className="btn-primary !px-12 !py-5 bg-white text-brand-primary hover:bg-slate-50 transition-all text-xl shadow-2xl">
               Schedule a Discovery Call
            </Link>
          </div>
      </section>
    </div>
  );
}
