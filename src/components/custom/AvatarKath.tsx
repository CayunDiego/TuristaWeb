'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  initialY: number;
}


const HeartIcon = ({ size = 20, fill = '#e91e63' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width={`${size * 51.2}pt`}
    height={`${size * 48.36}pt`}
    viewBox="0 0 1280.000000 1228.000000"
    preserveAspectRatio="xMidYMid meet"
    style={{ width: size, height: size }}
    fill={fill}
    stroke="none"
  >
    <g transform="translate(0.000000,1228.000000) scale(0.100000,-0.100000)">
      <path d="M3580 10519 c-418 -47 -855 -233 -1197 -510 -191 -155 -415 -411 -552 -631 -303 -485 -468 -1037 -512 -1713 -76 -1171 375 -2000 1524 -2802 212 -148 408 -273 822 -523 570 -344 790 -490 1082 -717 659 -511 1296 -1213 1537 -1693 29 -58 58 -121 65 -140 l13 -35 18 50 c139 397 809 1167 1560 1795 329 275 617 476 1240 865 743 464 1044 683 1364 995 484 471 737 947 833 1567 24 155 24 661 0 863 -59 490 -166 864 -357 1240 -135 265 -301 491 -511 695 -369 358 -792 567 -1309 647 -133 20 -528 17 -665 -5 -787 -131 -1435 -583 -1911 -1332 -64 -100 -179 -313 -229 -426 l-39 -86 -101 201 c-55 111 -137 260 -182 332 -497 793 -1205 1275 -2008 1364 -105 12 -378 11 -485 -1z"/>
    </g>
  </svg>
);

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const TIME_HEART = 5000

export function AvatarKath() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEggFoto, setShowEasterEggFoto] = useState(false); // Estado para el easter egg de la foto
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const avatarRef = useRef(null);
  const fotoUstedesSrc = "/images/20250117_210659.jpg"; // Asegúrate de que esta ruta sea correcta
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const createHeart = () => {
      // Los corazones aparecen desde la parte inferior de la ventana
      const size = getRandom(15, 25);
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Date.now(),
          x: getRandom(0, window.innerWidth),
          y: window.innerHeight,
          size,
          opacity: 1,
          initialY: window.innerHeight,
        },
      ]);
    };

    const animateHearts = () => {
      setHearts((prevHearts) =>
        prevHearts.map((heart) => ({
          ...heart,
          y: heart.y - getRandom(1, 3),
          opacity: Math.max(0, 1 - (heart.initialY - heart.y) / 200),
        })).filter((heart) => heart.opacity > 0 && heart.y > -20)
      );
    };

    // La animación de corazones solo se activa si el mouse está encima Y el easter egg de la foto NO está activo
    if (isMouseOver && !showEasterEggFoto) {
      const interval = setInterval(() => {
        createHeart();
        animateHearts();
      }, 100);
      return () => clearInterval(interval);
    } else {
      setHearts([]); // Limpia los corazones si el mouse no está encima o si el easter egg de la foto se activó
      return undefined;
    }
  }, [isMouseOver, showEasterEggFoto]); // Dependencias: isMouseOver y showEasterEggFoto

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMouseOver(true);
    }, TIME_HEART);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleClickFoto = () => {
    // Solo incrementa el contador si el easter egg de la foto NO está activo
    if (!showEasterEggFoto) {
      setClickCount((prevCount) => prevCount + 1);
      if (clickCount + 1 === 10) {
        setShowEasterEggFoto(true); // Activa el easter egg de la foto
        setHearts([]); // Limpia cualquier corazón que esté animándose
      }
    }
  };

  const avatarContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };


  const heartsContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1000,
  };


  return (
    <>
      <div style={avatarContainerStyle}>
        {showEasterEggFoto && (
          <div className="heart">💗</div>
        )}
        <Avatar
          id="avatar-kath"
          className="w-32 h-32 md:w-40 md:h-40 shadow-lg"
          onClick={handleClickFoto} // Maneja el clic para el easter egg de la foto
          ref={avatarRef}
          onMouseEnter={handleMouseEnter} // Maneja el hover para los corazones
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter} // Equivalente de hover para touch
          onTouchEnd={handleMouseLeave}
        >
          <AvatarImage
            src={showEasterEggFoto ? fotoUstedesSrc : "/images/sobremi.png"} // Cambia la imagen
            alt={showEasterEggFoto ? 'Ustedes dos' : 'Katherine Rangel'} // Cambia el alt
            style={{ objectFit: 'cover' }}
          />
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>
      </div>
      <div style={heartsContainerStyle}>
        {hearts.map((heart: any) => (
          <div
            key={heart.id}
            style={{
              position: 'absolute',
              left: heart.x,
              top: heart.y,
              opacity: heart.opacity,
              fontSize: heart.size,
              pointerEvents: 'none',
            }}
          >
            <HeartIcon size={heart.size} fill="#e91e63" />
          </div>
        ))}
      </div>
    </>
  );
}