'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  const handleDownload = () => {
    const docId = '17kiUa_lzCbnoTtOHzCc2db3d8Cc2Ott_Af1P6N4o3ic';
    const url = `https://docs.google.com/document/d/${docId}/export?format=pdf`;

    window.open(url, '_blank');
  };

  // Styles copied from the existing button in page.tsx for consistency
  const darkButtonStyle = "bg-foreground text-primary hover:bg-foreground/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";

  return (
    <Button 
      onClick={handleDownload} 
      size="lg" 
      className={`${darkButtonStyle} px-8 py-3`}
    >
      <Download className="mr-2 h-5 w-5" />
      Descargar PDF
    </Button>
  );
};

export default DownloadButton;
