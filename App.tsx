import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Play, MapPin, Phone, 
  Award, Users, Video, Camera, Star, ArrowRight 
} from 'lucide-react';

// === DATA MATHIS NICCO ===
const PERSONAL = {
  name: "Mathis Nicco",
  title: "Créateur de Contenus Audiovisuels & Stratège Digital",
  subtitle: "Apprenti en Marketing Digital & Communication Audiovisuelle",
  email: "mathis.nicco@gmail.com",
  phone: "07 66 11 52 06",
  location: "Yerres, France",
  bio: "Étudiant en 2ème année de Bachelor en Marketing Digital et Communication Audiovisuelle. Passionné par la création de contenus vidéo impactants, le montage créatif et la stratégie digitale. J'aime transformer des idées en histoires visuelles captivantes."
};

const EXPERIENCES = [
  {
    period: "Sept 2025 - Aujourd'hui",
    role: "Alternance Customer Success & Communication Clients",
    company: "JameSpot",
    description: "Montage de capsules vidéo explicatives. Création de contenus pédagogiques et supports digitaux pour l'équipe Customer Success.",
    tags: ["Premiere Pro", "After Effects", "CapCut"]
  },
  {
    period: "Sept 2025",
    role: "Stage Communication & Marketing Digital",
    company: "SWIM STARS",
    description: "Création de contenus photo/vidéo pour les réseaux sociaux. Développement de la stratégie digitale et participation aux visites techniques.",
    tags: ["TikTok", "Instagram", "Canva"]
  },
  {
    period: "Août 2025",
    role: "Employé Services à la Personne",
    company: "Mairie de Yerres",
    description: "Organisation d'événements, gestion des espaces verts et participation à la journée portes ouvertes.",
    tags: ["Événementiel", "Communication"]
  }
];

const SKILLS = [
  { name: "Montage Vidéo", tools: ["Premiere Pro", "After Effects", "CapCut"], icon: <Video className="w-6 h-6" /> },
  { name: "Design & Graphisme", tools: ["Illustrator", "InDesign", "Canva"], icon: <Camera className="w-6 h-6" /> },
  { name: "Réseaux Sociaux", tools: ["TikTok", "Instagram", "Stratégie"], icon: <Users className="w-6 h-6" /> },
  { name: "Marketing Digital", tools: ["Branding", "E-commerce", "WordPress"], icon: <Star className="w-6 h-6" /> }
];

const PROJECT_IDEAS = [
  {
    title: "Showreel Personnel",
    desc: "Montage dynamique de 60 secondes regroupant vos meilleurs clips, transitions créatives et motion design.",
    type: "Vidéo"
  },
  {
    title: "Série TikTok Éducative",
    desc: "Capsule courte sur l’alimentation sportive (votre projet e-book) avec visuels animés et voix off.",
    type: "Contenu Social"
  },
  {
    title: "Mini-documentaire Local",
    desc: "Portrait vidéo de 3 minutes sur un artisan ou une association de Yerres.",
    type: "Documentaire"
  },
  {
    title: "Motion Design Branding",
    desc: "Animation de logo et identité visuelle pour votre marque personnelle.",
    type: "Motion Design"
  }
];

// Manga-style background pattern (CSS + SVG)
const MangaBackground = () => (
  <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mangaLines" patternUnits="userSpaceOnUse" width="120" height="120">
          {/* Manga style speed lines */}
          <path d="M0 20 L120 20" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 60 L120 60" stroke="#fff" strokeWidth="1" />
          <path d="M0 100 L120 100" stroke="#fff" strokeWidth="1.5" />
          {/* Abstract film frames */}
          <rect x="15" y="35" width="90" height="50" fill="none" stroke="#fff" strokeWidth="1" />
          <rect x="25" y="45" width="20" height="10" fill="none" stroke="#fff" strokeWidth="0.5" />
          <rect x="75" y="45" width="20" height="10" fill="none" stroke="#fff" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mangaLines)" />
    </svg>
  </div>
);

export default function MathisNiccoPortfolio() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      <MangaBackground />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">MATHIS NICCO</div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#apropos" className="hover:text-[#00E5C4] transition-colors">À propos</a>
            <a href="#experiences" className="hover:text-[#00E5C4] transition-colors">Expériences</a>
            <a href="#competences" className="hover:text-[#00E5C4] transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-[#00E5C4] transition-colors">Idées Projets</a>
            <a href="#contact" className="hover:text-[#00E5C4] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        <div className="max-w-5xl px-6 text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-sm mb-6 border border-white/10">
              <div className="w-2 h-2 bg-[#00E5C4] rounded-full animate-pulse" /> Disponible en alternance
            </div>

            <h1 className="text-[72px] md:text-[92px] font-black tracking-tighter leading-none mb-4">
              MATHIS<br />NICCO
            </h1>
            <p className="text-2xl text-[#00E5C4] font-medium mb-4">{PERSONAL.title}</p>
            <p className="max-w-lg mx-auto text-gray-400 text-lg mb-10">{PERSONAL.bio}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-semibold rounded-2xl flex items-center gap-2 hover:bg-[#00E5C4] hover:text-black transition-all"
              >
                Découvrir mes projets <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 border border-white/30 font-semibold rounded-2xl flex items-center gap-2 hover:bg-white/10"
              >
                <Play className="w-4 h-4" /> Voir mon Showreel
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 text-sm text-gray-500 flex flex-col items-center">
          Scroll pour découvrir <ArrowRight className="rotate-90 mt-1" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="apropos" className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                alt="Mathis Nicco" 
                className="w-full h-full object-cover grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="uppercase tracking-[3px] text-[#00E5C4] text-sm font-semibold mb-3">Qui suis-je ?</div>
            <h2 className="text-5xl font-bold leading-none tracking-tight mb-6">Créer des histoires<br />qui marquent.</h2>
            <div className="text-lg text-gray-400 max-w-xl">
              Passionné par le montage vidéo et la communication digitale depuis plusieurs années. 
              Actuellement en alternance chez JameSpot, je combine créativité technique et stratégie de contenu.
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div><div className="text-3xl font-bold text-[#00E5C4]">2</div><div className="text-sm text-gray-500">Années d'études</div></div>
              <div><div className="text-3xl font-bold text-[#00E5C4]">4</div><div className="text-sm text-gray-500">Expériences pro</div></div>
              <div><div className="text-3xl font-bold text-[#00E5C4]">+15</div><div className="text-sm text-gray-500">Projets réalisés</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="bg-[#111] py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-[#00E5C4]" />
            <span className="uppercase tracking-widest text-sm text-[#00E5C4]">Parcours</span>
          </div>
          
          <h2 className="text-5xl font-bold tracking-tight mb-16">Mes expériences<br />professionnelles</h2>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="border-l-2 border-[#00E5C4]/30 pl-8 relative">
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#00E5C4] rounded-full" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <div className="text-[#00E5C4] font-mono text-sm">{exp.period}</div>
                    <div className="text-2xl font-semibold">{exp.role}</div>
                  </div>
                  <div className="text-xl text-gray-400 mt-1 md:mt-0">{exp.company}</div>
                </div>
                <p className="text-gray-400 max-w-3xl mb-4">{exp.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1 text-xs rounded-full border border-white/10 bg-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETENCES */}
      <section id="competences" className="py-20 max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-14">
          <div className="text-[#00E5C4] uppercase tracking-[3px] text-sm mb-2">Expertise</div>
          <h2 className="text-5xl font-bold tracking-tighter">Mes outils<br />et compétences</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-white/10 bg-zinc-950 hover:border-[#00E5C4]/50 transition-all group">
              <div className="text-[#00E5C4] mb-6 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <div className="font-bold text-2xl mb-4">{skill.name}</div>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-white/5 rounded-full">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IDÉES DE PROJETS PERSONNELS */}
      <section id="projets" className="bg-zinc-950 py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#00E5C4] text-sm uppercase tracking-[4px]">Créativité</div>
            <h2 className="text-5xl font-bold tracking-tight mt-2">Idées de projets<br />personnels</h2>
            <p className="mt-4 text-gray-400 max-w-md mx-auto">Voici quelques idées de contenus vidéo et de communication que je pourrais réaliser pour enrichir mon portfolio.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECT_IDEAS.map((idea, index) => (
              <div key={index} className="group p-9 rounded-3xl border border-white/10 bg-black hover:bg-zinc-900 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-sm uppercase tracking-widest text-[#00E5C4]">{idea.type}</div>
                  <Play className="text-white/40 group-hover:text-[#00E5C4] transition-colors" />
                </div>
                <div className="font-semibold text-3xl mb-3 tracking-tight">{idea.title}</div>
                <p className="text-gray-400 text-lg">{idea.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <div className="text-[#00E5C4] tracking-[4px] text-sm mb-3">TRAVAILLONS ENSEMBLE</div>
          <h2 className="text-6xl font-bold tracking-tighter">Prêt à créer<br />quelque chose d'incroyable ?</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg mb-14">
          <a href={`mailto:${PERSONAL.email}`} className="flex items-center gap-3 px-8 py-4 bg-[#00E5C4] text-black font-semibold rounded-2xl hover:bg-white transition-all">
            <Mail className="w-5 h-5" /> {PERSONAL.email}
          </a>
          <a href={`tel:${PERSONAL.phone}`} className="flex items-center gap-3 px-8 py-4 border border-white/30 rounded-2xl hover:bg-white/5 transition-all">
            <Phone className="w-5 h-5" /> {PERSONAL.phone}
          </a>
        </div>

        <div className="text-gray-400 text-sm flex justify-center gap-8">
          <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {PERSONAL.location}</div>
          <div>Anglais B1 • Allemand A2</div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mathis Nicco — Portfolio Créatif
      </footer>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" onClick={() => setShowVideo(false)}>
          <div className="max-w-4xl w-full">
            <div className="aspect-video bg-zinc-900 rounded-3xl flex items-center justify-center relative border border-white/20">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-[#00E5C4] flex items-center justify-center mb-6">
                  <Play className="w-9 h-9 text-black ml-1" />
                </div>
                <p className="text-2xl font-medium mb-2">Showreel 2025</p>
                <p className="text-gray-400">Vidéo à intégrer ici (YouTube / Vimeo)</p>
              </div>
            </div>
            <button onClick={() => setShowVideo(false)} className="block mx-auto mt-6 text-sm text-white/70 hover:text-white">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
