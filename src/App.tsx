import { BsReddit, BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaProductHunt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { ExternalLink, Code, Smartphone, Globe, Zap, Mail, MapPin, Calendar, Award, TrendingUp, BookOpen, Coffee, GitBranch, Star } from 'lucide-react';

// Professional Stats Component
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: GitBranch, value: '63', label: 'Repositories', color: 'text-blue-400' },
    { icon: Star, value: '22', label: 'GitHub Stars', color: 'text-green-400' },
    { icon: Coffee, value: '332', label: 'Contributions', color: 'text-purple-400' },
    { icon: Code, value: '2', label: 'Organizations', color: 'text-yellow-400' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col items-center text-center">
            <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Skills Component
const SkillsSection = () => {
  const skills = [
    { name: 'Rust/Systems Programming', level: 95, color: 'bg-orange-500' },
    { name: 'React/TypeScript', level: 92, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 88, color: 'bg-green-500' },
    { name: 'Next.js/Full-Stack', level: 90, color: 'bg-purple-500' },
    { name: 'Electron/Desktop Apps', level: 85, color: 'bg-pink-500' },
    { name: 'WebAssembly/Performance', level: 80, color: 'bg-indigo-500' }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Product Showcase
const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'apps', label: 'Applications', icon: Smartphone },
    { id: 'tools', label: 'Developer Tools', icon: Code },
    { id: 'ai', label: 'AI/ML Projects', icon: Zap }
  ];

  const products = [
    {
      id: 'pcshare',
      title: 'PC-Share',
      description: 'Always-on, lightning-fast file sharing desktop app for instant desktop-to-desktop transfers with a clean UI. Built with JavaScript and modern web technologies.',
      link: 'github.com/ProdevappOFFICIAL/PC-Share',
      category: 'tools',
      tags: ['JavaScript', 'Electron', 'File Sharing', 'Desktop App'],
      gradient: 'from-purple-600 via-purple-500 to-indigo-600',
      image: 'https://github.com/ProdevappOFFICIAL/PC-Share/raw/main/images/PCshare1.JPG?raw=true',
      metrics: { language: 'JavaScript', stars: '⭐' }
    },
    {
      id: 'apistudio',
      title: 'API Workbench Studio',
      description: 'Offline PostMAN alternative built with TypeScript. Professional API development environment with advanced testing capabilities.',
      link: 'github.com/ProdevappOFFICIAL/API-WORKBENCH-STUDIO',
      category: 'apps',
      tags: ['TypeScript', 'API Testing', 'Electron', 'Developer Tools'],
      gradient: 'from-blue-600 via-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&crop=center',
      metrics: { language: 'TypeScript', stars: '⭐' }
    },
    {
      id: 'simulsol',
      title: 'SIMULSOL',
      description: 'Open-source Solana smart contract testing and simulation platform. Built with TypeScript for blockchain developers and researchers.',
      link: 'https://github.com/SIMULSOL/SIMULSOL-ELECTRON',
      category: 'tools',
      tags: ['TypeScript', 'Blockchain', 'Solana', 'Smart Contracts'],
      gradient: 'from-green-600 via-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&crop=center',
      metrics: { language: 'TypeScript', stars: '⭐' }
    },
  
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(product => product.category === activeTab);

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Open-source projects and applications built with modern technologies. Focus on performance, usability, and maintainability.
        </p>
      </div>

      {/* Enhanced Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-1 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-700/50">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Enhanced Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="group cursor-pointer transform transition-all duration-700 hover:scale-105"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 shadow-2xl hover:shadow-purple-500/20">
              {/* Enhanced Product Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30`}></div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                {/* Metrics Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-gray-600/50">
                    {product.metrics.language}
                  </span>
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-yellow-400 text-xs rounded-full border border-gray-600/50">
                    {product.metrics.stars}
                  </span>
                </div>
              </div>

              {/* Enhanced Product Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {product.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {product.description}
                </p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-700/60 to-gray-800/60 text-gray-200 text-xs rounded-full border border-gray-600/40 hover:border-gray-500/60 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced Link */}
                <a
                  href={`https://${product.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300 group-hover:text-blue-300 font-medium"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    { icon: BsTwitterX, href: 'https://x.com/oyewaleprudence', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/prodevapp', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/ProdevappOFFICIAL', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com/prodevapp', label: 'Instagram' },
    { icon: BsReddit, href: 'https://reddit.com/u/prodevapp', label: 'Reddit' },
    { icon: FaProductHunt, href: 'https://producthunt.com/@prodevapp', label: 'Product Hunt' },
    { icon: FaDiscord, href: 'https://discord.gg/prodevapp', label: 'Discord' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation/Social Links */}
      <nav className="relative z-10 flex justify-center py-8">
        <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-xl rounded-2xl p-3 border border-gray-700/50">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {social.label}
              </div>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for opportunities</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-400">I'm</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                 Oyewale Prudence
                </span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                  Full-Stack Web Developer Expert
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Building modern, scalable, and performant web applications using Electron, Rust, Next.js, TypeScript, and React.js.
                  Results-driven developer with strong foundation in systems programming and frontend engineering.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} className="text-blue-400" />
                <span>Remote • Available Worldwide</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <Mail className="w-5 h-5 mr-2" />
                <span>Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl font-semibold text-white border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                <span>View Resume</span>
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                <img
                  src="/me.jpg" alt="ProdevappOFFICIAL - Full Stack Developer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-3 shadow-lg animate-bounce">
                  <Award className="w-6 h-6 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <StatsSection />
      </section>

      {/* Skills Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <SkillsSection />
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            Development Philosophy
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Guiding principles that drive my approach to building exceptional software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Performance-first', desc: 'Build fast, feel fast.', icon: '⚡' },
            { title: 'Type safety matters', desc: 'Catch bugs before they ship.', icon: '🛡️' },
            { title: 'Simple > Clever', desc: 'Clarity in code beats unnecessary complexity.', icon: '✨' },
            { title: 'Consistency wins', desc: 'Small improvements daily compound over time.', icon: '📈' },
            { title: 'Clean Code', desc: 'Crafting code that speaks for itself.', icon: '🎯' },
            { title: 'Production-ready', desc: 'Always building for real-world use.', icon: '🚀' }
          ].map((principle, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="text-3xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
              <p className="text-gray-400">{principle.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Current Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Building high-performance APIs in Rust with Axum',
              'Building high-performance file-sharing applications',
              'Exploring WebAssembly integrations in frontend-heavy applications',
              'Creating high performance applications in Rust'
            ].map((project, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <ProductShowcase />
      </section>

      {/* Contact/Newsletter Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Ready to turn your ideas into reality? I'm available for freelance projects,
                full-time opportunities, and consulting engagements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Mail className="w-5 h-5 mr-2" />
                <span>Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>

              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl font-semibold text-white border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2025 ProdevappOFFICIAL. Crafted with passion and precision.</p>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Powered by modern web technologies</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Online</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
