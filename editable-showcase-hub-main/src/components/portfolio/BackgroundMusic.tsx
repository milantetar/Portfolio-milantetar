import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        const tryPlay = () => {
            if (audioRef.current && !userInteracted) {
                audioRef.current
                    .play()
                    .then(() => {
                        setIsPlaying(true);
                        setUserInteracted(true);
                    })
                    .catch(() => {
                        // Wait for interaction
                        setUserInteracted(false);
                    });
            }
        };

        tryPlay();

        const handleInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                });
            }
            setUserInteracted(true);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };
    }, [isPlaying, userInteracted]);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/your-music.mp3"
                loop
                preload="auto"
            />
            {/* Optional Toggle Button */}
            <button
                onClick={toggleMusic}
                className="fixed bottom-4 right-4 z-50 bg-primary text-white px-4 py-2 rounded shadow-md hover:bg-primary/90"
            >
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </>
    );
};

export default BackgroundMusic;
