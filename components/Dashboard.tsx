"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyChart from '@/components/MonthlyChart';
import HeatmapChart from '@/components/HeatmapChart';
import BoxPlotChart from '@/components/BoxPlotChart';
import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';
import CorrelationTable from '@/components/CorrelationTable';
import AIAnalysis from '@/components/AIAnalysis';
import ChatButton from '@/components/ChatButton';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import FileUpload from '@/components/FileUpload';
import { parseCSV } from '@/utils/csvUtils';

export default function Dashboard() {
  const { setTheme } = useTheme();
  const [selectedDataset, setSelectedDataset] = useState('dataset1');
  const [csvData, setCsvData] = useState<any[] | null>(null);
  const [summaryAnalysis, setSummaryAnalysis] = useState('');
  const [activeTab, setActiveTab] = useState('monthly');
  const [graphFilter, setGraphFilter] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const data = await parseCSV(file);
      setCsvData(data);
    } catch (error) {
      console.error('Error parsing CSV:', error);
    }
  };

  const generateSummaryAnalysis = () => {
    const analysis = "Overall, the facility experiences peak crowdedness during weekdays around noon, with Wednesdays and Thursdays being the busiest. There's a strong correlation between crowdedness and revenue, suggesting opportunities for optimizing pricing and capacity. Seasonal trends show higher attendance in spring, particularly in March and April. To maximize efficiency and revenue, consider implementing dynamic pricing, targeted marketing for slower periods, and adjusting staffing levels to match peak times.";
    setSummaryAnalysis(analysis);
  };

  const handleGraphUpdate = (updates: any) => {
    if (updates.type) {
      setActiveTab(updates.type);
    }
    if (updates.filter) {
      setGraphFilter(updates.filter);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Facility Crowdedness Dashboard</h1>
        <div className="flex items-center space-x-4">
          <FileUpload onFileUpload={handleFileUpload} />
          <select
            className="p-2 border rounded"
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
          >
            <option value="dataset1">Dataset 1</option>
            <option value="dataset2">Dataset 2</option>
            <option value="dataset3">Dataset 3</option>
          </select>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("light")}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overall Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={generateSummaryAnalysis}>Generate Overall Analysis</Button>
          {summaryAnalysis && <p className="mt-4 text-sm">{summaryAnalysis}</p>}
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="hourly">Hourly</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Crowdedness</CardTitle>
            </CardHeader>
            <CardContent>
              <MonthlyChart dataset={selectedDataset} data={csvData} filter={graphFilter} />
              <AIAnalysis chartType="monthly" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hourly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hourly Crowdedness Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <HeatmapChart dataset={selectedDataset} data={csvData} filter={graphFilter} />
              <AIAnalysis chartType="hourly" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Crowdedness Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <BoxPlotChart dataset={selectedDataset} data={csvData} filter={graphFilter} />
              <AIAnalysis chartType="daily" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Daily Average Crowdedness and Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart dataset={selectedDataset} data={csvData} filter={graphFilter} />
              <AIAnalysis chartType="daily" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hourly Crowdedness Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart dataset={selectedDataset} data={csvData} filter={graphFilter} />
              <AIAnalysis chartType="comparison" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Crowdedness and Revenue Correlation</CardTitle>
            </CardHeader>
            <CardContent>
              <CorrelationTable dataset={selectedDataset} data={csvData} filter={graphFilter} />
              <AIAnalysis chartType="comparison" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <ChatButton onUpdateGraph={handleGraphUpdate} />
    </div>
  );
}