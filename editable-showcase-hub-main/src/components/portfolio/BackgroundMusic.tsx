import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSupported, setIsSupported] = useState(true);

    const startMusic = () => {
        const audio = audioRef.current;
        if (audio && !isPlaying) {
            audio.volume = 0.5; // Keep it civil
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
            audio.load(); // Preload the goodness
            const canPlay = audio.canPlayType('audio/mpeg') || audio.canPlayType('audio/wav');
            if (!canPlay) setIsSupported(false);
        }

        // Auto-play on first interaction
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
                <div className="fixed inset-0 bg-red-900 text-white z-50 flex items-center justify-center text-center px-4">
                    <p className="text-lg">Sorry, your device/browser doesn’t support audio playback. 🎵</p>
                </div>
            )}
        </>
    );
};

export default BackgroundMusic;