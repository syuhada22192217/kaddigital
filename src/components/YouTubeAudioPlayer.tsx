import React, { useEffect, useRef } from 'react';

interface YouTubeAudioPlayerProps {
  isPlaying: boolean;
  videoUrl?: string;
}

export const YouTubeAudioPlayer: React.FC<YouTubeAudioPlayerProps> = ({
  isPlaying,
  videoUrl = "https://www.youtube.com/embed/IBFWlwnrpdU?enablejsapi=1&autoplay=1&loop=1&playlist=IBFWlwnrpdU"
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    try {
      const message = isPlaying
        ? JSON.stringify({ event: 'command', func: 'playVideo', args: '' })
        : JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' });

      iframeRef.current.contentWindow.postMessage(message, '*');
    } catch {
      // Ignore cross-origin postMessage errors
    }
  }, [isPlaying]);

  return (
    <div className="sr-only pointer-events-none" aria-hidden="true">
      <iframe
        ref={iframeRef}
        width="100"
        height="100"
        src={videoUrl}
        title="Wedding Background Music"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};
