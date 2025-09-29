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
  Heart
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("plan");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-yellow-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              北京旅游计划
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              探索千年古都的魅力，体验传统与现代的完美融合
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                5天4晚深度游
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <Landmark className="w-4 h-4 mr-2" />
                15+经典景点
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                适合所有人群
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full" />
        <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-white/20 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="card-hover text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle>精心规划</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                每日行程精心安排，合理分配时间，让您充分体验北京魅力
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <CardTitle>经典景点</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                涵盖故宫、长城、颐和园等必游景点，深度感受历史文化
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle>贴心服务</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                提供详细的交通指南、美食推荐和实用贴士，让旅行更轻松
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-14 mb-8">
            <TabsTrigger value="plan" className="text-base">
              <Calendar className="w-5 h-5 mr-2" />
              行程规划
            </TabsTrigger>
            <TabsTrigger value="map" className="text-base">
              <Map className="w-5 h-5 mr-2" />
              景点地图
            </TabsTrigger>
            <TabsTrigger value="tips" className="text-base">
              <Info className="w-5 h-5 mr-2" />
              旅游贴士
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan">
            <TravelPlan />
          </TabsContent>

          <TabsContent value="map">
            <MapView />
          </TabsContent>

          <TabsContent value="tips">
            <TravelTips />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 北京旅游计划 - 让每一次旅行都成为美好回忆
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;