import { Button } from "./ui/Button"
import { ArrowRight } from "lucide-react"
import video1 from '../public/1166915_Home_Indoor_1920x1080.webm';
import video2 from '../public/5778893_Coll_wavebreak_Animal_1280x720.webm';
import { useState, useEffect, useRef } from "react";

const videos = [video1, video2];

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);
  const nextVideoStarted = useRef(false);

  // Defer video loading until after first paint
  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Reset flag when currentVideo changes
  useEffect(() => {
    nextVideoStarted.current = false;
  }, [currentVideo]);

  // Start next video and crossfade 1 second before current ends
  const handleTimeUpdate = (e) => {
    const video = e.target;
    const timeRemaining = video.duration - video.currentTime;

    if (timeRemaining <= 1.8 && !nextVideoStarted.current) {
      nextVideoStarted.current = true;
      const nextIndex = (currentVideo + 1) % videos.length;
      if (videoRefs.current[nextIndex]) {
        videoRefs.current[nextIndex].currentTime = 0;
        videoRefs.current[nextIndex].play();
      }
      // Trigger crossfade NOW while current video is still playing
      setCurrentVideo(nextIndex);
    }
  };

  return (
    <section id="home" className="relative flex items-center w-full h-svh">
      {/* Background videos - both rendered for crossfade effect */}
      {videoLoaded && videos.map((video, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-2500 ${index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
          src={video}
          onTimeUpdate={index === currentVideo ? handleTimeUpdate : undefined}
          autoPlay={index === 0}
          muted
          playsInline
          aria-label="Video di sfondo che mostra cure veterinarie per animali domestici"
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ncvColor-grey/50 z-20"></div>
      {/* Content */}
      {/* <div className="container mx-auto relative z-30 pt-[10%]"> */}
      <div className="container relative mx-auto z-30 max-w-3xl lg:max-w-6xl px-8 lg:mt-[40svh] mt-[30%]">
        <div className="[text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.4)]">
          <h1 className="sr-only">Nuova Clinica Veterinaria Val d'Elsa - Poggibonsi</h1>
          <p className="text-lg font-semibold lg:text-xl text-muted leading-relaxed mb-2 text-pretty">
            Dal 2016 ci prendiamo cura dei vostri animali con passione, competenza e dedizione.
          </p>
          <p className="text-lg font-semibold lg:text-xl text-muted leading-relaxed mb-8 text-pretty">
            Una struttura moderna con spazi accoglienti, tecnologie avanzate e un team medico altamente qualificato.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-white group" onClick={() => document.getElementById("contatti").scrollIntoView()}>
            Prenota una visita
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      {/* </div> */}
    </section >
  )
}
