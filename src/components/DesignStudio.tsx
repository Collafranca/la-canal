import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import FileSaver from 'file-saver';
const { saveAs } = FileSaver;
import { Download, Share2, Smile } from 'lucide-react';

const DesignStudio: React.FC = () => {
    const ogTitle = 'La Canal';
    const ogSubtitle = '';
    const ogBgColor = '#ffffff';
    const ogTextColor = '#B16050';

    const favBgColor = '#B16050';
    const favTextColor = '#ffffff';
    const favText = 'C';

    const ogRef = useRef<HTMLDivElement>(null);
    const favRef = useRef<HTMLDivElement>(null);

    const downloadOg = async () => {
        if (ogRef.current) {
            const dataUrl = await toPng(ogRef.current, { width: 1200, height: 630 });
            saveAs(dataUrl, 'og-image.png');
        }
    };

    const downloadFavicon = async () => {
        if (favRef.current) {
            const dataUrl = await toPng(favRef.current, { pixelRatio: 2 });
            saveAs(dataUrl, 'favicon.png');
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 p-8 font-sans text-stone-800">


            <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                <section className="space-y-8">
                    <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
                        <Share2 className="w-6 h-6 text-brand-terra" />
                        <h2 className="text-2xl font-serif">Imatge Open Graph</h2>
                    </div>

                    <div className="border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white p-4">
                        <div
                            ref={ogRef}
                            style={{ backgroundColor: ogBgColor, color: ogTextColor }}
                            className="w-full aspect-[1.91/1] flex flex-col items-center justify-center text-center p-12 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }}></div>

                            <div className="relative z-10 text-center">
                                <h3 className="leading-none whitespace-nowrap" style={{ fontSize: '260px', fontFamily: 'Bodoni Sans Display, serif' }}>
                                    {ogTitle}
                                </h3>
                                {ogSubtitle && (
                                    <p className="text-3xl font-light opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {ogSubtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                        <button
                            onClick={downloadOg}
                            className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Descarregar Imatge OG (PNG)
                        </button>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
                        <Smile className="w-6 h-6 text-brand-terra" />
                        <h2 className="text-2xl font-serif">Favicon / Icona</h2>
                    </div>

                    <div className="border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white p-8 flex justify-center">
                        <div
                            ref={favRef}
                            style={{ backgroundColor: favBgColor, color: favTextColor }}
                            className="w-64 h-64 flex flex-col items-center justify-center text-center relative rounded-[48px]"
                        >
                            <span
                                className="leading-none"
                                style={{ fontSize: '180px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                            >
                                {favText}
                            </span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                        <button
                            onClick={downloadFavicon}
                            className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Descarregar Favicon (PNG)
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default DesignStudio;