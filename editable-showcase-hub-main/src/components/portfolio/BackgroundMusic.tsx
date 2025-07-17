import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            // Try playing automatically
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.warn("Autoplay failed. User interaction is required.", error);
                });
            }
        }
    }, []);

    return (
        <audio
            ref={audioRef}
			src="/bg-music.mp3"
            autoPlay
            loop
            hidden
        />
    );
};

export default BackgroundMusic;
