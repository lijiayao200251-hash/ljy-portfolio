import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  User, 
  Briefcase, 
  BookText, 
  Mail, 
  Github, 
  Twitter, 
  Instagram, 
  ArrowRight,
  Code2,
  Palette,
  Layout as LayoutIcon,
  FolderOpen,
  FileText,
  Search,
  ExternalLink,
  ChevronRight,
  BadgeCheck,
  Zap
} from 'lucide-react';
import { useState, useMemo } from 'react';

// --- Types ---
type Tab = 'home' | 'about' | 'works' | 'articles';

const TAB_LABELS: Record<Tab, string> = {
  home: '首页',
  about: '关于我',
  works: '我的作品',
  articles: '我的文章'
};

// --- Shared Components ---
const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
      active 
        ? 'bg-emerald-50 text-emerald-600 shadow-sm' 
        : 'text-stone-500 hover:bg-stone-50'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
    {active && <ChevronRight size={16} className="ml-auto" />}
  </button>
);

// --- Home Component ---
const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-8 space-y-6"
      >
        <div className="bento-card relative overflow-hidden group min-h-[400px] flex items-center">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8">
              我是 <br />
              <span className="text-emerald-500">李佳遥</span>
            </h1>
            <p className="text-stone-500 text-lg max-w-md leading-relaxed mb-8">
              一名具有视觉传达背景的产品经理。我擅长从用户洞察出发，用商业思维驱动产品落地。
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Github, Mail].map((Icon, i) => (
                <button key={i} className="p-3 bg-stone-100 rounded-xl hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
          {/* Abstract Shape Decoration */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bento-card p-10 flex flex-col justify-center">
            <div className="text-4xl font-bold mb-2 tracking-tight">6+</div>
            <p className="text-stone-500 text-sm font-medium">策划国际展览，跨区多业务项目管理经验</p>
          </div>
          <div className="bento-card p-10 flex flex-col justify-center">
            <div className="text-4xl font-bold mb-2 tracking-tight">200+</div>
            <p className="text-stone-500 text-sm font-medium">输出高质量设计物料，深度赋能业务增长</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-4"
      >
        <div className="bento-card bg-stone-100 aspect-[4/5] relative overflow-hidden group p-0">
          <img 
            src="/src/assets/images/hero_shanghai_street.jpg" 
            alt="李佳遥" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-stone-900">
            <div className="text-2xl font-bold tracking-tight italic">创意驱动</div>
            <div className="p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-sm font-medium leading-relaxed">熟练运用 AI 工具赋能产品创新，实现全链路产品闭环。</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- About Component ---
const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-12 py-8"
    >
      <div className="bento-card">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-stone-100 shrink-0 border-4 border-emerald-500/20 shadow-xl">
             <img 
               src="/src/assets/images/formal_avatar.jpg" 
               alt="李佳遥" 
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover" 
             />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight mb-2">李佳遥</h2>
            <p className="text-stone-500 font-medium">产品经理 | 视觉传达设计背景</p>
          </div>
        </div>

        <div className="prose prose-stone max-w-none space-y-6 text-stone-600 leading-relaxed text-lg">
          <p>
            设计转产品复合背景，兼具用户体验洞察与商业结果思维，擅长从需求到落地的全链路产品闭环。
          </p>
          <p>
            熟练运用 AI 工具（Claude code/lovart/Gemini）赋能产品创新与流程提效，有跨区域多业务线项目管理经验。掌握产品需求调研、竞品分析、流程搭建与数据复盘方法，能快速将业务诉求转化为可落地方案。
          </p>
        </div>
        
        <div className="mt-16 pt-16 border-t border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Mail size={24} className="text-emerald-500" />
              个人资料
            </h3>
            <ul className="space-y-4 text-stone-500 font-semibold italic">
              <li className="flex items-center gap-3 border-b border-stone-50 pb-2">
                <span className="w-12 text-xs text-stone-400">电话:</span> 
                (+86) 18800417229
              </li>
              <li className="flex items-center gap-3 border-b border-stone-50 pb-2">
                <span className="w-12 text-xs text-stone-400">邮箱:</span> 
                ljy200251@163.com
              </li>
              <li className="flex items-center gap-3">
                <span className="w-12 text-xs text-stone-400">意向:</span> 
                产品经理
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Palette size={24} className="text-emerald-500" />
              专业能力
            </h3>
            <ul className="space-y-4 text-stone-500 font-semibold">
              <li className="flex items-center gap-3"><BadgeCheck size={18} className="text-emerald-500" /> 全链路产品研发</li>
              <li className="flex items-center gap-3"><BadgeCheck size={18} className="text-emerald-500" /> 商业视觉设计</li>
              <li className="flex items-center gap-3"><BadgeCheck size={18} className="text-emerald-500" /> AI 提效工作流</li>
              <li className="flex items-center gap-3"><BadgeCheck size={18} className="text-emerald-500" /> 跨文化项目管理</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 size={24} className="text-emerald-500" />
              工具箱
            </h3>
            <ul className="space-y-4 text-stone-500 font-semibold">
              <li className="flex items-center gap-3"><Zap size={18} className="text-emerald-500" /> Claudecode / Gemini</li>
              <li className="flex items-center gap-3"><Zap size={18} className="text-emerald-500" /> Figma / Ps / Pr</li>
              <li className="flex items-center gap-3"><Zap size={18} className="text-emerald-500" /> Midjourney / AI 生成</li>
              <li className="flex items-center gap-3"><Zap size={18} className="text-emerald-500" /> 剪影 / CapCut</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bento-card">
        <h3 className="text-3xl font-bold mb-10">工作经历</h3>
        <div className="space-y-12">
          {[
            { 
              title: '数字化部 设计师', 
              company: '上海寸心创意科技', 
              year: '2024.10 - 2026.5', 
              desc: '负责实物类产品设计创新。统筹国内外 6+ 场国际展会视觉设计，完成品牌视觉统一与曝光度提升。承担 SaaS 云服务宣发设计，制定反馈快速优化方案。' 
            },
            { 
              title: '创意设计实习生', 
              company: '瀚懿设计', 
              year: '2023.08 - 2024.4', 
              desc: '独立负责 3+ 品牌全案设计。主导云栖民宿 0 到 1 品牌全案，定义 Logo、色彩、字体等全套 VI 系统。协助资深设计师完成客户需求评审与后期修改。' 
            },
            { 
              title: '视觉传达设计 学生', 
              company: '东北农业大学 (211)', 
              year: '2020 - 2024', 
              desc: '在校期间在各类行业品牌设计项目中实践，提升团队协作效率 20%。' 
            },
          ].map((exp, i) => (
            <div key={i} className="relative pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-emerald-100">
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-emerald-500 -translate-x-1/2 shadow-lg shadow-emerald-500/20" />
              <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
              <div className="text-emerald-600 font-bold text-sm mb-3 uppercase tracking-wider">{exp.company} • {exp.year}</div>
              <p className="text-stone-500 leading-relaxed font-medium">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Works Component (Explorer Style) ---
const Works = () => {
  const [selectedFolder, setSelectedFolder] = useState('全部');
  const items = [
    { name: '云栖民宿全案', category: '品牌设计', ext: 'vi', size: '4.5 MB', date: '2024年3月', color: 'bg-emerald-400' },
    { name: 'SaaS云服务手册', category: '产品设计', ext: 'pdf', size: '12.8 MB', date: '2025年1月', color: 'bg-blue-400' },
    { name: 'AI工具提效工作流', category: '实验项目', ext: 'md', size: '45 KB', date: '2025年2月', color: 'bg-purple-400' },
    { name: '国际展会视觉规范', category: '品牌设计', ext: 'guideline', size: '25 MB', date: '2024年11月', color: 'bg-amber-400' },
  ];

  const filteredItems = useMemo(() => 
    selectedFolder === '全部' ? items : items.filter(i => i.category === selectedFolder)
  , [selectedFolder]);

  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[700px]"
    >
      {/* Sidebar */}
      <div className="lg:col-span-3 bento-card p-4 space-y-2">
        <div className="px-4 py-4 mb-4 text-xs font-black text-stone-400 uppercase tracking-[0.2em]">分类</div>
        <SidebarItem icon={FolderOpen} label="全部作品" active={selectedFolder === '全部'} onClick={() => setSelectedFolder('全部')} />
        <SidebarItem icon={LayoutIcon} label="产品设计" active={selectedFolder === '产品设计'} onClick={() => setSelectedFolder('产品设计')} />
        <SidebarItem icon={Palette} label="品牌设计" active={selectedFolder === '品牌设计'} onClick={() => setSelectedFolder('品牌设计')} />
        <SidebarItem icon={Zap} label="实验项目" active={selectedFolder === '实验项目'} onClick={() => setSelectedFolder('实验项目')} />
      </div>

      {/* Main List */}
      <div className="lg:col-span-12 xl:col-span-6 bento-card">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-2xl font-extrabold">{selectedFolder} 内容</h3>
            <p className="text-stone-400 text-sm font-bold">共找到 {filteredItems.length} 个项目</p>
          </div>
          <button className="p-3 bg-stone-100 rounded-xl hover:bg-emerald-100 transition-colors">
            <Search size={20} />
          </button>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={item.name}
                onClick={() => setActiveItem(item)}
                className={`flex items-center gap-5 p-4 rounded-3xl cursor-pointer transition-all duration-200 border-2 ${
                  activeItem.name === item.name 
                    ? 'bg-emerald-50 border-emerald-100 scale-[1.01]' 
                    : 'hover:bg-stone-50 border-transparent hover:border-stone-100'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  <FileText size={28} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg">{item.name}.{item.ext}</div>
                  <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">{item.category}</div>
                </div>
                <div className="text-stone-300">
                  <ArrowRight size={24} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Preview */}
      <div className="lg:col-span-12 xl:col-span-3 bento-card p-6 flex flex-col h-full bg-stone-900 border-stone-800 text-white overflow-hidden shadow-2xl">
        <div className={`w-full aspect-[4/3] rounded-3xl ${activeItem.color} flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden group`}>
           <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors" />
           <FileText size={80} className="drop-shadow-lg opacity-90" />
        </div>
        <div className="flex-1">
          <h4 className="text-3xl font-black mb-1">{activeItem.name}.{activeItem.ext}</h4>
          <p className="text-stone-500 font-bold mb-10">{activeItem.size}</p>
          
          <div className="space-y-6 pt-10 border-t border-white/5">
            <div className="flex justify-between text-sm">
              <span className="text-stone-500 font-bold uppercase tracking-wider">创建时间</span>
              <span className="font-bold">{activeItem.date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-stone-500 font-bold uppercase tracking-wider">项目类型</span>
              <span className="font-bold">商业/实战项目</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-6">
              <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-black text-emerald-400 uppercase">专业</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-black text-emerald-400 uppercase">落地</span>
            </div>
          </div>
        </div>
        <button className="w-full py-5 mt-10 bg-emerald-500 hover:bg-emerald-600 transition-all rounded-3xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl shadow-emerald-500/20">
          查看详情 <ExternalLink size={20} />
        </button>
      </div>
    </motion.div>
  );
};

// --- Articles Component ---
const Articles = () => {
  const posts = [
    { title: '从设计视角看产品需求：如何平衡体验与数据', date: '2025年5月10日', read: '5 分钟阅读', category: '产品' },
    { title: 'AI 辅助工具在全链路设计中的实战应用', date: '2025年4月20日', read: '8 分钟阅读', category: '工具' },
    { title: '跨国展会视觉方案的思考：如何在多场景下保持一致性', date: '2025年3月15日', read: '4 分钟阅读', category: '思考' },
    { title: '从 0 到 1 打造民宿品牌：视觉系统的构建逻辑', date: '2025年2月10日', read: '6 分钟阅读', category: '设计' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="bento-card mb-10 text-center py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-600" />
        <BookText size={60} className="mx-auto mb-6 text-emerald-500" />
        <h2 className="text-6xl font-black tracking-tighter mb-4">思考与沉淀</h2>
        <p className="text-stone-500 font-medium max-w-sm mx-auto leading-relaxed">分享我对设计、产品以及 AI 技术在实际业务中应用的见解。</p>
      </div>

      {posts.map((post, i) => (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          key={i}
          className="bento-card group hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 cursor-pointer border-transparent hover:border-emerald-100"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 py-1.5 px-3 bg-emerald-100 rounded-lg">
                  {post.category}
                </span>
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">{post.date}</span>
              </div>
              <h3 className="text-3xl font-black group-hover:translate-x-2 transition-transform duration-300">{post.title}</h3>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-400 font-bold text-sm uppercase tracking-widest whitespace-nowrap">{post.read}</span>
              <div className="p-4 bg-stone-100 rounded-full group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen relative flex flex-col pb-20 selection:bg-emerald-200">
      {/* Background Decor */}
      <div className="glow-aura -top-40 -left-40 scale-150 opacity-40 animate-pulse" />
      <div className="glow-aura bottom-[-100px] right-[-100px] scale-125 opacity-30" style={{ animationDelay: '1s' }} />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/50 p-2.5 rounded-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex items-center justify-between">
          <div className="flex gap-1">
            {(['home', 'about', 'works', 'articles'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab ? 'text-white' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="active-tab"
                    className="absolute inset-0 bg-stone-900 rounded-full -z-10 shadow-xl"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="flex items-center gap-2">
                   {tab === 'home' && <HomeIcon size={14} strokeWidth={3} />}
                   {tab === 'about' && <User size={14} strokeWidth={3} />}
                   {tab === 'works' && <Briefcase size={14} strokeWidth={3} />}
                   {tab === 'articles' && <BookText size={14} strokeWidth={3} />}
                   <span className="hidden sm:inline">{TAB_LABELS[tab]}</span>
                </span>
              </button>
            ))}
          </div>
          <button className="hidden sm:flex px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 font-black text-white text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 items-center gap-2 shadow-xl shadow-emerald-500/30 active:scale-95">
             联系我 <Mail size={14} />
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-36 pb-12 relative z-10 box-border h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {activeTab === 'home' && <Home />}
            {activeTab === 'about' && <About />}
            {activeTab === 'works' && <Works />}
            {activeTab === 'articles' && <Articles />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full text-center py-12 text-stone-400 text-[10px] font-black uppercase tracking-[0.3em]">
        &copy; 2026 李佳遥的个人主页 — 用心打造，用爱经营
      </footer>
    </div>
  );
}
