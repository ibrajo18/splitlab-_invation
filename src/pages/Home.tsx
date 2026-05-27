import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const highlights = [
    {
      title: 'Weekly Tech Classes',
      description: 'Expert-led sessions integrated into the school timetable, covering coding, AI, and design.',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'School Hackathons',
      description: 'Intensive innovation challenges where students solve real problems with technology.',
      icon: <Shield className="w-6 h-6" />,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Demo Day Events',
      description: 'High-production events showcasing student projects to leaders and investors.',
      icon: <Target className="w-6 h-6" />,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                Innovation Hub
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-[1.05] tracking-tight mb-8">
                The New Standard for <span className="text-brand-primary">School Tech</span> Education
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10 font-medium">
                We partner with leading secondary schools to deliver a world-class technology curriculum that prepares students for the global digital economy.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/contact" className="btn-primary !px-10 !py-4 shadow-2xl shadow-indigo-200">
                  Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/programs" className="btn-secondary !px-10 !py-4">
                  Explore Programs
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[40px] shadow-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Decorative Elements */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Innovation First</p>
                      <p className="text-white/60 text-xs">Curriculum developed by tech experts</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="text-3xl font-bold text-brand-dark mb-1">Active</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Pilot Phase</div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-dark p-6 rounded-3xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Students Inspired</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">OUR PIONEERING PARTNER SCHOOL</p>
          <div className="flex flex-wrap justify-center gap-12">
            <span className="text-xl md:text-2xl font-extrabold text-brand-dark px-6 py-2 border-l-4 border-brand-primary tracking-wide">
              Future Leaders International Schools
            </span>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">Our Core Offerings</h2>
            <p className="text-lg text-slate-600 font-medium">
              We provide a comprehensive ecosystem designed to turn students into creators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 font-medium">{item.description}</p>
                <Link to="/programs" className="text-brand-primary font-bold text-sm flex items-center group/link">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section: School Centric */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid gap-12">
                {[
                  {
                    title: "Expert Faculty",
                    text: "No more searching for tech teachers. We deploy experts directly to your campus."
                  },
                  {
                    title: "Modern Tools",
                    text: "Access to the latest software and hardware for state-of-the-art learning."
                  },
                  {
                    title: "Global Network",
                    text: "Connect with students and innovators in our worldwide digital ecosystem."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h4>
                      <p className="text-slate-600 font-medium">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8 tracking-tight">The Modern School Infrastructure</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                Traditional education is static; technology is dynamic. Splitlab solves the implementation challenge by providing schools with a ready-to-use innovation department.
              </p>
              <div className="p-8 bg-brand-dark rounded-[40px] text-white">
                <blockquote className="text-xl font-serif italic mb-6 leading-relaxed">
                  "Splitlab has transformed how our students experience technology. They shifted from memorizing definitions to building real, creative code during our weekly pilot sessions."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-brand-primary flex items-center justify-center font-bold text-white text-lg border border-white/20">
                    FM
                  </div>
                  <div>
                    <p className="font-bold text-sm">Director of Academics & Head Teacher</p>
                    <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest leading-none">Future Leaders International Schools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-brand-primary rounded-[50px] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)]"></div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight relative z-10 leading-tight">
              Bring World-Class Tech <br className="hidden lg:block"/> to Your School.
            </h2>
            <p className="text-indigo-50 text-xl max-w-2xl mx-auto mb-12 relative z-10 font-medium">
              Join forward-thinking schools partnering with Splitlab to pioneer practical tech skills.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-medium">
              <Link to="/contact" className="px-12 py-5 bg-white text-brand-primary font-bold rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all outline-none">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

