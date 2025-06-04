'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  buttonClassName?: string;
  label?: string;
  showIcon?: boolean;
  url?: string; // Nueva prop para la URL personalizada
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  buttonClassName,
  label = "Descargar PDF",
  showIcon = true,
  url, // Recibir la URL como prop
}) => {
  const handleDownload = () => {
    const defaultDocId = '17kiUa_lzCbnoTtOHzCc2db3d8Cc2Ott_Af1P6N4o3ic';
    // Usar la URL proporcionada o la URL por defecto si no se proporciona ninguna
    const finalUrl = url || `https://docs.google.com/document/d/${defaultDocId}/export?format=pdf`;

    window.open(finalUrl, '_blank', 'noopener,noreferrer'); // Añadido noopener,noreferrer por seguridad
  };

  const defaultDarkButtonStyle = "bg-foreground text-primary hover:bg-foreground/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";
  const finalClassName = buttonClassName || defaultDarkButtonStyle;

  return (
    <Button 
      onClick={handleDownload} 
      size="lg" 
      className={`${finalClassName} px-8 py-3`}
    >
      {showIcon && <Download className="mr-2 h-5 w-5" />}
      {label}
    </Button>
  );
};

export default DownloadButton;
