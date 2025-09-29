import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  category: string;
  description: string;
  openHours: string;
  subway: string;
}

const beijingLocations: MapLocation[] = [
  {
    id: "forbidden-city",
    name: "故宫博物院",
    address: "北京市东城区景山前街4号",
    coordinates: { lat: 39.9163, lng: 116.3972 },
    category: "历史文化",
    description: "世界最大的古代宫殿建筑群",
    openHours: "08:30-17:00",
    subway: "天安门东站(1号线)"
  },
  {
    id: "great-wall",
    name: "八达岭长城",
    address: "北京市延庆区八达岭镇",
    coordinates: { lat: 40.3584, lng: 116.0171 },
    category: "历史文化",
    description: "万里长城最著名段落",
    openHours: "06:30-19:00",
    subway: "市郊铁路S2线"
  },
  {
    id: "summer-palace",
    name: "颐和园",
    address: "北京市海淀区新建宫门路19号",
    coordinates: { lat: 39.9998, lng: 116.2754 },
    category: "园林建筑",
    description: "中国古典园林艺术的杰作",
    openHours: "06:30-18:00",
    subway: "北宫门站(4号线)"
  },
  {
    id: "temple-of-heaven",
    name: "天坛公园",
    address: "北京市东城区天坛路甲1号",
    coordinates: { lat: 39.8822, lng: 116.4066 },
    category: "历史建筑",
    description: "明清皇帝祭天的神圣场所",
    openHours: "06:00-22:00",
    subway: "天坛东门站(5号线)"
  },
  {
    id: "nanluoguxiang",
    name: "南锣鼓巷",
    address: "北京市东城区南锣鼓巷",
    coordinates: { lat: 39.9368, lng: 116.4035 },
    category: "文化街区",
    description: "最具特色的胡同文化街区",
    openHours: "全天开放",
    subway: "南锣鼓巷站(6号线)"
  }
];

export default function MapView() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gradient">北京景点地图</h2>
        <p className="text-muted-foreground">主要景点位置分布与交通信息</p>
      </div>

      {/* 地图区域 */}
      <Card className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100">
        <CardContent className="p-6 h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">互动地图</h3>
              <p className="text-muted-foreground">
                这里将显示北京主要景点的交互式地图
              </p>
              <p className="text-sm text-muted-foreground">
                可以集成百度地图或高德地图API来显示实际位置
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 地点列表 */}
      <div className="grid gap-4">
        <h3 className="text-xl font-semibold">主要景点位置</h3>
        {beijingLocations.map((location) => (
          <Card key={location.id} className="card-hover">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <h4 className="font-semibold text-lg">{location.name}</h4>
                  </div>
                  <Badge className="bg-hsl(var(--jade-green))">{location.category}</Badge>
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>地址</span>
                    </div>
                    <p className="text-sm">{location.address}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>开放时间</span>
                    </div>
                    <p className="text-sm">{location.openHours}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Navigation className="h-4 w-4 text-muted-foreground" />
                      <span>地铁交通</span>
                    </div>
                    <Badge variant="outline">{location.subway}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">坐标位置</div>
                    <p className="text-xs font-mono bg-muted p-2 rounded">
                      {location.coordinates.lat}, {location.coordinates.lng}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}