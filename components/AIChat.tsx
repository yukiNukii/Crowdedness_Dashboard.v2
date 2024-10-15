"use client"

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AIChatProps {
  onUpdateGraph: (updates: any) => void;
}

export default function AIChat({ onUpdateGraph }: AIChatProps) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [
      ...messages,
      { role: 'user', content: input },
      { role: 'assistant', content: 'Processing your request...' }
    ];
    setMessages(newMessages);
    setInput('');

    // Simulate AI response (replace with actual AI service call in production)
    setTimeout(() => {
      const aiResponse = processAIResponse(input);
      setMessages(messages => [
        ...messages.slice(0, -1),
        { role: 'assistant', content: aiResponse.message }
      ]);
      if (aiResponse.graphUpdates) {
        onUpdateGraph(aiResponse.graphUpdates);
      }
    }, 1000);
  };

  const processAIResponse = (userInput: string) => {
    // This is a mock implementation. Replace with actual AI processing logic.
    const lowercaseInput = userInput.toLowerCase();
    if (lowercaseInput.includes('show monthly data')) {
      return {
        message: "Certainly! I've updated the graph to show monthly data.",
        graphUpdates: { type: 'monthly' }
      };
    } else if (lowercaseInput.includes('display hourly heatmap')) {
      return {
        message: "Sure, I've changed the view to display the hourly heatmap.",
        graphUpdates: { type: 'hourly' }
      };
    } else if (lowercaseInput.includes('compare weekdays')) {
      return {
        message: "I've updated the graph to compare weekdays for you.",
        graphUpdates: { type: 'comparison', filter: 'weekdays' }
      };
    } else {
      return {
        message: "I'm sorry, I couldn't process that request. Could you please try asking something else about the facility data?",
        graphUpdates: null
      };
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow mb-4 p-4" ref={scrollAreaRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex p-4">
        <Input
          type="text"
          placeholder="Ask about the facility data..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-grow mr-2"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}