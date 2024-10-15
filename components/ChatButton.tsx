"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import AIChat from '@/components/AIChat';

interface ChatButtonProps {
  onUpdateGraph: (updates: any) => void;
}

export default function ChatButton({ onUpdateGraph }: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
      </Button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-[500px] bg-background border rounded-lg shadow-lg">
          <AIChat onUpdateGraph={onUpdateGraph} />
        </div>
      )}
    </>
  );
}