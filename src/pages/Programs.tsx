import { motion } from 'motion/react';
import { Code, Trophy, Presentation, CheckCircle2, Monitor, Cpu, Bot, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const curriculumTracks = [
    {
      title: 'Computer Literacy',
      description: 'Mastering the fundamentals of digital environments, file management, and hardware architecture.',
      icon: Monitor,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'AI & Automation',
      description: 'Understanding LLMs, prompt engineering, and building automated workflows for productivity.',
      icon: Bot,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Robotics',
      description: 'Hands-on engineering focusing on IoT, circuitry, and embedded systems programming.',
      icon: Settings2,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const programs = [
    {
      id: 'classes',
      title: 'Weekly Tech Classes',
      subtitle: 'The Core Curriculum',
      description: 'Our weekly classes integrate directly into the school timetable. We provide the curriculum, the platform, and specialized instructors to guide students through the complexities of modern tech.',
      features: [
        'Advanced Computer Literacy',
        'AI & Machine Learning Foundations',
        'Robotics & Hardware Engineering',
        'Full-Stack Web Development',
        'Digital Ethics & Cybersecurity',
      ],
      benefits: 'Students build a portfolio of real applications while mastering core logic and problem-solving skills.',
      icon: Code,
      accentColor: 'from-indigo-500 to-brand-primary',
      bgLight: 'bg-indigo-50/40',
    },
    {
      id: 'hackathons',
      title: 'School Hackathons',
      subtitle: 'Innovation Under Pressure',
      description: 'A 24 or 48-hour event that turns the school into a buzzing startup factory. Students form teams, brainstorm solutions to specific themes, and build prototypes.',
      features: [
        'Expert Mentorship from Devs',
        'Industry-Standard Tools',
        'Pitch Deck Preparation',
        'Team Leadership Training',
        'Collaboration Workshops',
      ],
      benefits: 'Boosts collaborative spirit, time management, and resilience. Students experience the lifecycle of an idea.',
      icon: Trophy,
      accentColor: 'from-blue-500 to-sky-500',
      bgLight: 'bg-blue-50/40',
    },
    {
      id: 'demo-day',
      title: 'Splitlab Demo Day',
      subtitle: 'The Grand Showcase',
      description: 'A milestone event where students present their final projects to a panel of judges, investors, and parents. It is a celebration of creativity and hard work.',
      features: [
        'Live Product Demonstrations',
        'Networking Opportunities',
        'Award Categories & Prizes',
        'Professional Feedback',
        'Project Exhibition Stalls',
      ],
      benefits: 'Develops public speaking, confidence, and narrative-building. Great for school prestige and parent engagement.',
      icon: Presentation,
      accentColor: 'from-violet-500 to-indigo-500',
      bgLight: 'bg-violet-50/40',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">Impact-Driven <span className="text-brand-primary">Programs</span></h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              We design experiences that empower students to transition from digital consumers to digital creators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Pillars */}
      <section className="py-16 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">The Splitlab Curriculum</h2>
            <h3 className="text-3xl font-bold text-brand-dark">Our Structured Core Pillars</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {curriculumTracks.map((track, idx) => (
              <motion.div 
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${track.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <track.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-brand-dark">{track.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{track.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-24 space-y-32">
        {programs.map((program, index) => (
          <section key={program.id} id={program.id} className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className={`inline-block px-4 py-1.5 rounded-full bg-slate-50 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6`}>
                  {program.subtitle}
                </div>
                <h2 className="text-4xl font-bold mb-6 text-brand-dark tracking-tight">{program.title}</h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                  {program.description}
                </p>
                <div className="space-y-4 mb-8">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className={`w-5 h-5 text-brand-primary`} />
                      <span className="font-bold text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className={`section-card bg-slate-50 border-none !p-8`}>
                  <p className="font-bold text-[10px] uppercase tracking-widest text-slate-500 mb-2">The Outcome</p>
                  <p className="text-slate-800 italic text-sm font-medium">{program.benefits}</p>
                </div>
              </div>
              <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className={`aspect-square rounded-huge ${program.bgLight} border border-slate-100 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-500`}>
                  {/* Glowing background bubble */}
                  <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gradient-to-br ${program.accentColor} opacity-5 blur-3xl group-hover:scale-125 transition-transform duration-700`} />
                  
                  <div className={`w-24 h-24 rounded-3xl bg-white shadow-lg shadow-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 border border-slate-50`}>
                    <program.icon className="w-12 h-12 text-brand-primary" />
                  </div>
                  
                  <p className="text-2xl font-black text-brand-dark mb-2 tracking-tight relative z-10">{program.title}</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-primary/80 relative z-10 mb-6">{program.subtitle}</p>
                  
                  <div className="h-1.5 w-12 rounded bg-gradient-to-r from-brand-primary to-brand-primary/50 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-brand-light py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-bold mb-8 text-brand-dark">Ready to transform your school?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn-primary">Get the Prospectus</Link>
            <Link to="/how-it-works" className="btn-secondary">See Partnership Model</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
