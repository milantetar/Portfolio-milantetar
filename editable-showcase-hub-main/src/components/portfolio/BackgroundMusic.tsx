import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSupported, setIsSupported] = useState(true);

    const startMusic = () => {
        const audio = audioRef.current;
        if (audio && !isPlaying) {
            audio.volume = 0.5;
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((err) => {
                        console.error('Audio playback failed:', err);
                        setIsSupported(false);
                    });
            }
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.load();
            const canPlay = audio.canPlayType('audio/mpeg') || audio.canPlayType('audio/wav');
            if (!canPlay) setIsSupported(false);
        }

        const handleInteraction = () => startMusic();
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('keydown', handleInteraction, { once: true });

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    return (
        <>
            <audio
                ref={audioRef}
                src="/bg-music.mp3"
                loop
                preload="auto"
                data-fallback-src="/bg-music.wav"
            >
                Your browser does not support the audio element.
            </audio>

            {!isSupported && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
                    <p className="text-3xl text-white animate-fade-in-scale font-semibold">
                        enjoy. 🎵
                    </p>
                </div>
            )}
        </>
    );
};

export default BackgroundMusic;
