"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileUpload(file);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" onClick={() => document.getElementById('fileInput')?.click()}>
        Upload CSV
      </Button>
      <input
        id="fileInput"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="hidden"
      />
      {fileName && <span className="text-sm text-gray-500">{fileName}</span>}
    </div>
  );
}