"use client";

import Link from "next/link";
import { Code, MessageCircle, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass border-t border-white/10 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-electric-500/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-neon-400 mb-4">
              Synapse AI
            </h3>
            <p className="text-gray-400 max-w-sm mb-6">
              The world&apos;s most advanced multi-model orchestration platform. 
              Empowering developers and businesses with adaptive intelligence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 glass rounded-lg hover:text-electric-400 transition-colors">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="p-2 glass rounded-lg hover:text-neon-400 transition-colors">
                <Code size={20} />
              </Link>
              <Link href="#" className="p-2 glass rounded-lg hover:text-purple-400 transition-colors">
                <Briefcase size={20} />
              </Link>
              <Link href="#" className="p-2 glass rounded-lg hover:text-electric-400 transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-electric-400">Models</Link></li>
              <li><Link href="#" className="hover:text-electric-400">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-electric-400">Security</Link></li>
              <li><Link href="#" className="hover:text-electric-400">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-neon-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-neon-400">Blog</Link></li>
              <li><Link href="#" className="hover:text-neon-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-neon-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Synapse AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
