import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Info, 
  Utensils, 
  ShoppingBag, 
  Train, 
  MapPin, 
  Clock,
  AlertTriangle,
  Heart,
  Camera
} from "lucide-react";

interface TipSection {
  icon: React.ComponentType<any>;
  title: string;
  tips: string[];
}

const transportationTips: TipSection = {
  icon: Train,
  title: "交通出行",
  tips: [
    "北京地铁网络发达，推荐购买一卡通或使用手机支付",
    "高峰期(7-9点，17-19点)地铁较为拥挤，合理安排出行时间",
    "出租车起步价13元，滴滴等网约车在北京很方便",
    "公交车2元起，可使用一卡通或扫码支付",
    "前往长城可选择旅游巴士、包车或市郊铁路S2线"
  ]
};

const foodTips: TipSection = {
  icon: Utensils,
  title: "美食推荐",
  tips: [
    "北京烤鸭：全聚德、便宜坊是老字号，大董是现代派代表",
    "老北京炸酱面：海碗居、方砖厂69号是地道选择",
    "涮羊肉：东来顺是百年老店，满恒记性价比很高",
    "豆汁焦圈：老磁器口豆汁店，护国寺小吃店可以体验",
    "驴打滚、艾窝窝：稻香村、护国寺小吃有正宗的京式点心"
  ]
};

const shoppingTips: TipSection = {
  icon: ShoppingBag,
  title: "购物指南",
  tips: [
    "王府井步行街：国际品牌齐全，有老字号和特色小吃",
    "三里屯太古里：时尚潮流聚集地，适合年轻人",
    "潘家园古玩市场：淘宝好去处，记得砍价",
    "秀水街：外国游客喜爱，购买丝绸制品的好地方",
    "前门大街：传统老字号集中，适合购买北京特产"
  ]
};

const cultureTips: TipSection = {
  icon: Heart,
  title: "文化体验",
  tips: [
    "京剧表演：湖广会馆、正乙祠戏楼可欣赏传统京剧",
    "相声：德云社、嘻哈包袱铺是著名相声社团",
    "茶馆文化：老舍茶馆可体验传统茶文化",
    "胡同游：可选择人力三轮车游览，了解老北京文化",
    "庙会：春节期间地坛、龙潭湖庙会很有特色"
  ]
};

const practicalTips: TipSection = {
  icon: Info,
  title: "实用信息",
  tips: [
    "携带身份证：参观故宫、天安门等需要安检和身份验证",
    "提前预约：故宫、国家博物馆等热门景点需网上预约",
    "穿舒适鞋子：北京景点步行距离较长，舒适的鞋很重要",
    "关注天气：春秋最佳，夏季炎热冬季寒冷，注意保暖防晒",
    "学几句中文：谢谢(xiè xie)、你好(nǐ hǎo)会让旅行更愉快"
  ]
};

const budgetGuide = {
  accommodation: [
    { type: "经济型", price: "150-300元/晚", desc: "青年旅社、快捷酒店" },
    { type: "舒适型", price: "400-800元/晚", desc: "三四星酒店、精品民宿" },
    { type: "豪华型", price: "1000+元/晚", desc: "五星酒店、顶级度假村" }
  ],
  food: [
    { type: "街头小吃", price: "10-30元/餐", desc: "煎饼果子、包子、面条" },
    { type: "中档餐厅", price: "50-150元/餐", desc: "京菜、川菜、粤菜餐厅" },
    { type: "高档餐厅", price: "200+元/餐", desc: "米其林餐厅、五星酒店" }
  ],
  attractions: [
    { type: "免费景点", price: "0元", desc: "天安门广场、前门大街" },
    { type: "文化景点", price: "20-60元", desc: "故宫、天坛、颐和园" },
    { type: "特色体验", price: "100-300元", desc: "京剧表演、胡同游、烤鸭" }
  ]
};

export default function TravelTips() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gradient">北京旅游贴士</h2>
        <p className="text-muted-foreground">让你的北京之旅更加完美的实用建议</p>
      </div>

      <Tabs defaultValue="tips" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tips">实用贴士</TabsTrigger>
          <TabsTrigger value="budget">预算指南</TabsTrigger>
        </TabsList>

        <TabsContent value="tips" className="space-y-6">
          <div className="grid gap-6">
            {[transportationTips, foodTips, shoppingTips, cultureTips, practicalTips].map((section, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <section.icon className="h-5 w-5" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 mt-2 flex-shrink-0" />
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <div className="grid gap-6">
            <Card className="gradient-beijing text-white">
              <CardHeader>
                <CardTitle>北京旅游预算参考</CardTitle>
              </CardHeader>
              <CardContent>
                <p>以下价格仅供参考，实际费用可能因季节、个人需求而有所差异</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    住宿费用
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {budgetGuide.accommodation.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="font-semibold text-sm">{item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    餐饮费用
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {budgetGuide.food.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="font-semibold text-sm">{item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    景点门票
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {budgetGuide.attractions.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="font-semibold text-sm">{item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  省钱小贴士
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex gap-2">
                    <span>💰</span>
                    <span>购买景点通票可节省费用</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🍜</span>
                    <span>尝试当地小吃，价廉物美</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🚇</span>
                    <span>多使用公共交通工具</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📱</span>
                    <span>使用旅游APP获取优惠</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}