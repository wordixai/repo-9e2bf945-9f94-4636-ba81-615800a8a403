import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Star, Camera, Utensils, Train } from "lucide-react";

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
}

interface DayPlan {
  day: number;
  title: string;
  theme: string;
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
    title: "皇家文化之旅",
    theme: "探索紫禁城的辉煌历史",
    attractions: [
      {
        id: "tiananmen",
        name: "天安门广场",
        description: "世界最大的城市中心广场，见证新中国的诞生",
        time: "08:00",
        duration: "1小时",
        category: "历史文化",
        rating: 4.8,
        tips: "建议早起避开人群，带好身份证",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400"
      },
      {
        id: "forbidden-city",
        name: "故宫博物院",
        description: "明清两代皇宫，中国古代宫廷建筑艺术的巅峰",
        time: "09:30",
        duration: "4小时",
        category: "历史文化",
        rating: 4.9,
        tips: "提前网上预约，建议租用语音导览",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=400"
      },
      {
        id: "jingshan",
        name: "景山公园",
        description: "俯瞰紫禁城全景的最佳观景点",
        time: "14:30",
        duration: "1.5小时",
        category: "自然风光",
        rating: 4.6,
        tips: "登万春亭可俯瞰故宫全景，拍照绝佳",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
      }
    ],
    meals: {
      breakfast: "全聚德烤鸭店 - 品尝正宗北京烤鸭",
      lunch: "故宫角楼咖啡 - 在皇宫中享用精致简餐",
      dinner: "东来顺 - 百年老字号涮羊肉"
    },
    transportation: "地铁1号线天安门东站"
  },
  {
    day: 2,
    title: "长城雄伟之旅",
    theme: "登临万里长城，感受古代防御工程的壮丽",
    attractions: [
      {
        id: "badaling",
        name: "八达岭长城",
        description: "最著名的长城段落，世界文化遗产",
        time: "08:00",
        duration: "4小时",
        category: "历史文化",
        rating: 4.7,
        tips: "穿舒适的鞋子，带足水和食物",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400"
      },
      {
        id: "ming-tombs",
        name: "明十三陵",
        description: "明朝皇帝陵墓群，了解明代陵寝文化",
        time: "14:00",
        duration: "2小时",
        category: "历史文化",
        rating: 4.4,
        tips: "定陵地宫值得参观，了解皇家丧葬文化",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=400"
      }
    ],
    meals: {
      breakfast: "酒店早餐",
      lunch: "长城脚下农家菜 - 体验地道农家风味",
      dinner: "簋街 - 北京最著名的美食街"
    },
    transportation: "旅游巴士或包车前往"
  },
  {
    day: 3,
    title: "胡同文化之旅",
    theme: "漫步老北京胡同，体验传统四合院生活",
    attractions: [
      {
        id: "nanluoguxiang",
        name: "南锣鼓巷",
        description: "最具特色的胡同之一，文艺青年聚集地",
        time: "09:00",
        duration: "2小时",
        category: "文化街区",
        rating: 4.3,
        tips: "有很多创意小店和咖啡馆，适合慢慢逛",
        image: "https://images.unsplash.com/photo-1585834519915-66c0a56e73d3?w=400"
      },
      {
        id: "houhai",
        name: "后海酒吧街",
        description: "传统与现代结合的休闲娱乐区",
        time: "11:30",
        duration: "2小时",
        category: "文化街区",
        rating: 4.5,
        tips: "白天可游湖赏景，晚上酒吧林立",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=400"
      },
      {
        id: "drum-tower",
        name: "鼓楼",
        description: "古代报时建筑，登楼可俯瞰胡同风貌",
        time: "14:00",
        duration: "1小时",
        category: "历史建筑",
        rating: 4.4,
        tips: "每天有击鼓表演，不要错过",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
      }
    ],
    meals: {
      breakfast: "老北京炸酱面 - 地道北京早餐",
      lunch: "四合院餐厅 - 在传统建筑中用餐",
      dinner: "后海酒吧 - 边用餐边欣赏湖景"
    },
    transportation: "地铁6号线南锣鼓巷站"
  },
  {
    day: 4,
    title: "皇家园林之旅",
    theme: "游览皇家园林，感受中国古典园林艺术",
    attractions: [
      {
        id: "summer-palace",
        name: "颐和园",
        description: "中国古典园林艺术的杰作，清代皇家园林",
        time: "08:30",
        duration: "4小时",
        category: "园林建筑",
        rating: 4.8,
        tips: "可租船游昆明湖，春秋季节最美",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=400"
      },
      {
        id: "temple-of-heaven",
        name: "天坛公园",
        description: "明清皇帝祭天的神圣场所，建筑精美绝伦",
        time: "14:30",
        duration: "2.5小时",
        category: "历史建筑",
        rating: 4.7,
        tips: "祈年殿是经典的中国古建筑代表",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=400"
      }
    ],
    meals: {
      breakfast: "颐和园茶楼 - 园林中品茶用餐",
      lunch: "听鹂馆 - 颐和园内的皇家餐厅",
      dinner: "前门大街 - 品尝各地小吃"
    },
    transportation: "地铁4号线颐和园站"
  },
  {
    day: 5,
    title: "现代北京之旅",
    theme: "感受现代北京的繁华与活力",
    attractions: [
      {
        id: "olympic-park",
        name: "奥林匹克公园",
        description: "2008年奥运会主场馆，现代北京的象征",
        time: "09:00",
        duration: "3小时",
        category: "现代建筑",
        rating: 4.6,
        tips: "鸟巢和水立方是必看的建筑",
        image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=400"
      },
      {
        id: "798",
        name: "798艺术区",
        description: "当代艺术聚集地，工业遗址改造的创意园区",
        time: "14:00",
        duration: "3小时",
        category: "艺术文化",
        rating: 4.5,
        tips: "有很多当代艺术展览和创意小店",
        image: "https://images.unsplash.com/photo-1585834519915-66c0a56e73d3?w=400"
      }
    ],
    meals: {
      breakfast: "三里屯咖啡厅 - 国际化早餐",
      lunch: "798园区餐厅 - 艺术氛围中用餐",
      dinner: "王府井小吃街 - 告别之夜品尝各种小吃"
    },
    transportation: "地铁8号线奥林匹克公园站"
  }
];

export default function TravelPlan() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          {travelPlans.map((plan) => (
            <TabsTrigger key={`day${plan.day}`} value={`day${plan.day}`} className="text-sm">
              第{plan.day}天
            </TabsTrigger>
          ))}
        </TabsList>

        {travelPlans.map((plan) => (
          <TabsContent key={`day${plan.day}`} value={`day${plan.day}`} className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gradient">{plan.title}</h2>
              <p className="text-muted-foreground text-lg">{plan.theme}</p>
            </div>

            <Card className="gradient-beijing text-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Train className="h-5 w-5" />
                    <span className="font-medium">交通方式</span>
                  </div>
                  <div className="md:col-span-2">
                    <span>{plan.transportation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {plan.attractions.map((attraction, index) => (
                <Card key={attraction.id} className="card-hover">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="lg:col-span-1">
                        <img 
                          src={attraction.image} 
                          alt={attraction.name}
                          className="w-full h-48 lg:h-full object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="lg:col-span-2 p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{attraction.time}</span>
                              <Badge variant="secondary">{attraction.duration}</Badge>
                            </div>
                            <h3 className="text-xl font-bold">{attraction.name}</h3>
                            <Badge className="bg-hsl(var(--jade-green))">{attraction.category}</Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{attraction.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">{attraction.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Camera className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">游览贴士</span>
                          </div>
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                            {attraction.tips}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5" />
                  今日美食推荐
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.meals.breakfast && (
                  <div className="flex gap-3">
                    <Badge variant="outline">早餐</Badge>
                    <span>{plan.meals.breakfast}</span>
                  </div>
                )}
                {plan.meals.lunch && (
                  <div className="flex gap-3">
                    <Badge variant="outline">午餐</Badge>
                    <span>{plan.meals.lunch}</span>
                  </div>
                )}
                {plan.meals.dinner && (
                  <div className="flex gap-3">
                    <Badge variant="outline">晚餐</Badge>
                    <span>{plan.meals.dinner}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}