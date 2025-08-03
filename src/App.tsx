import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, User, Target, Rocket, BookOpen, Code, Zap, Database, Cloud, Users, TrendingUp, MessageCircle, CheckCircle } from 'lucide-react';
import './index.css';

/**
 * PPT样式演讲网页主组件
 * 支持键盘导航和点击导航
 */
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 幻灯片数据
  const slides = [
    {
      id: 'title',
      title: 'Firebase Studio',
      subtitle: 'AI时代的开发新范式',
      content: (
        <div className="text-center space-y-12 animate-fade-in">
          <div className="flex flex-col items-center space-y-8">
            <img 
              src="/icon-192.png" 
              alt="Firebase Studio Logo" 
              className="w-28 h-28 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
            />
            <div className="relative">
              <div className="text-8xl font-black bg-gradient-to-r from-orange-300 via-orange-500 via-yellow-400 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl tracking-wider animate-pulse">Firebase Studio</div>
            </div>
          </div>
          <div className="relative">
            <div className="text-5xl text-white font-bold drop-shadow-2xl tracking-wide leading-tight">
              <span className="bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent">
                AI时代的开发新范式
              </span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-lg blur-xl opacity-50"></div>
          </div>
          <div className="text-center mt-12">
            <div className="relative inline-block">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide">
                演讲者：围巾哥萧尘
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </div>
          </div>

        </div>
      )
    },
    {
      id: 'speaker',
      title: '演讲者介绍',
      content: (
        <div className="space-y-10">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1 shadow-2xl">
                <img 
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20avatar%20cartoon%20style%20friendly%20smile%20orange%20scarf%20coding%20background&image_size=square" 
                  alt="围巾哥萧尘" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            </div>
            <div className="text-5xl font-bold text-white mb-4 drop-shadow-lg">围巾哥萧尘</div>
            <div className="text-2xl text-orange-400 mb-8 font-medium">VibeCoding践行者 | AI编程工具类优质作者 | 黑客马拉松优秀选手</div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xl text-purple-200 leading-relaxed mb-8">
              专注于现代Web开发技术，致力于推广AI辅助编程理念。在AI编程技术领域有丰富的实战经验，曾在多个黑客马拉松比赛中获得优异成绩。作为VibeCoding的践行者，倡导高效、优雅的编程方式，帮助开发者提升技术水平。
            </div>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2 text-purple-200">
                <div className="w-8 h-8 bg-purple-600/40 rounded-full flex items-center justify-center">
                  <span className="text-sm">🐙</span>
                </div>
                <span>GitHub</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <div className="w-8 h-8 bg-purple-600/40 rounded-full flex items-center justify-center">
                  <span className="text-sm">🐦</span>
                </div>
                <span>Twitter</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <div className="w-8 h-8 bg-purple-600/40 rounded-full flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <div className="w-8 h-8 bg-purple-600/40 rounded-full flex items-center justify-center">
                  <span className="text-sm">✉️</span>
                </div>
                <span>Email</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'opening',
      title: '目录',
      content: (
        <div className="h-full flex flex-col justify-center items-center">
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-800/70 to-purple-700/70 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/40 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">01</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">第一部分：界面介绍</div>
                  <div className="text-lg text-purple-200">Firebase Studio 核心功能与界面展示</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/70 to-indigo-700/70 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/40 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">02</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">第二部分：案例演示</div>
                  <div className="text-lg text-purple-200">实际项目案例与技术架构解析</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-800/70 to-blue-700/70 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/40 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">03</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">第三部分：现场操作</div>
                  <div className="text-lg text-purple-200">实时演示与互动体验环节</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interface-showcase',
      title: 'Firebase Studio 界面展示',
      content: (
        <div className="h-full flex flex-col justify-center items-center space-y-8">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Firebase Studio 界面展示
              </span>
            </div>
            <div className="text-2xl text-purple-200 font-medium">直观体验现代化开发界面</div>
          </div>
          
          <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src="/界面.png" 
                  alt="Firebase Studio 界面截图" 
                  className="max-w-full max-h-[450px] rounded-xl shadow-lg object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-xl text-purple-200 leading-relaxed">
              Firebase Studio 提供了简洁直观的用户界面，集成了现代化的设计理念，
              <br />
              让开发者能够高效地进行项目管理和代码开发。
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'development-interface',
      title: 'Firebase Studio 开发界面',
      content: (
        <div className="h-full flex flex-col justify-center items-center space-y-8">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Firebase Studio 开发界面
              </span>
            </div>
            <div className="text-2xl text-purple-200 font-medium">AI驱动的智能开发环境</div>
          </div>
          
          <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src="/开发页面.png" 
                  alt="Firebase Studio 开发界面截图" 
                  className="max-w-full max-h-[450px] rounded-xl shadow-lg object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-xl text-purple-200 leading-relaxed">
              体验AI辅助编程的强大功能，智能代码生成、实时预览和一键部署，
              <br />
              让开发变得更加高效和有趣。
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'product-showcase',
      title: 'Firebase Studio 产品展示',
      content: (
        <div className="h-full flex flex-col justify-center items-center space-y-8">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Firebase Studio 产品展示
              </span>
            </div>
            <div className="text-2xl text-purple-200 font-medium">体验AI驱动的全栈开发平台</div>
          </div>
          
          <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src="/产品页面.png" 
                  alt="Firebase Studio 产品界面截图" 
                  className="max-w-full max-h-[400px] rounded-xl shadow-lg object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="text-xl text-purple-200 leading-relaxed max-w-4xl mx-auto">
              Firebase Studio 集成了现代化的AI技术，提供从创意到部署的完整开发体验，
              <br />
              让每个人都能轻松构建专业级的Web应用程序。
            </div>
            
            <div className="mt-8">
              <a 
                href="https://6000-firebase-studio-1754152074481.cluster-ejd22kqny5htuv5dfowoyipt52.cloudworkstations.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/50 hover:border-orange-300"
              >
                <Rocket className="w-6 h-6" />
                <span>立即体验 Firebase Studio</span>
                <span className="text-orange-200">→</span>
              </a>
            </div>
          </div>
        </div>
      )
    },




    {
      id: 'case-demo',
      title: 'Firebase Studio 现场演示',
      content: (
        <div className="h-full flex flex-col space-y-3">
          {/* 标题区域 - 压缩高度 */}
          <div className="text-center mb-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-1">
              🎯 Firebase Studio 现场演示
            </div>
            <div className="text-base text-white/80">通过图片展示AI驱动开发的完整流程</div>
          </div>

          {/* 主要内容区域 - 图片展示 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
            {/* 界面展示 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-white">🎨 界面设计</h3>
              </div>
              <div className="bg-white rounded-lg p-2 mb-3">
                <img 
                  src="/界面.png" 
                  alt="Firebase Studio 界面展示" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-white/80 text-sm text-center">
                用户界面设计展示
              </div>
            </div>

            {/* 开发界面 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-white">⚡ 开发过程</h3>
              </div>
              <div className="bg-white rounded-lg p-2 mb-3">
                <img 
                  src="/开发页面.png" 
                  alt="Firebase Studio 开发界面" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-white/80 text-sm text-center">
                AI辅助开发界面
              </div>
            </div>

            {/* 产品展示 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-white">🚀 最终产品</h3>
              </div>
              <div className="bg-white rounded-lg p-2 mb-3">
                <img 
                  src="/产品页面.png" 
                  alt="Firebase Studio 产品展示" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-white/80 text-sm text-center">
                完成的产品界面
              </div>
            </div>
          </div>

          {/* 演示操作区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 在线演示 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-white">🔗 在线体验</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 text-sm">点击下方按钮体验完整应用或观看演示视频</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://studio--greennote-4roah.us-central1.hosted.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span className="mr-2">🚀</span>
                    立即体验 GreenNote
                  </a>
                  <a 
                    href="https://www.bilibili.com/video/BV1MqhTzFEAa/?spm_id_from=333.1387.homepage.video_card.click&vd_source=921270471e745ada21af6b8406e3ff55" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span className="mr-2">📹</span>
                    观看演示视频
                  </a>
                </div>
              </div>
            </div>

            {/* 演示要点 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-white/90 text-sm leading-relaxed">
                <p className="mb-3 font-medium text-green-300">GreenNote 笔记应用开发提示词：</p>
                <p className="italic bg-white/5 p-4 rounded-lg border-l-4 border-green-400">
                  "A minimalist note-taking app for quick thought capture and organization. Key features include creating new notes, editing existing notes, categorizing notes with tags, and searching through saved notes. Use a calm green and off-white color scheme."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-development',
      title: 'AI驱动开发的核心理念',
      content: (() => {
        // 随机案例数据
        const randomCases = [
          {
            title: "📝 智能笔记应用",
            description: "创建一个支持Markdown的笔记应用，具备标签分类、全文搜索、云同步功能。使用清新的绿色主题，支持暗黑模式切换。",
            features: ["Markdown编辑器", "标签系统", "搜索功能", "云端同步", "暗黑模式"]
          },
          {
            title: "☀️ 天气预报应用",
            description: "开发一个美观的天气应用，显示当前天气、7天预报、空气质量指数。支持多城市切换，具备天气预警功能。",
            features: ["实时天气", "7天预报", "空气质量", "多城市", "天气预警"]
          },
          {
            title: "✅ 任务管理器",
            description: "构建一个高效的待办事项应用，支持任务分类、优先级设置、截止日期提醒。采用简洁的Material Design风格。",
            features: ["任务分类", "优先级", "截止提醒", "进度跟踪", "数据统计"]
          },
          {
            title: "🎵 音乐播放器",
            description: "设计一个现代化的音乐播放器，支持本地音乐播放、歌词显示、播放列表管理。具备炫酷的可视化效果。",
            features: ["音乐播放", "歌词显示", "播放列表", "音频可视化", "均衡器"]
          },
          {
            title: "💰 记账应用",
            description: "开发一个个人财务管理应用，支持收支记录、分类统计、预算设置。提供直观的图表分析功能。",
            features: ["收支记录", "分类管理", "预算控制", "图表分析", "数据导出"]
          },
          {
            title: "🍳 菜谱应用",
            description: "创建一个美食菜谱应用，包含菜谱搜索、收藏功能、购物清单生成。支持用户上传分享自己的菜谱。",
            features: ["菜谱搜索", "收藏功能", "购物清单", "用户分享", "营养分析"]
          },
          {
            title: "🎮 小游戏平台",
            description: "构建一个休闲小游戏平台，包含多种经典游戏如贪吃蛇、俄罗斯方块等。支持积分系统和排行榜。",
            features: ["多种游戏", "积分系统", "排行榜", "成就系统", "社交分享"]
          },
          {
            title: "📚 阅读应用",
            description: "开发一个电子书阅读器，支持多种格式、书签管理、阅读进度同步。提供护眼模式和个性化设置。",
            features: ["多格式支持", "书签管理", "进度同步", "护眼模式", "个性设置"]
          }
        ];

        const [currentCase, setCurrentCase] = useState(null);
        const [isGenerating, setIsGenerating] = useState(false);
        
        // 幸运观众选座状态
        const [selectedSeats, setSelectedSeats] = useState([]);
        const [isSelecting, setIsSelecting] = useState(false);
        const [luckySeats, setLuckySeats] = useState([]);
        const [showSeats, setShowSeats] = useState(false);
        const [animatingDot, setAnimatingDot] = useState(null);
        const animateIntervalRef = useRef(null);

        // 生成随机案例的函数
        const generateRandomCase = () => {
          setIsGenerating(true);
          setCurrentCase(null);
          
          setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * randomCases.length);
            const selectedCase = randomCases[randomIndex];
            setCurrentCase(selectedCase);
            setIsGenerating(false);
          }, 1500);
        };
        
        /**
         * 生成座位网格 (10x10 = 100个座位)
         */
        const generateSeats = () => {
          const seats = [];
          for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
              seats.push({
                id: `${row}-${col}`,
                row: row + 1,
                col: col + 1,
                number: row * 10 + col + 1
              });
            }
          }
          return seats;
        };
        
        /**
         * 开始幸运观众选择
         */
        const startLuckySelection = () => {
          if (!showSeats) {
            // 首次点击显示座位网格
            setShowSeats(true);
            return;
          }
          
          setIsSelecting(true);
          setLuckySeats([]);
          setAnimatingDot(null);
          
          // 开始跑马灯动画 - 红点在座位间快速移动
          const allSeats = generateSeats();
          let currentIndex = 0;
          
          const animateInterval = setInterval(() => {
            setAnimatingDot(allSeats[currentIndex % allSeats.length].id);
            currentIndex++;
          }, 100); // 100ms间隔，让红点快速移动
          
          // 存储interval ID以便后续清除
          animateIntervalRef.current = animateInterval;
        };
        
        /**
         * 暂停选择并立即选出结果
         */
        const pauseSelection = () => {
          if (isSelecting) {
            // 清除跑马灯动画
            if (animateIntervalRef.current) {
              clearInterval(animateIntervalRef.current);
              animateIntervalRef.current = null;
            }
            setAnimatingDot(null);
            
            // 随机选择3个座位作为幸运观众
            const allSeats = generateSeats();
            const shuffled = [...allSeats].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, 3);
            setLuckySeats(selected);
            setIsSelecting(false);
          }
        };
        
        /**
         * 切换座位选择状态
         */
        const toggleSeat = (seatId) => {
          setSelectedSeats(prev => {
            if (prev.includes(seatId)) {
              return prev.filter(id => id !== seatId);
            } else {
              return [...prev, seatId];
            }
          });
        };
        
        /**
         * 重置选座
         */
        const resetSelection = () => {
          // 清除跑马灯动画
          if (animateIntervalRef.current) {
            clearInterval(animateIntervalRef.current);
            animateIntervalRef.current = null;
          }
          setSelectedSeats([]);
          setLuckySeats([]);
          setIsSelecting(false);
          setShowSeats(false);
          setAnimatingDot(null);
        };

        return (
          <div className="h-full flex flex-col justify-center items-center space-y-8">
            {/* 主标题 */}
            <div className="text-center mb-8">
              <div className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-pulse">
                <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  🎲 幸运观众互动时间
                </span>
              </div>
              <div className="text-lg md:text-xl text-purple-200 opacity-80">
                点击按钮，随机生成一个开发案例挑战！
              </div>
            </div>

            {/* 互动区域 */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左侧：幸运观众选座 */}
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-green-500/30 via-blue-500/30 to-teal-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl">
                    
                    {/* 选座标题 */}
                    <div className="text-center mb-6">
                      <div className="text-xl md:text-2xl font-bold text-white mb-3">
                        🎯 幸运观众选座
                      </div>
                      <div className="text-sm text-blue-200 opacity-80">
                        点击开始随机选择3位幸运观众
                      </div>
                    </div>
                    
                    {/* 座位网格 - 只在showSeats为true时显示 */}
                    {showSeats && (
                      <div className="mb-4">
                        <div className="grid grid-cols-10 gap-1 max-w-md mx-auto max-h-72 overflow-y-auto p-2 pb-4">
                          {generateSeats().map((seat) => {
                            const isLucky = luckySeats.some(lucky => lucky.id === seat.id);
                            const isSelected = selectedSeats.includes(seat.id);
                            const isAnimating = animatingDot === seat.id;
                            
                            return (
                              <button
                                key={seat.id}
                                onClick={() => toggleSeat(seat.id)}
                                disabled={isSelecting}
                                className={`
                                  w-6 h-6 text-xs font-bold rounded transition-all duration-300 border relative
                                  ${
                                    isLucky
                                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-yellow-300 shadow-lg shadow-yellow-400/50 animate-pulse'
                                      : isSelected
                                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-300'
                                      : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                                  }
                                  ${isSelecting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:scale-110'}
                                `}
                              >
                                {seat.number}
                                {/* 红点动画 */}
                                {isAnimating && (
                                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    {/* 选择结果显示 */}
                    {luckySeats.length > 0 && (
                      <div className="mb-6 text-center">
                        <div className="text-lg font-bold text-white mb-2">🎉 恭喜幸运观众！</div>
                        <div className="flex justify-center space-x-2">
                          {luckySeats.map((seat, index) => (
                            <div key={seat.id} className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm p-2 rounded-lg border border-yellow-500/30">
                              <span className="text-yellow-400 font-bold text-sm">座位 {seat.number}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* 控制按钮 */}
                    <div className="text-center space-y-3">
                      <div className="flex justify-center space-x-3">
                        <button 
                          className={`group relative px-6 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 ${!isSelecting && !showSeats ? 'animate-bounce hover:animate-none' : ''}`}
                          onClick={startLuckySelection}
                        >
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>🎯</span>
                            <span>
                              {!showSeats ? '开始选择' : isSelecting ? '选择中...' : '重新选择'}
                            </span>
                            <span>{isSelecting ? <span className="animate-spin">⚡</span> : '✨'}</span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        {isSelecting && (
                          <button 
                            className="group relative px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
                            onClick={pauseSelection}
                          >
                            <span className="relative z-10 flex items-center space-x-2">
                              <span>⏸️</span>
                              <span>暂停选择</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        )}
                      </div>
                      
                      {(luckySeats.length > 0 || selectedSeats.length > 0 || showSeats) && (
                        <button 
                          className="px-4 py-2 bg-gray-500/50 hover:bg-gray-400/60 text-white font-medium text-sm rounded-lg transition-all duration-200"
                          onClick={resetSelection}
                        >
                          重置选择
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* 右侧：随机案例生成 */}
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl">
                  
                    {/* 随机案例显示区域 */}
                    <div className="text-center mb-6">
                      <div className="text-xl md:text-2xl font-bold text-white mb-3">
                        🎲 随机案例挑战
                      </div>
                      <div className="text-sm text-purple-200 opacity-80">
                        点击下方按钮生成开发案例
                      </div>
                    </div>
                    
                    {!currentCase && !isGenerating && (
                      <div className="mb-6 min-h-[120px] flex flex-col justify-center">
                        <div className="text-center text-purple-200/60">
                          等待生成案例...
                        </div>
                      </div>
                    )}
                      
                    {isGenerating && (
                      <div className="mb-6 min-h-[120px] flex flex-col justify-center">
                        <div className="animate-pulse text-center">
                          <div className="text-lg font-bold text-white mb-2">
                            🎲 正在生成案例...
                          </div>
                          <div className="text-sm text-purple-200 opacity-80">
                            <span className="animate-spin">⚡</span> 请稍候
                          </div>
                        </div>
                      </div>
                    )}
                      
                    {currentCase && !isGenerating && (
                      <div className="mb-6 min-h-[120px] flex flex-col justify-center">
                        <div className="animate-fadeIn text-center">
                          <div className="text-lg md:text-xl font-bold text-white mb-2">
                            {currentCase.title}
                          </div>
                          <div className="text-sm text-purple-200 mb-4 leading-relaxed">
                            {currentCase.description}
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {currentCase.features.slice(0, 2).map((feature, index) => (
                              <div key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-2 rounded-lg border border-purple-500/30">
                                <span className="text-white font-medium text-xs">✨ {feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 生成按钮 */}
                    <div className="text-center">
                      <button 
                        className={`group relative px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 ${!isGenerating ? 'animate-bounce hover:animate-none' : ''}`}
                        onClick={generateRandomCase}
                        disabled={isGenerating}
                      >
                        <span className="relative z-10 flex items-center space-x-2">
                          <span>🎲</span>
                          <span>{isGenerating ? '生成中...' : currentCase ? '再来一个' : '生成案例'}</span>
                          <span>{isGenerating ? <span className="animate-spin">⚡</span> : '✨'}</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        );
      })()
    },
    {
      id: 'summary',
      title: '🚀 行动号召',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 via-purple-800/20 to-indigo-900/20 rounded-2xl p-8">
          {/* 主标题 */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-4 animate-pulse">
              🔥 改变世界，从这一刻开始
            </h1>
            <p className="text-xl text-purple-200 font-medium">不要让机会从指尖溜走，成为AI时代的创造者</p>
          </div>

          {/* 行动卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <div className="group bg-gradient-to-br from-purple-600/30 to-blue-700/30 backdrop-blur-sm border border-purple-400/30 p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">突破边界</h3>
              <p className="text-purple-200 text-base leading-relaxed">不再等待明天<br />今天就重新定义可能</p>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-6 py-3 rounded-full font-bold hover:from-orange-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  立即突破 →
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-600/30 to-blue-700/30 backdrop-blur-sm border border-purple-400/30 p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">汇聚力量</h3>
              <p className="text-purple-200 text-base leading-relaxed">与顶尖开发者并肩<br />共同书写技术传奇</p>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  成为传奇 →
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-600/30 to-blue-700/30 backdrop-blur-sm border border-purple-400/30 p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">永不止步</h3>
              <p className="text-purple-200 text-base leading-relaxed">在变化中成长<br />让每一天都超越昨天</p>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  超越自我 →
                </button>
              </div>
            </div>
          </div>

          {/* 底部激励文字 */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-white mb-2">🔥 历史的车轮不会等待任何人</p>
            <p className="text-lg text-purple-200">要么成为变革的推动者，要么被时代抛在身后。选择权在你手中！</p>
          </div>
        </div>
      )
    }
  ];

  // 键盘导航处理
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  /**
   * 切换到下一张幻灯片
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  /**
   * 切换到上一张幻灯片
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /**
   * 跳转到指定幻灯片
   */
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center">
      {/* PPT容器 - 固定16:9尺寸 */}
      <div className="w-[1280px] h-[720px] bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-purple-600/30">
        {/* 头部导航 */}
        <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 backdrop-blur-sm border-b border-purple-500/30 px-6 py-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Firebase Studio Logo */}
              <div className="relative">
                <img 
                  src="/icon-192.png" 
                  alt="Firebase Studio Logo" 
                  className="w-12 h-12 drop-shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Firebase Studio 标题 */}
              <div className="text-3xl font-black bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide">Firebase Studio</div>
            </div>
            <div className="text-sm text-purple-200 bg-purple-600/30 px-3 py-1 rounded-full">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="flex-1 p-8 overflow-hidden">
          {/* 幻灯片内容 */}
          <div className="h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-full">
                {currentSlideData.content}
              </div>
            </div>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="bg-gradient-to-r from-blue-800/80 to-purple-700/80 backdrop-blur-sm border-t border-purple-500/30 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            {/* 上一页按钮 */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600/40 hover:bg-purple-500/60 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200 text-sm text-white border border-purple-400/30 hover:border-purple-300/50"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>上一页</span>
            </button>

            {/* 幻灯片指示器 */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-orange-400 shadow-lg shadow-orange-400/50 scale-110'
                      : 'bg-purple-400/50 hover:bg-purple-300/70 border border-purple-300/30'
                  }`}
                />
              ))}
            </div>

            {/* 下一页按钮 */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-xl"
            >
              <span>下一页</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 键盘提示 */}
      <div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-800/90 to-blue-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm border border-purple-500/30 shadow-lg">
        使用 ← → 键或空格键导航
      </div>
    </div>
  );
}

export default App;
