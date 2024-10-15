"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface AIAnalysisProps {
  chartType: string;
}

export default function AIAnalysis({ chartType }: AIAnalysisProps) {
  const [analysis, setAnalysis] = useState('');

  const generateAnalysis = () => {
    // In a real application, this would call an AI service
    let generatedAnalysis = '';
    switch (chartType) {
      case 'monthly':
        generatedAnalysis = "The monthly trend shows peak crowdedness in March and April, likely due to spring break. There's a noticeable dip in July, possibly due to summer vacations. Consider running promotions during slower months to boost attendance.";
        break;
      case 'hourly':
        generatedAnalysis = "The heatmap reveals that weekdays are busiest around noon, while weekends see more consistent crowding throughout the day. Consider adjusting staffing levels to match these patterns and offering early bird or night owl specials to distribute crowds more evenly.";
        break;
      case 'daily':
        generatedAnalysis = "Wednesdays and Thursdays show the highest average crowdedness and visitor numbers. The box plot indicates more variability in crowdedness on weekends. This suggests an opportunity for targeted marketing to boost typically slower days like Mondays and Tuesdays.";
        break;
      case 'comparison':
        generatedAnalysis = "There's a strong positive correlation between crowdedness and revenue, but the relationship isn't perfectly linear. This suggests that while more visitors generally mean more revenue, there might be a point of diminishing returns. Consider strategies to increase per-visitor spending during peak times.";
        break;
      default:
        generatedAnalysis = "Please select a specific chart type for analysis.";
    }
    setAnalysis(generatedAnalysis);
  };

  return (
    <div className="mt-4">
      <Button onClick={generateAnalysis}>Generate AI Analysis</Button>
      {analysis && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{analysis}</p>}
    </div>
  );
}