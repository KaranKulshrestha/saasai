"use client";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            space-y-5 font-extrabold">
                <h1>Modern Generative AI Tool</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Conversations",
                                "Music Generation",
                                "Video Generation",
                                "Image Generation",
                                "Code Generation",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Create content using our platform 100x faster.
            </div>
        </div>
    );
};