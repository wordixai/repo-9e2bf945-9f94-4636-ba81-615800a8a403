import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Info, 
  Utensils, 
  ShoppingBag, 
  Train, 
  Zap,
  AlertTriangle,
  Heart,
  Camera,
  Cpu,
  Shield,
  Wifi,
  Database
} from "lucide-react";

interface CyberTip {
  icon: React.ComponentType<any>;
  title: string;
  protocol: string;
  tips: Array<{
    level: 'BASIC' | 'ADVANCED' | 'EXPERT';
    tip: string;
    code?: string;
  }>;
}

const cyberTips: CyberTip[] = [
  {
    icon: Train,
    title: "TRANSPORT PROTOCOL",
    protocol: "BEIJING_MOVE_SYS",
    tips: [
      {
        level: 'BASIC',
        tip: '启用一卡通量子支付系统，兼容所有地铁和公交网络',
        code: 'metro.activate(quantumCard)'
      },
      {
        level: 'ADVANCED', 
        tip: '避开7-9点、17-19点的数据流高峰期，系统负载过重',
        code: 'transport.avoidPeakHours()'
      },
      {
        level: 'EXPERT',
        tip: '使用滴滴Neural网约车系统，AI智能路径规划',
        code: 'didi.neuralMode.enable()'
      },
      {
        level: 'ADVANCED',
        tip: '前往长城启用S2线市郊铁路传送协议',
        code: 'greatWall.teleport(S2_RAIL)'
      }
    ]
  },
  {
    icon: Utensils,
    title: "NUTRITION MATRIX",
    protocol: "FOOD_ENHANCE_SYS",
    tips: [
      {
        level: 'EXPERT',
        tip: '全聚德烤鸭 - 使用VR体验模式感受传统工艺',
        code: 'duckExperience.enableVR()'
      },
      {
        level: 'BASIC',
        tip: '老北京炸酱面 - 海碗居数据库收录最地道算法',
        code: 'noodles.loadAlgorithm("authentic")'
      },
      {
        level: 'ADVANCED',
        tip: '东来顺涮羊肉 - 百年历史数据流重现',
        code: 'hotpot.loadHistoryData(100)'
      },
      {
        level: 'BASIC',
        tip: '豆汁焦圈 - 护国寺小吃店保留原始代码',
        code: 'snacks.runLegacyCode()'
      }
    ]
  },
  {
    icon: ShoppingBag,
    title: "SHOPPING PROTOCOL",
    protocol: "RETAIL_NETWORK_SYS",
    tips: [
      {
        level: 'BASIC',
        tip: '王府井步行街 - 国际品牌全息商店集群',
        code: 'wangfujing.hologramMode(true)'
      },
      {
        level: 'ADVANCED',
        tip: '三里屯太古里 - 时尚潮流AI推荐系统',
        code: 'sanlitun.AIRecommend.enable()'
      },
      {
        level: 'EXPERT',
        tip: '潘家园古玩市场 - 启用AR鉴定扫描功能',
        code: 'panjiayuan.ARScan.authenticate()'
      },
      {
        level: 'BASIC',
        tip: '秀水街 - 外国用户友好界面，支持多语言',
        code: 'xiushui.setLanguage("EN")'
      }
    ]
  },
  {
    icon: Heart,
    title: "CULTURE INTERFACE",
    protocol: "TRADITION_SYS",
    tips: [
      {
        level: 'EXPERT',
        tip: '京剧表演 - 湖广会馆全息京剧体验',
        code: 'opera.hologram.experience()'
      },
      {
        level: 'ADVANCED',
        tip: '德云社相声 - AI实时字幕翻译系统',
        code: 'xiangsheng.AISubtitle.enable()'
      },
      {
        level: 'BASIC',
        tip: '老舍茶馆 - 传统茶文化数字化重现',
        code: 'teahouse.digitalCulture.load()'
      },
      {
        level: 'ADVANCED',
        tip: '胡同游 - 人力三轮车配备AR导航系统',
        code: 'hutong.ARNavigation.start()'
      }
    ]
  },
  {
    icon: Info,
    title: "SYSTEM REQUIREMENTS",
    protocol: "TRAVEL_OS_CONFIG",
    tips: [
      {
        level: 'BASIC',
        tip: '身份验证芯片必须激活 - 故宫等需要生物识别',
        code: 'auth.biometric.enable()'
      },
      {
        level: 'ADVANCED',
        tip: '预约系统接口调用 - 热门景点需要API预约',
        code: 'booking.api.reserve(attraction)'
      },
      {
        level: 'BASIC',
        tip: '装备舒适外骨骼鞋 - 长距离步行增强模式',
        code: 'shoes.exoskeleton.activate()'
      },
      {
        level: 'EXPERT',
        tip: '天气监控系统 - 实时环境数据分析',
        code: 'weather.monitor.realtime()'
      }
    ]
  }
];

const budgetMatrix = {
  accommodation: [
    { 
      type: "BASIC POD", 
      price: "150-300¥/夜", 
      desc: "青年旅社胶囊舱、快捷充电站",
      features: ["基础充电", "共享WiFi", "简单AI助手"]
    },
    { 
      type: "COMFORT SUITE", 
      price: "400-800¥/夜", 
      desc: "三四星智能酒店、精品数字民宿",
      features: ["智能控制", "VR娱乐", "个人AI管家"]
    },
    { 
      type: "LUXURY MATRIX", 
      price: "1000+¥/夜", 
      desc: "五星全息酒店、顶级赛博度假村",
      features: ["全息服务", "量子Wi-Fi", "专属AI助理"]
    }
  ],
  food: [
    { 
      type: "STREET FUEL", 
      price: "10-30¥/餐", 
      desc: "街头能量补给、快速充电餐",
      features: ["快速补充", "便携包装", "能量优化"]
    },
    { 
      type: "MATRIX DINING", 
      price: "50-150¥/餐", 
      desc: "中档数字餐厅、AI定制菜单",
      features: ["AI推荐", "营养分析", "味觉增强"]
    },
    { 
      type: "GOURMET PROTOCOL", 
      price: "200+¥/餐", 
      desc: "米其林全息餐厅、五星分子料理",
      features: ["全息体验", "分子重构", "味觉虚拟化"]
    }
  ],
  attractions: [
    { 
      type: "FREE ACCESS", 
      price: "0¥", 
      desc: "开放区域、公共AR体验",
      features: ["基础AR", "自由探索", "公共WiFi"]
    },
    { 
      type: "PREMIUM SITES", 
      price: "20-60¥", 
      desc: "故宫VR、天坛全息、颐和园AR",
      features: ["VR体验", "全息导览", "AI讲解"]
    },
    { 
      type: "CYBER EXPERIENCE", 
      price: "100-300¥", 
      desc: "京剧全息、胡同VR、烤鸭4D体验",
      features: ["4D感官", "全息表演", "时空穿越"]
    }
  ]
};

export default function TravelTips() {
  const [selectedTip, setSelectedTip] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("protocols");

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'BASIC': return 'from-green-500 to-teal-500';
      case 'ADVANCED': return 'from-yellow-500 to-orange-500';
      case 'EXPERT': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold gradient-text">BEIJING TRAVEL PROTOCOLS</h2>
        <p className="text-muted-foreground text-lg">优化您的北京体验算法</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-14 cyber-card">
          <TabsTrigger value="protocols" className="text-base">
            <Cpu className="w-5 h-5 mr-2" />
            SYSTEM PROTOCOLS
          </TabsTrigger>
          <TabsTrigger value="budget" className="text-base">
            <Database className="w-5 h-5 mr-2" />
            BUDGET MATRIX
          </TabsTrigger>
        </TabsList>

        <TabsContent value="protocols" className="space-y-6">
          {cyberTips.map((section, index) => (
            <Card key={index} className="cyber-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center neon-glow">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="gradient-text">{section.title}</div>
                    <div className="text-sm font-mono text-cyan-400">{section.protocol}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.tips.map((tip, tipIndex) => (
                  <div 
                    key={tipIndex}
                    className="cyber-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedTip(selectedTip === `${index}-${tipIndex}` ? null : `${index}-${tipIndex}`)}
                  >
                    <div className="flex items-start gap-4">
                      <Badge className={`bg-gradient-to-r ${getLevelColor(tip.level)} text-white neon-glow shrink-0`}>
                        {tip.level}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm mb-2">{tip.tip}</p>
                        {selectedTip === `${index}-${tipIndex}` && tip.code && (
                          <div className="mt-3 p-3 bg-black/50 rounded border border-cyan-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Cpu className="w-4 h-4 text-cyan-400" />
                              <span className="text-xs font-bold text-cyan-400">EXECUTE CODE</span>
                            </div>
                            <code className="text-xs font-mono text-green-400">{tip.code}</code>
                          </div>
                        )}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          {/* Budget Header */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center neon-glow">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="gradient-text">BEIJING BUDGET CALCULATOR</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                价格数据实时更新 | AI优化预算分配 | 智能消费建议
              </p>
            </CardContent>
          </Card>

          {/* Budget Categories */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Accommodation */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="gradient-text">住宿系统</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {budgetMatrix.accommodation.map((item, index) => (
                  <div key={index} className="cyber-card p-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {item.type}
                      </Badge>
                      <span className="font-bold text-sm gradient-text">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>
                    <div className="space-y-1">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <Zap className="w-3 h-3 text-cyan-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Food */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-green-400" />
                  <span className="gradient-text">营养供给</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {budgetMatrix.food.map((item, index) => (
                  <div key={index} className="cyber-card p-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="border-green-400 text-green-400">
                        {item.type}
                      </Badge>
                      <span className="font-bold text-sm gradient-text">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>
                    <div className="space-y-1">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <Zap className="w-3 h-3 text-cyan-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Attractions */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-400" />
                  <span className="gradient-text">体验模块</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {budgetMatrix.attractions.map((item, index) => (
                  <div key={index} className="cyber-card p-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="border-purple-400 text-purple-400">
                        {item.type}
                      </Badge>
                      <span className="font-bold text-sm gradient-text">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>
                    <div className="space-y-1">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <Zap className="w-3 h-3 text-cyan-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Optimization Tips */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span className="gradient-text">OPTIMIZATION ALGORITHMS</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "💰", text: "购买景点通票可节省30%费用", code: "tickets.bundle.save(30)" },
                  { icon: "🍜", text: "尝试当地小吃，性价比提升200%", code: "food.local.optimize()" },
                  { icon: "🚇", text: "多使用公共交通，降低50%出行成本", code: "transport.public.enable()" },
                  { icon: "📱", text: "使用AI旅游助手获取实时优惠", code: "AI.deals.realtime()" }
                ].map((tip, index) => (
                  <div key={index} className="cyber-card p-4 text-center space-y-2">
                    <div className="text-2xl">{tip.icon}</div>
                    <p className="text-xs">{tip.text}</p>
                    <code className="text-xs font-mono text-cyan-400 block">{tip.code}</code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* System Status */}
      <Card className="cyber-card">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">TRAVEL OS ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-blue-400" />
                <span className="text-sm">NEURAL NETWORK ACTIVE</span>
              </div>
            </div>
            <div className="text-muted-foreground font-mono text-sm">
              BEIJING.EXE v2024.FUTURE
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}