import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import TravelPlan from "@/components/TravelPlan";
import MapView from "@/components/MapView";
import TravelTips from "@/components/TravelTips";
import { 
  Calendar, 
  Map, 
  Info, 
  Landmark, 
  Users, 
  Clock,
  Star,
  Heart,
  Zap,
  Eye,
  Cpu,
  Wifi,
  Database
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("plan");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cyber Background */}
      <div className="fixed inset-0 geometric-bg opacity-30" />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 cyber-card p-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center neon-glow">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="font-mono text-sm text-cyan-400">BEIJING.TRAVEL.EXE</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
                NEO BEIJING
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground mb-6">
                数字化探索古都的赛博朋克体验
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white neon-glow px-6 py-3 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                5天深度矩阵
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white neon-glow px-6 py-3 text-lg">
                <Landmark className="w-5 h-5 mr-2" />
                15+数字景点
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white neon-glow px-6 py-3 text-lg">
                <Users className="w-5 h-5 mr-2" />
                全民兼容协议
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="cyber-card px-8 py-4 text-lg neon-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                onClick={() => setActiveTab("plan")}
              >
                <Zap className="w-5 h-5 mr-2" />
                启动行程矩阵
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="cyber-card px-8 py-4 text-lg border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => setActiveTab("map")}
              >
                <Eye className="w-5 h-5 mr-2" />
                查看数字地图
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="cyber-card text-center group">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow pulse-glow">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="gradient-text text-xl">AI智能规划</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                基于量子算法的行程优化，让每分钟都价值最大化
              </p>
              <div className="mt-4 flex justify-center">
                <Badge variant="outline" className="border-pink-500 text-pink-400">
                  QUANTUM PLANNING
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card text-center group">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow pulse-glow">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="gradient-text text-xl">全息景点</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                故宫、长城等经典景点的VR/AR增强体验
              </p>
              <div className="mt-4 flex justify-center">
                <Badge variant="outline" className="border-blue-500 text-blue-400">
                  HOLOGRAM READY
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card text-center group">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow pulse-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="gradient-text text-xl">赛博服务</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI导游、实时翻译、数字支付一站式解决方案
              </p>
              <div className="mt-4 flex justify-center">
                <Badge variant="outline" className="border-green-500 text-green-400">
                  CYBER ASSISTANT
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-16 mb-12 cyber-card">
            <TabsTrigger value="plan" className="text-lg h-full">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <div className="text-left">
                  <div>行程矩阵</div>
                  <div className="text-xs opacity-70">ITINERARY MATRIX</div>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="map" className="text-lg h-full">
              <div className="flex items-center gap-3">
                <Map className="w-6 h-6" />
                <div className="text-left">
                  <div>数字地图</div>
                  <div className="text-xs opacity-70">NEURAL MAP</div>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="tips" className="text-lg h-full">
              <div className="flex items-center gap-3">
                <Info className="w-6 h-6" />
                <div className="text-left">
                  <div>系统协议</div>
                  <div className="text-xs opacity-70">TRAVEL PROTOCOLS</div>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan" className="relative">
            <div className="scan-line absolute inset-0 pointer-events-none" />
            <TravelPlan />
          </TabsContent>

          <TabsContent value="map" className="relative">
            <div className="scan-line absolute inset-0 pointer-events-none" />
            <MapView />
          </TabsContent>

          <TabsContent value="tips" className="relative">
            <div className="scan-line absolute inset-0 pointer-events-none" />
            <TravelTips />
          </TabsContent>
        </Tabs>
      </div>

      {/* Status Footer */}
      <footer className="relative border-t border-cyan-500/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-blue-400" />
                <span className="text-sm">NEURAL NETWORK CONNECTED</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-sm">DATABASE SYNCHRONIZED</span>
              </div>
            </div>
            <div className="text-muted-foreground font-mono text-sm">
              © 2024 NEO BEIJING TRAVEL SYSTEM v2024.FUTURE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;