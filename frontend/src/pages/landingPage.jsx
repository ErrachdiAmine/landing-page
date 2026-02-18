import React, {useState, useEffect, useRef } from "react";
import photo from '../assets/profile.jpg'
import tiktok from '../assets/tiktok.svg'
import whatsapp from '../assets/whatsapp.svg'
import snapchat from '../assets/snapchat.svg'
import instagram from '../assets/instagram.svg'
import share from '../assets/send-arrow-up.svg'





function LandingPage() {


    const [isVisible, setIsVisible] = useState(false);
    
    
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    const copyLink = () => {
        const text = "http://localhost:5173/";

        navigator.clipboard.writeText(text).then(() => {
            setMessage("Link copied successfully!");
            setTimeout(() => setMessage(''), 2000);
        }).catch(err => {
            console.error('Failed to copy link: ', err)
            setMessage('Failed to copy');
            setTimeout(() => setMessage(''), 2000);
        });
    };


        

    

    
    return (
        <div className="bg-[#c8b595]">
            <header>
                <nav>
                    <ul className="flex justify-end p-4">
                        <li>
                            <button type="button" onClick={() => setIsVisible(true)} aria-label="Share" className="focus:outline-none">
                                <img className="size-9" src={share} alt="share-the-link" />
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="">
                    {isVisible && (
                        <div className="fixed inset-0 flex items-start justify-center z-50 pt-20" role="dialog" aria-modal="true" onClick={() => setIsVisible(false)}>
                            <section className="bg-[#2c2c2c] flex flex-col justify-center items-center border rounded-2xl w-80 p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                                <div className="w-full flex justify-between items-center mb-2">
                                    <span className="text-white text-sm font-bold">Partager!</span>
                                    <button type="button" aria-label="Close share" onClick={() => setIsVisible(false)} className="p-1 rounded-full hover:bg-white/10 focus:outline-none">
                                        <span className="block w-3 h-3 bg-white rounded-full"></span>
                                    </button>
                                </div>
                                <button onClick={copyLink} id="copyButton" className="mt-1 font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow transition-colors">Copy Link</button>
                                <p id="message" className="text-white text-xs mt-2">{message}</p>
                            </section>
                        </div>
                    )}
                </div>

            </header>
            <main className="flex flex-col justify-center items-center min-h-screen">
                <img className="size-45 filter drop-shadow-lg drop-shadow-pink-500/50" src={photo} alt="photo!" />
                <span className="font-bold mt-4 text-2xl ">Anass Errachdi</span>
                <span className="text-lg">dwat l3a9a kolchi kayzmat!</span>
                <div>
                    <ul className="flex space-x-3 mt-2 mb-50">
                        <li><a href="https://www.instagram.com/mrcompany7?igsh=MTN6NjRjc3lkaHBpNQ%3D%3D&utm_source=qr"><img className="size-6"  src={instagram} alt="instagram"/></a></li>
                        <li><a href="https://wa.me/212675811212"><img className="size-6" src={whatsapp} alt="whatsapp"/></a></li>
                        <li><a href="https://www.tiktok.com/@tkinter777?_r=1&_t=ZS-940lesTBqbK"><img className="size-6"  src={tiktok} alt="tiktok"/></a></li>
                        <li><a href="https://snapchat.com/t/u99wAqz0"><img className="size-6"  src={snapchat} alt="snapchat"/></a></li>
                    </ul>
                </div>
            </main>
            <footer>
                <ul>

                </ul>
            </footer>

        </div>
    )
}





export default LandingPage;
