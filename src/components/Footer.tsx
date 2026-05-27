import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, Instagram, X, Linkedin } from 'lucide-react';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                Splitlab
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering the next generation of innovators through high-impact tech education and school partnerships.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/splitlab_innovation?igsh=MXI0dXZxNzFyZnFraQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-50 rounded-lg hover:bg-brand-primary hover:text-white transition-colors text-slate-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg hover:bg-brand-primary hover:text-white transition-colors text-slate-400">
                <X className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ibrahim-muhammadbellooth-0193a2397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-50 rounded-lg hover:bg-brand-primary hover:text-white transition-colors text-slate-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Programs</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/programs" className="hover:text-brand-primary transition-colors">Tech Classes</Link></li>
              <li><Link to="/programs" className="hover:text-brand-primary transition-colors">School Hackathons</Link></li>
              <li><Link to="/programs" className="hover:text-brand-primary transition-colors">Demo Days</Link></li>
              <li><Link to="/programs" className="hover:text-brand-primary transition-colors">Curriculum Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-brand-primary transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Partner With Us</Link></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>Splitlab.ng@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>09067864457</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-50 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 font-medium uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Splitlab Innovations Hub.</p>
          <div className="flex gap-6">
            <span>Curriculum Quality Certified</span>
            <span className="hidden md:inline">Future Skills Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
