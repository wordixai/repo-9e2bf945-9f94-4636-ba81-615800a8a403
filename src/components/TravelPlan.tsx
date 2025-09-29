import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Star, Camera, Utensils, Train, Zap, Eye, Navigation } from "lucide-react";

interface Attraction {
  id: string;
  name: string;
  description: string;
  time: string;
  duration: string;
  category: string;
  rating: number;
  tips: string;
  image: string;
  highlights: string[];
}

interface DayPlan {
  day: number;
  title: string;
  theme: string;
  color: string;
  attractions: Attraction[];
  meals: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
  transportation: string;
}

const travelPlans: DayPlan[] = [
  {
    day: 1,
    title: "IMPERIAL CORE",
    theme: "数字化探索紫禁城矩阵",
    color: "from-pink-500 to-purple-600",
    attractions: [
      {
        id: "tiananmen",
        name: "天安门广场",
        description: "世界最大的城市中心广场，数字化历史的起点",
        time: "08:00",
        duration: "60分钟",
        category: "历史核心",
        rating: 4.8,
        tips: "建议使用AR导览体验历史重现",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600",
        highlights: ["数字化广场", "AI导览", "全息投影"]
      },
      {
        id: "forbidden-city",
        name: "故宫博物院",
        description: "明清皇宫的数字化重构，古代与未来的完美融合",
        time: "09:30",
        duration: "240分钟",
        category: "皇家矩阵",
        rating: 4.9,
        tips: "使用VR眼镜体验穿越时空的皇宫生活",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=600",
        highlights: ["VR体验", "全息皇帝", "数字文物"]
      },
      {
        id: "jingshan",
        name: "景山公园",
        description: "俯瞰紫禁城的最佳数据观测点",
        time: "14:30",
        duration: "90分钟",
        category: "观测站",
        rating: 4.6,
        tips: "使用无人机视角拍摄紫禁城全景",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
        highlights: ["无人机拍摄", "全景观测", "数字地图"]
      }
    ],
    meals: {
      breakfast: "CYBER DUCK 全聚德 - 数字化烤鸭体验",
      lunch: "IMPERIAL CAFE 故宫角楼 - 未来主义宫廷料理",
      dinner: "NEON HOTPOT 东来顺 - 电子涮羊肉"
    },
    transportation: "量子传送地铁1号线"
  },
  {
    day: 2,
    title: "GREAT WALL.EXE",
    theme: "登录万里长城防火墙系统",
    color: "from-blue-500 to-cyan-400",
    attractions: [
      {
        id: "badaling",
        name: "八达岭长城",
        description: "古代防火墙系统的物理实现",
        time: "08:00",
        duration: "240分钟",
        category: "防御系统",
        rating: 4.7,
        tips: "配备外骨骼助力器轻松登城",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600",
        highlights: ["外骨骼助力", "全息长城", "AI向导"]
      },
      {
        id: "ming-tombs",
        name: "明十三陵",
        description: "皇家数据存储中心遗址",
        time: "14:00",
        duration: "120分钟",
        category: "数据陵墓",
        rating: 4.4,
        tips: "使用地下雷达探测隐藏的数字宝藏",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=600",
        highlights: ["地下探测", "数字考古", "全息重建"]
      }
    ],
    meals: {
      breakfast: "MATRIX MORNING 能量补给站",
      lunch: "GREAT WALL DINER 长城脚下赛博农场",
      dinner: "NEON STREET 簋街数字美食"
    },
    transportation: "反重力飞行器直达"
  },
  {
    day: 3,
    title: "HUTONG NETWORK",
    theme: "接入老北京胡同网络协议",
    color: "from-green-400 to-blue-500",
    attractions: [
      {
        id: "nanluoguxiang",
        name: "南锣鼓巷",
        description: "最具赛博朋克风格的胡同数据流",
        time: "09:00",
        duration: "120分钟",
        category: "数据胡同",
        rating: 4.3,
        tips: "使用AR眼镜看到隐藏的胡同故事",
        image: "https://images.unsplash.com/photo-1585834519915-66c0a56e73d3?w=600",
        highlights: ["AR故事", "数字艺术", "全息商店"]
      },
      {
        id: "houhai",
        name: "后海酒吧街",
        description: "传统与赛博的完美融合区域",
        time: "11:30",
        duration: "120分钟",
        category: "融合区",
        rating: 4.5,
        tips: "夜晚的霓虹灯效果最佳",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=600",
        highlights: ["霓虹夜景", "电子音乐", "全息湖面"]
      },
      {
        id: "drum-tower",
        name: "鼓楼",
        description: "古代时间服务器控制塔",
        time: "14:00",
        duration: "60分钟",
        category: "时间塔",
        rating: 4.4,
        tips: "体验4D时空击鼓表演",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
        highlights: ["4D表演", "时空体验", "数字击鼓"]
      }
    ],
    meals: {
      breakfast: "CYBER NOODLES 电子炸酱面",
      lunch: "QUADRANGLE DINER 四合院未来餐厅",
      dinner: "HOLOGRAM BAR 后海全息酒吧"
    },
    transportation: "悬浮地铁6号线"
  },
  {
    day: 4,
    title: "GARDEN.VR",
    theme: "进入皇家园林虚拟现实",
    color: "from-purple-500 to-pink-500",
    attractions: [
      {
        id: "summer-palace",
        name: "颐和园",
        description: "中国古典园林的VR重构版本",
        time: "08:30",
        duration: "240分钟",
        category: "VR园林",
        rating: 4.8,
        tips: "租用水上悬浮器游览昆明湖",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=600",
        highlights: ["水上悬浮", "全息花卉", "数字建筑"]
      },
      {
        id: "temple-of-heaven",
        name: "天坛公园",
        description: "古代天地通信系统遗址",
        time: "14:30",
        duration: "150分钟",
        category: "通信遗址",
        rating: 4.7,
        tips: "体验祈年殿的声学全息效果",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=600",
        highlights: ["声学全息", "天地通信", "数字祭天"]
      }
    ],
    meals: {
      breakfast: "GARDEN MATRIX 颐和园能量站",
      lunch: "ROYAL HOLOGRAM 听鹂馆全息餐厅",
      dinner: "QIANMEN CYBER 前门赛博街"
    },
    transportation: "磁悬浮4号线直达"
  },
  {
    day: 5,
    title: "NEO BEIJING",
    theme: "体验新北京赛博朋克未来",
    color: "from-cyan-400 to-blue-600",
    attractions: [
      {
        id: "olympic-park",
        name: "奥林匹克公园",
        description: "2008未来奥运会遗址重启",
        time: "09:00",
        duration: "180分钟",
        category: "未来遗址",
        rating: 4.6,
        tips: "体验鸟巢的全息体育赛事",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=600",
        highlights: ["全息比赛", "数字火炬", "AI解说"]
      },
      {
        id: "798",
        name: "798艺术区",
        description: "赛博朋克艺术创作基地",
        time: "14:00",
        duration: "180分钟",
        category: "艺术基地",
        rating: 4.5,
        tips: "参与交互式数字艺术创作",
        image: "https://images.unsplash.com/photo-1585834519915-66c0a56e73d3?w=600",
        highlights: ["互动艺术", "AI创作", "数字雕塑"]
      }
    ],
    meals: {
      breakfast: "SANLITUN CYBER 三里屯赛博咖啡",
      lunch: "798 DIGITAL 艺术区数字餐厅",
      dinner: "WANGFUJING NEON 王府井霓虹小吃"
    },
    transportation: "反重力8号线"
  }
];

export default function TravelPlan() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="space-y-12">
      {/* Day Selector */}
      <div className="grid grid-cols-5 gap-4">
        {travelPlans.map((plan) => (
          <Button
            key={plan.day}
            variant={selectedDay === plan.day ? "default" : "outline"}
            onClick={() => setSelectedDay(plan.day)}
            className={`h-24 cyber-card ${selectedDay === plan.day ? 'pulse-glow' : ''} relative overflow-hidden group`}
          >
            <div className="absolute inset-0 geometric-bg opacity-30" />
            <div className="relative z-10 text-center space-y-1">
              <div className="text-xs text-muted-foreground">DAY</div>
              <div className="text-2xl font-bold neon-glow">{plan.day}</div>
              <div className="text-xs font-medium truncate">{plan.title}</div>
            </div>
            {selectedDay === plan.day && <div className="scan-line absolute inset-0" />}
          </Button>
        ))}
      </div>

      {/* Selected Day Content */}
      {travelPlans
        .filter(plan => plan.day === selectedDay)
        .map((plan) => (
          <div key={plan.day} className="space-y-8">
            {/* Day Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-4 cyber-card p-6 holographic">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center neon-glow`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-4xl font-bold gradient-text">{plan.title}</h2>
                  <p className="text-lg text-muted-foreground">{plan.theme}</p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <Card className="cyber-card neon-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center neon-glow">
                    <Train className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">TRANSPORT PROTOCOL</div>
                    <div className="text-xl font-bold">{plan.transportation}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attractions */}
            <div className="space-y-6">
              {plan.attractions.map((attraction, index) => (
                <Card key={attraction.id} className="cyber-card group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="relative lg:col-span-1 h-64 lg:h-auto overflow-hidden">
                        <img 
                          src={attraction.image} 
                          alt={attraction.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${plan.color} text-white neon-glow`}>
                            {attraction.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-bold">{attraction.rating}</span>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 p-6 space-y-4 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full blur-3xl" />
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-2 text-sm text-cyan-400">
                              <Clock className="w-4 h-4" />
                              <span className="font-mono">{attraction.time}</span>
                            </div>
                            <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                              {attraction.duration}
                            </Badge>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-2 gradient-text">
                            {attraction.name}
                          </h3>
                          
                          <p className="text-muted-foreground mb-4">{attraction.description}</p>
                          
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                              {attraction.highlights.map((highlight, i) => (
                                <Badge 
                                  key={i}
                                  variant="secondary" 
                                  className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30">
                              <div className="flex items-center gap-2 mb-2">
                                <Camera className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-medium text-purple-400">CYBER TIPS</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{attraction.tips}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Meals */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center neon-glow">
                    <Utensils className="w-4 h-4 text-white" />
                  </div>
                  <span className="gradient-text">NUTRITION PROTOCOLS</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.meals.breakfast && (
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30">
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">BOOT</Badge>
                    <span className="text-sm">{plan.meals.breakfast}</span>
                  </div>
                )}
                {plan.meals.lunch && (
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30">
                    <Badge variant="outline" className="border-green-500 text-green-500">FUEL</Badge>
                    <span className="text-sm">{plan.meals.lunch}</span>
                  </div>
                )}
                {plan.meals.dinner && (
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30">
                    <Badge variant="outline" className="border-purple-500 text-purple-500">RECHARGE</Badge>
                    <span className="text-sm">{plan.meals.dinner}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  );
}