import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Real-World Impact',
      description: 'We don\'t just teach syntax; we build solutions for community challenges.',
      icon: Target,
    },
    {
      title: 'Inclusive Technology',
      description: 'Tech is for everyone. We build environments where every student thrives.',
      icon: Users,
    },
    {
      title: 'Future Readiness',
      description: 'We equip students with the soft skills and mindset needed for 2030.',
      icon: ShieldCheck,
    },
    {
      title: 'Teacher Empowerment',
      description: 'We bridge the gap for educators, providing them the tools to guide students safely.',
      icon: Eye,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-indigo-soft py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-brand-dark">
              Pioneering <span className="text-brand-primary">Innovation</span> in Education
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Splitlab was born from a simple observation: the gap between traditional secondary education and the rapidly evolving tech industry was widening. We are here to bridge that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="section-card bg-slate-50 border-none">
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Mission</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                To equip secondary school students with the digital fluency, critical thinking, and collaborative skills necessary to thrive in an increasingly technology-driven world.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                A future where every secondary school graduate is not just a consumer of technology, but a confident creator and an ethical digital citizen.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-indigo-soft to-indigo-50/50 rounded-huge p-12 flex flex-col justify-center items-center text-center border border-indigo-100 relative overflow-hidden min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                
                <div className="relative z-10 py-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="text-6xl lg:text-7xl font-black text-brand-primary mb-4 tracking-tight">1,200+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-4">Practical Coding Hours Logged</p>
                  <p className="text-slate-600 max-w-xs mx-auto text-sm leading-relaxed font-medium">
                    Compiling, debugging, and building real-world projects directly by our secondary school students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tech Matters */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-brand-dark rounded-huge p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why tech education matters now</h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                The world is changing. By 2030, over 80% of jobs will require advanced digital skills. We help schools stay ahead of the curve.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{value.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-brand-dark mb-6 tracking-tight">Our Leadership</h2>
            <p className="text-lg text-slate-600 font-medium">
              Driven by a passion for education and a deep expertise in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "Ibrahim Muhammad Bello",
                role: "Founder of SPLITLAB",
                subrole: "Chief Innovation Officer & Tech Instructor",
                image: "input_file_0.png",
                bio: "A visionary technologist dedicated to bridging the digital divide in African secondary schools."
              },
              {
                name: "Ismael Garba",
                role: "Co-founder of SPLITLAB",
                subrole: "Operations Lead & Tech Instructor",
                image: "input_file_1.png",
                bio: "Expert in educational operations and curriculum development for emerging technologies."
              },
              {
                name: "Fatima Usman",
                role: "Operations, Communication & Community Lead",
                subrole: "SPLITLAB Leadership Team",
                image: "", // Placeholder/no image required since pictures were removed anyway
                bio: "Passionate community champion managing partnerships, communications, and student relations to expand SPLITLAB's impact."
              }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 bg-white rounded-huge shadow-sm border border-slate-100 hover:border-brand-primary/20 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-indigo-soft flex items-center justify-center mx-auto mb-6 text-brand-primary text-xl font-extrabold group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h3>
                  <p className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">{member.bio}</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{member.subrole}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
