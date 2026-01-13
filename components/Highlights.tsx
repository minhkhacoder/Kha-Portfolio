import React from "react";
import { Cpu, Network, Zap, ShieldCheck } from "lucide-react";

const Highlights: React.FC = () => {
  const highlightItems = [
    {
      title: "Distributed Systems",
      description:
        "Expertise in designing event-driven microservices using Kafka for decoupled, reliable communication across complex architectures.",
      icon: <Network size={28} />,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/20",
    },
    {
      title: "Orchestration & DevOps",
      description:
        "Proficient in Dockerizing applications and managing containerized workloads with Kubernetes for high availability and scalability.",
      icon: <ShieldCheck size={28} />,
      gradient: "from-indigo-500 to-purple-500",
      shadowColor: "shadow-indigo-500/20",
    },
    {
      title: "AI & Intelligent Agents",
      description:
        "Experience in building intelligent systems and AI agents that utilize LLMs to automate complex tasks and improve user experiences.",
      icon: <Cpu size={28} />,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/20",
    },
    {
      title: "High-Performance Caching",
      description:
        "Implementing low-latency data access patterns with Redis and distributed databases like PostgreSQL and MongoDB.",
      icon: <Zap size={28} />,
      gradient: "from-amber-500 to-orange-500",
      shadowColor: "shadow-amber-500/20",
    },
  ];

  return (
    <section id="highlights" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-blue-500/10 rounded-xl rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-[15%] w-24 h-24 border border-purple-500/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 left-[5%] w-16 h-16 bg-indigo-500/5 rounded-lg rotate-45 animate-float-delayed"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Specializations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-slate-400 text-lg">
            Beyond general full-stack development, my career is centered on building the nervous systems of modern
            software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 perspective-container">
          {highlightItems.map((item, index) => (
            <div
              key={index}
              className={`rotate-3d group p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl ${item.shadowColor}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>

              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-10 blur-xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
