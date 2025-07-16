import { BsReddit, BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaProductHunt } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import  { useState } from 'react';
import { ExternalLink, Code, Smartphone, Globe, Zap } from 'lucide-react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Products', icon: Globe },
    { id: 'apps', label: 'Apps', icon: Smartphone },
    { id: 'tools', label: 'Tools', icon: Code },
    { id: 'ai', label: 'AI Powered', icon: Zap }
  ];

  const products = [
    {
      id: 'pcshare',
      title: 'PCShare',
      description: 'The simplest way to share files between your Desktop devices and friends. No sign-up, no hassle, just drag and drop.',
      link: 'pcshare.vercel.app',
      category: 'tools',
      tags: ['File sharing', 'Minimalistic', 'Privacy-First'],
      gradient: 'from-purple-600 via-purple-500 to-indigo-600',
      image: 'https://github.com/ProdevappOFFICIAL/PC-Share/raw/main/images/PCshare1.JPG?raw=true'
    },
    {
      id: 'leaningdeck',
      title: 'LearningDeck',
      description: 'An app that helps you recycle your plastic better using Artificial Intelligence. We built this in a week for a hackathon and won $11k, it was intense!',
      link: 'github.com/alyssaxuu/ecosnap',
      category: 'ai',
      tags: ['AI/ML', 'Sustainability', 'Mobile App'],
      gradient: 'from-green-600 via-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&h=300&fit=crop&crop=center'
    },
    {
      id: 'later',
      title: 'API Workspace & Studio',
      description: 'An offline-first API development environment for WIndows. It allows you to create, test, and manage APIs with ease.',
      link: 'apistudio.vercel.app',
      category: 'apps',
      tags: ['API', 'Development', 'Desktop App'],
      gradient: 'from-blue-600 via-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&crop=center'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Tabs */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-1 bg-gray-800/50 backdrop-blur-xl rounded-full p-2 w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 shadow-2xl hover:shadow-purple-500/10">
                  {/* Product Image */}
                  <div className="relative w-full h-72 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`}></div>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {product.title}
                      </h3>
                      <div className="flex space-x-1">
                        {product.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                      {product.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <a 
                      href={`https://${product.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-300 group-hover:text-purple-300"
                    >
                      <span className="font-medium">{product.link}</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Newsletter/Subscribe Section */}
      <section className="px-6 py-16 border-t border-gray-800/50">
        <div className="flex flex-col w-full items-center max-w-4xl mx-auto text-center space-y-2">
          {/* Avatar */}
          <img src="https://raw.githubusercontent.com/ProdevappOFFICIAL/ProdevappOFFICIAL/refs/heads/main/me.jpg" className="rounded-full" width={50} height={50} />

          {/* Text Content */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Subscribe to follow my maker journey, see my process behind the scenes, and much more. You can also support my work through{' '}
              <a 
                href="https://github.com/sponsors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                <span>GitHub Sponsors</span>
                <span className="text-yellow-400">✨</span>
              </a>
            </p>
          </div>

          {/* Subscribe Button */}
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-black font-semibold bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="relative z-10">Subscribe</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            ProdevappOFFICIAL © 2025
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">👻</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


function App() {

  return (
    <div className="flex flex-col  items-center h-full w-full bg-black text-gray-400 ">
      <div className="flex  items-center space-x-4 w-full justify-center py-4 ">
        <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <BsTwitterX className="w-6 h-6 text-zinc-400" size={14} />
        </div>
        <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <FaLinkedin className="w-6 h-6 text-zinc-400" size={14} />
        </div>
        <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <FaGithub className="w-6 h-6 text-zinc-400" size={14} />
        </div>

        <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <FaInstagram className="w-6 h-6 text-zinc-400" size={14} />
        </div>
         <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <BsReddit className="w-6 h-6 text-zinc-400" size={14} />
        </div>
           <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <FaProductHunt className="w-6 h-6 text-zinc-400" size={14} />
        </div>
          <div className="flex p-2 hover:bg-zinc-600 rounded-full items-center justify-center ">
          <FaDiscord className="w-6 h-6 text-zinc-400" size={14} />
        </div>
      </div>

      <div className="flex flex-col px-40 h-full w-full mt-20"> 
          <img src="https://raw.githubusercontent.com/ProdevappOFFICIAL/ProdevappOFFICIAL/refs/heads/main/me.jpg" className="rounded-md my-4" width={300} height={300} />

        <h1 className="flex w-full items-center text-xl  mb-4">I'm  <p className="text-white px-1">ProdevappOFFICIAL</p>, a Web Technology Developer, and Expert.
</h1>
        <p className="text-lg ">I've built and shipped 12+ products (with over 160K <br/> users), been 2 times a Product Hunt Maker of The Year finalist, and much more ✌</p>
    
    <p className="flex items-center w-full text-blue-500 mt-4 text-xl hover:cursor-pointer hover:text-blue-400 transition-all">Hire me <IoOpenOutline className="ml-1" /></p>
     
     <div className="flex flex-col space-y-4 py-10 "> 
    <ProductShowcase />
      </div>
      </div>
    </div>
  );
}

export default App;
