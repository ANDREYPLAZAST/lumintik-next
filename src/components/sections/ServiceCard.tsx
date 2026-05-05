"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type ServiceCardProps = {
  title: string;
  description?: string;
  videoSrc?: string;
  /** Tailwind classes that control the card's column span and borders. */
  span: string;
  /** CSS object-position for the video on mobile (e.g. "right center"). Defaults to "center". */
  mobileObjectPosition?: string;
};

export function ServiceCard({
  title,
  description,
  videoSrc,
  span,
  mobileObjectPosition,
}: Readonly<ServiceCardProps>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const defaultTime = videoSrc && videoSrc.includes("#t=") 
    ? parseFloat(videoSrc.split("#t=")[1]) || 0 
    : 0;

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = defaultTime;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = defaultTime;
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "relative box-border h-96 w-full text-left outline-none border-slate-200 overflow-hidden border-solid cursor-pointer bg-transparent p-0",
        span,
      )}
      aria-label={title}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <div className="relative box-border h-full w-full overflow-hidden bg-white">
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="auto"
            className={cn(
              "absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700",
              hovered ? "scale-[1.03]" : "scale-100",
              mobileObjectPosition ? "md:!object-center" : "",
            )}
            style={mobileObjectPosition ? { objectPosition: mobileObjectPosition } : undefined}
          />
        )}

        <div
          className={cn(
            "absolute inset-0 z-10 transition-colors duration-500",
            hovered ? "bg-black/25" : "bg-black/15",
          )}
        />

        <div className="absolute bg-[linear-gradient(to_top,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.55)_38%,rgba(2,6,23,0.08)_76%,rgba(2,6,23,0)_100%)] box-border h-[320px] w-full z-20 left-0 bottom-0 pointer-events-none" />

        <div className="relative h-[18px] w-[18px] z-20 left-5 top-5 rounded-full border border-slate-300" />

        <span
          className={cn(
            "absolute text-4xl font-semibold box-border block leading-10 w-[calc(100%_-_40px)] z-20 left-5 bottom-4 transition-colors duration-500",
            "text-white",
          )}
        >
          {description && (
            <p
              className={cn(
                "text-sm font-normal leading-snug mb-3 transition-all duration-500",
                hovered
                  ? "text-white/90 opacity-100 translate-y-0"
                  : "text-white/80 opacity-0 translate-y-2",
              )}
            >
              {description}
            </p>
          )}
          <div
            className={cn(
              "items-center box-border flex justify-between leading-[46.8px] w-full transition-transform duration-500",
              hovered ? "translate-y-0" : "translate-y-1",
            )}
          >
            {title}
            <span
              className={cn(
                "box-border h-7 w-7 flex items-center justify-center transition-all duration-500",
                hovered
                  ? "opacity-100 translate-x-1 text-white"
                  : "opacity-70 translate-x-0 text-white",
              )}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </div>
        </span>

        <div
          className={cn(
            "absolute inset-0 z-30 pointer-events-none border transition-all duration-500",
            hovered
              ? "border-blue-500/40 shadow-[inset_0_0_40px_rgba(59,130,246,0.12)]"
              : "border-transparent",
          )}
        />
      </div>
    </button>
  );
}
