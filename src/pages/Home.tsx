import { useState, useEffect } from 'react';

/**
 * PPT样式的演讲网页组件
 * 展示Firebase Studio演讲内容
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 演讲内容数据
  const slides = [
    {
      title: "Firebase Studio: AI时代的开发新范式",
      subtitle: "围巾哥萧尘 - 全栈开发者 & AI技术布道师",
      content: [
        "🎯 专注于AI辅助开发工具和无代码平台",
        "🚀 Firebase Studio核心开发者",
        "📚 技术分享者，致力于推广AI开发新范式"
      ]
    },
    {
      title: "一、开场致辞",
      subtitle: "核心主题",
      content: [
        "在AI技术飞速发展的今天，我们正站在软件开发变革的关键节点。",
        "Firebase Studio代表着一种全新的开发理念：",
        "• AI驱动开发 - 让AI成为你的编程伙伴",
        "• 无代码原型 - 从想法到产品的最短路径",
        "• 云端协作 - 团队协作的新模式"
      ]
    },
    {
      title: "二、Firebase技术架构深度解析",
      subtitle: "四层技术体系",
      content: [
        "🏗️ 基础设施层 - 云原生架构",
        "💾 数据层 - 实时数据同步",
        "⚡ 业务逻辑层 - 事件驱动架构",
        "🎨 用户体验层 - 跨平台一致性"
      ]
    },
    {
      title: "基础设施层详解",
      subtitle: "🏗️ Infrastructure Layer",
      content: [
        "• Google Cloud Platform: 全球分布式基础设施",
        "• Firebase Hosting: 静态资源CDN加速",
        "• Cloud Functions: 无服务器计算",
        "• Firebase Extensions: 预构建功能扩展",
        "",
        "技术原理：",
        "✓ 自动扩缩容机制",
        "✓ 全球边缘节点部署",
        "✓ 零配置SSL证书"
      ]
    },
    {
      title: "数据层详解",
      subtitle: "💾 Data Layer",
      content: [
        "• Firestore: NoSQL文档数据库",
        "• Realtime Database: 实时数据库",
        "• Cloud Storage: 文件存储服务",
        "• Firebase ML: 机器学习集成",
        "",
        "技术原理：",
        "✓ 离线数据持久化",
        "✓ 多设备实时同步",
        "✓ 自动数据备份与恢复"
      ]
    },
    {
      title: "核心优势",
      subtitle: "Firebase Studio的竞争力",
      content: [
        "1. 开发效率提升80%",
        "   从传统开发的数周缩短到数小时",
        "",
        "2. 运维成本降低90%",
        "   无需专门的运维团队",
        "",
        "3. 扩展性无限",
        "   自动处理从0到百万用户的扩展"
      ]
    },
    {
      title: "三、实战案例展示",
      subtitle: "40个精选案例",
      content: [
        "🛠️ 生产力工具（12个案例）",
        "💚 健康生活（8个案例）",
        "🎨 创意工具（6个案例）",
        "📚 教育学习（4个案例）",
        "💰 财务管理（4个案例）",
        "📝 生活记录（3个案例）",
        "🏠 生活助手（2个案例）",
        "📊 数据管理（1个案例）"
      ]
    },
    {
      title: "Firebase Studio 现场演示",
      subtitle: "🎬 实战案例互动展示",
      content: [
        "📝 案例一：GreenNote 极简笔记应用",
        "",
        "💡 AI提示词：",
        "\"请帮我创建一个名为'GreenNote'的极简笔记应用，使用沉稳的绿色和灰白色配色方案，具备创建、编辑、删除笔记功能，支持标签分类和搜索功能。界面要简洁优雅，适合日常使用。\"",
        "",
        "🔗 演示地址：",
        "https://studio--greennote-4roah.us-central1.hosted.app",
        "",
        "📹 演示视频：现场实时操作展示",
        "• 创建新笔记流程",
        "• 标签管理系统",
        "• 搜索功能演示",
        "• 响应式设计展示"
      ]
    },
    {
      title: "四、AI驱动开发的核心理念",
      subtitle: "开发范式转变",
      content: [
        "传统开发 vs AI驱动开发",
        "",
        "手写代码 → 自然语言描述",
        "技术导向 → 需求导向",
        "长周期迭代 → 快速原型验证",
        "专业门槛高 → 人人可参与"
      ]
    },
    {
      title: "AI提示词工程",
      subtitle: "优秀提示词的五要素",
      content: [
        "1. 明确的角色定位",
        "   \"作为产品经理...\"",
        "",
        "2. 具体的功能描述",
        "   详细列出核心功能",
        "",
        "3. 清晰的设计要求",
        "   色彩、风格、布局",
        "",
        "4. 用户体验考虑",
        "   交互流程、使用场景",
        "",
        "5. 技术实现提示",
        "   框架选择、性能要求"
      ]
    },
    {
      title: "成功案例数据",
      subtitle: "AI驱动开发的成效",
      content: [
        "📊 开发时间：",
        "从2-3周缩短到2-3小时",
        "",
        "📊 代码质量：",
        "AI生成代码通过率达85%",
        "",
        "📊 用户满意度：",
        "原型验证成功率提升60%"
      ]
    },
    {
      title: "五、未来展望与行业趋势",
      subtitle: "技术发展趋势",
      content: [
        "• AI代码生成将成为标准开发流程",
        "• 无代码/低代码平台将占据50%市场份额",
        "• 自然语言编程将普及到非技术人员",
        "",
        "Firebase Studio的愿景：",
        "🎯 打造全球领先的AI开发平台",
        "🎯 实现人人都是开发者的理想",
        "🎯 构建开发者生态社区"
      ]
    },
    {
      title: "对开发者的建议",
      subtitle: "拥抱AI时代",
      content: [
        "1. 拥抱AI工具",
        "   不要害怕被替代，要学会利用AI",
        "",
        "2. 提升产品思维",
        "   从技术实现转向用户需求",
        "",
        "3. 持续学习",
        "   跟上AI技术发展步伐"
      ]
    },
    {
      title: "六、互动问答环节",
      subtitle: "常见问题预设",
      content: [
        "Q: AI生成的代码质量如何保证？",
        "A: 通过多轮对话优化、代码审查、自动化测试等方式确保质量",
        "",
        "Q: 是否会替代传统开发者？",
        "A: 不是替代，而是赋能。AI帮助开发者专注于更有价值的创新工作",
        "",
        "Q: 学习成本如何？",
        "A: 主要是提示词工程和产品思维，技术门槛大大降低"
      ]
    },
    {
      title: "七、总结与行动号召",
      subtitle: "核心要点回顾",
      content: [
        "1. Firebase Studio代表AI时代的开发新范式",
        "2. 四层技术架构提供完整的开发解决方案",
        "3. AI驱动开发让创意快速变为现实",
        "4. 人人都是开发者的时代已经到来",
        "",
        "行动号召：",
        "🚀 立即体验：访问Firebase Studio开始你的AI开发之旅",
        "🤝 加入社区：与全球开发者分享经验和创意",
        "📚 持续学习：关注AI技术发展，提升自己的竞争力"
      ]
    },
    {
      title: "感谢聆听！",
      subtitle: "AI时代的开发革命已经开始",
      content: [
        "让我们一起拥抱变化，创造更美好的数字世界！",
        "",
        "联系方式：",
        "🐙 GitHub: @xiaoweiruby",
        "🐦 Twitter: @xiaoweiruby",
        "📧 Email: xiaoweiruby@gmail.com",
        "",
        "演讲时长：约30分钟",
        "建议PPT页数：25-30页"
      ]
    }
  ];

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

  /**
   * 键盘事件处理
   */
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          if (currentSlide > 0) {
            prevSlide();
          }
          break;
        case 'ArrowRight':
          if (currentSlide < slides.length - 1) {
            nextSlide();
          }
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
     return () => {
       window.removeEventListener('keydown', handleKeyPress);
     };
   }, [currentSlide, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Firebase Studio 演讲</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm opacity-75">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-3 py-1 bg-white/20 rounded hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-3 py-1 bg-white/20 rounded hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-8">
          {/* 幻灯片内容 */}
          <div className="max-w-4xl mx-auto">
            {/* 标题区域 */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {currentSlideData.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                {currentSlideData.subtitle}
              </h2>
            </div>

            {/* 内容区域 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              {/* 现场演示页面特殊布局 */}
              {currentSlide === 7 ? (
                <div className="space-y-8">
                  {/* 演示案例标题 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-400 mb-4">📝 案例一：GreenNote 极简笔记应用</h3>
                  </div>
                  
                  {/* 三列布局：提示词、演示地址、视频区域 */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 提示词区域 */}
                    <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl p-6 border border-blue-400/30">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                        <span className="mr-2">💡</span> AI提示词
                      </h4>
                      <div className="text-sm leading-relaxed text-gray-200 bg-black/20 rounded-lg p-4">
                        "请帮我创建一个名为'GreenNote'的极简笔记应用，使用沉稳的绿色和灰白色配色方案，具备创建、编辑、删除笔记功能，支持标签分类和搜索功能。界面要简洁优雅，适合日常使用。"
                      </div>
                    </div>
                    
                    {/* 演示地址区域 */}
                    <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30">
                      <h4 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                        <span className="mr-2">🔗</span> 演示地址
                      </h4>
                      <div className="space-y-3">
                        <a 
                          href="https://studio--greennote-4roah.us-central1.hosted.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-lg text-center font-medium hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
                        >
                          🚀 立即体验 GreenNote
                        </a>
                        <div className="text-xs text-gray-300 text-center">
                          点击在新窗口中打开演示
                        </div>
                      </div>
                    </div>
                    
                    {/* 演示视频区域 */}
                    <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 rounded-xl p-6 border border-green-400/30">
                      <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                        <span className="mr-2">📹</span> 现场演示
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-black/30 rounded-lg p-4 text-center">
                          <div className="text-4xl mb-2">🎬</div>
                          <div className="text-sm text-gray-300">现场实时操作展示</div>
                        </div>
                        <div className="text-xs space-y-1">
                          <div className="flex items-center text-gray-300">
                            <span className="text-green-400 mr-2">•</span> 创建新笔记流程
                          </div>
                          <div className="flex items-center text-gray-300">
                            <span className="text-green-400 mr-2">•</span> 标签管理系统
                          </div>
                          <div className="flex items-center text-gray-300">
                            <span className="text-green-400 mr-2">•</span> 搜索功能演示
                          </div>
                          <div className="flex items-center text-gray-300">
                            <span className="text-green-400 mr-2">•</span> 响应式设计展示
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 底部操作提示 */}
                  <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-400/30">
                    <div className="text-lg font-semibold text-purple-400 mb-2">🎯 演示重点</div>
                    <div className="text-sm text-gray-300">
                      通过实际操作展示 Firebase Studio 如何将自然语言描述快速转化为功能完整的Web应用
                    </div>
                  </div>
                </div>
              ) : (
                /* 其他页面的原有布局 */
                <div className="space-y-4">
                  {currentSlideData.content.map((line, index) => (
                    <div key={index} className="text-lg md:text-xl leading-relaxed">
                      {line === '' ? (
                        <div className="h-4"></div>
                      ) : line.startsWith('•') || line.startsWith('✓') ? (
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{line.substring(1).trim()}</span>
                        </div>
                      ) : line.includes('→') ? (
                        <div className="text-center py-2">
                          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                            {line}
                          </span>
                        </div>
                      ) : line.startsWith('Q:') ? (
                        <div className="text-cyan-400 font-semibold">{line}</div>
                      ) : line.startsWith('A:') ? (
                        <div className="text-gray-300 ml-4">{line}</div>
                      ) : line.includes('：') && (line.includes('📊') || line.includes('🎯') || line.includes('🚀') || line.includes('🤝') || line.includes('📚')) ? (
                        <div className="text-yellow-400 font-semibold">{line}</div>
                      ) : (
                        <div>{line}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* 底部导航 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          {/* 幻灯片缩略图导航 */}
          <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                title={`幻灯片 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </footer>

      {/* 键盘导航提示 */}
      <div className="fixed bottom-20 right-4 text-xs opacity-50">
        <div>← → 键导航</div>
        <div>ESC 退出全屏</div>
      </div>
    </div>
  );
}