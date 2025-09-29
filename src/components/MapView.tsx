import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Zap, Wifi, Database, Cpu } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  codeName: string;
  address: string;
  coordinates: { lat: number; lng: number };
  category: string;
  description: string;
  openHours: string;
  subway: string;
  securityLevel: string;
  accessProtocol: string;
}

const beijingLocations: MapLocation[] = [
  {
    id: "forbidden-city",
    name: "故宫博物院",
    codeName: "IMPERIAL_CORE_001",
    address: "北京市东城区景山前街4号",
    coordinates: { lat: 39.9163, lng: 116.3972 },
    category: "皇家矩阵",
    description: "世界最大的古代宫殿建筑群数据库",
    openHours: "08:30-17:00",
    subway: "天安门东站(1号线)",
    securityLevel: "MAXIMUM",
    accessProtocol: "VR身份验证 + 生物识别"
  },
  {
    id: "great-wall",
    name: "八达岭长城",
    codeName: "FIREWALL_SYSTEM",
    address: "北京市延庆区八达岭镇",
    coordinates: { lat: 40.3584, lng: 116.0171 },
    category: "防御系统",
    description: "古代防火墙物理实现",
    openHours: "06:30-19:00",
    subway: "市郊铁路S2线",
    securityLevel: "HIGH",
    accessProtocol: "外骨骼装备 + GPS定位"
  },
  {
    id: "summer-palace",
    name: "颐和园",
    codeName: "GARDEN_VR_MAIN",
    address: "北京市海淀区新建宫门路19号",
    coordinates: { lat: 39.9998, lng: 116.2754 },
    category: "VR园林",
    description: "中国古典园林虚拟现实重构",
    openHours: "06:30-18:00",
    subway: "北宫门站(4号线)",
    securityLevel: "MEDIUM",
    accessProtocol: "水上悬浮器 + AR导航"
  },
  {
    id: "temple-of-heaven",
    name: "天坛公园",
    codeName: "SKYLINK_TERMINAL",
    address: "北京市东城区天坛路甲1号",
    coordinates: { lat: 39.8822, lng: 116.4066 },
    category: "通信遗址",
    description: "古代天地通信系统控制中心",
    openHours: "06:00-22:00",
    subway: "天坛东门站(5号线)",
    securityLevel: "HIGH",
    accessProtocol: "声学认证 + 全息验证"
  },
  {
    id: "nanluoguxiang",
    name: "南锣鼓巷",
    codeName: "HUTONG_NETWORK",
    address: "北京市东城区南锣鼓巷",
    coordinates: { lat: 39.9368, lng: 116.4035 },
    category: "数据胡同",
    description: "胡同文化网络协议主节点",
    openHours: "24/7 ONLINE",
    subway: "南锣鼓巷站(6号线)",
    securityLevel: "LOW",
    accessProtocol: "AR眼镜 + 数据流接入"
  },
  {
    id: "olympic-park",
    name: "奥林匹克公园",
    codeName: "NEO_SPORTS_HUB",
    address: "北京市朝阳区奥林匹克公园",
    coordinates: { lat: 39.9928, lng: 116.3833 },
    category: "未来遗址",
    description: "2008未来奥运会数据中心",
    openHours: "09:00-21:00",
    subway: "奥林匹克公园站(8号线)",
    securityLevel: "MEDIUM",
    accessProtocol: "全息门票 + 生物扫描"
  }
];

export default function MapView() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'matrix'>('matrix');

  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'MAXIMUM': return 'from-red-500 to-pink-500';
      case 'HIGH': return 'from-orange-500 to-red-500';
      case 'MEDIUM': return 'from-yellow-500 to-orange-500';
      case 'LOW': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold gradient-text">BEIJING MAP MATRIX</h2>
        <p className="text-muted-foreground text-lg">数字化北京景点坐标系统</p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center">
        <div className="cyber-card p-2 flex gap-2">
          <Button
            variant={viewMode === 'matrix' ? 'default' : 'outline'}
            onClick={() => setViewMode('matrix')}
            className="neon-glow"
          >
            <Database className="w-4 h-4 mr-2" />
            MATRIX VIEW
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            onClick={() => setViewMode('grid')}
          >
            <Cpu className="w-4 h-4 mr-2" />
            GRID VIEW
          </Button>
        </div>
      </div>

      {/* Cyber Map Display */}
      <Card className="cyber-card h-96 overflow-hidden relative">
        <div className="absolute inset-0 geometric-bg" />
        <CardContent className="p-6 h-full flex items-center justify-center relative z-10">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center neon-glow pulse-glow">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">NEURAL MAP INTERFACE</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-green-400" />
                  <span>GPS ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>AR READY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span>DATA SYNC</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                集成量子GPS定位 | AR实时导航 | 全息地图投影
              </p>
            </div>
          </div>
        </CardContent>
        <div className="scan-line absolute inset-0" />
      </Card>

      {/* Locations */}
      <div className={viewMode === 'matrix' ? 'space-y-4' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {beijingLocations.map((location) => (
          <Card 
            key={location.id} 
            className={`cyber-card cursor-pointer transition-all duration-300 ${
              selectedLocation === location.id ? 'pulse-glow scale-105' : ''
            }`}
            onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
          >
            <CardContent className={viewMode === 'matrix' ? 'p-6' : 'p-4'}>
              <div className={viewMode === 'matrix' ? 'grid grid-cols-1 md:grid-cols-4 gap-6' : 'space-y-4'}>
                {/* Location Info */}
                <div className={viewMode === 'matrix' ? 'md:col-span-2 space-y-3' : 'space-y-3'}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getSecurityColor(location.securityLevel)} flex items-center justify-center neon-glow`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg gradient-text">{location.name}</h4>
                      <p className="text-xs font-mono text-cyan-400">{location.codeName}</p>
                    </div>
                  </div>
                  
                  <Badge className={`bg-gradient-to-r ${getSecurityColor(location.securityLevel)} text-white neon-glow`}>
                    {location.category}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                </div>

                {/* Details */}
                <div className={viewMode === 'matrix' ? 'space-y-4' : 'space-y-3'}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">LOCATION</span>
                    </div>
                    <p className="text-xs font-mono bg-muted/20 p-2 rounded border border-cyan-500/30">
                      {location.coordinates.lat}, {location.coordinates.lng}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">ONLINE</span>
                    </div>
                    <p className="text-xs">{location.openHours}</p>
                  </div>
                </div>

                {/* Access Info */}
                <div className={viewMode === 'matrix' ? 'space-y-4' : 'space-y-3'}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Navigation className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">TRANSPORT</span>
                    </div>
                    <Badge variant="outline" className="text-xs border-green-500 text-green-500">
                      {location.subway}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Zap className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">SECURITY</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs border-${location.securityLevel === 'MAXIMUM' ? 'red' : location.securityLevel === 'HIGH' ? 'orange' : location.securityLevel === 'MEDIUM' ? 'yellow' : 'green'}-500`}
                    >
                      {location.securityLevel}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedLocation === location.id && (
                <div className="mt-6 pt-6 border-t border-cyan-500/30 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30">
                      <h5 className="text-sm font-bold text-blue-400 mb-2">访问协议</h5>
                      <p className="text-xs text-muted-foreground">{location.accessProtocol}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30">
                      <h5 className="text-sm font-bold text-green-400 mb-2">详细地址</h5>
                      <p className="text-xs text-muted-foreground">{location.address}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Status Bar */}
      <Card className="cyber-card">
        <CardContent className="p-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>系统在线</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span>{beijingLocations.length} 个节点已连接</span>
              </div>
            </div>
            <div className="text-muted-foreground font-mono">
              BEIJING.SYS v2024.12
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}