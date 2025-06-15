import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function MarketingPage() {
  const [features, setFeatures] = useState("");
  const [tone, setTone] = useState("Exciting");
  const [audience, setAudience] = useState("Young Adults");
  const [style, setStyle] = useState("Modern");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGenerate = async () => {
    if (!features.trim()) {
      toast.error("Please enter product features");
      return;
    }

    setLoading(true);
    setSuccess(false);
    try {
      const res = await axios.post("http://localhost:5000/api/videos/marketing", {
        features,
        tone,
        audience,
        style,
      });
      setVideoUrl(res.data.videoUrl);
      setSuccess(true);
      toast.success("🎉 Video generated successfully!");
    } catch (err) {
      console.error("Error generating video:", err);
      toast.error("❌ Video generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-x-hidden relative">
      <Head>
        <title>Suplimax Marketing Video Generator</title>
      </Head>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Toaster position="top-center" toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
          }
        }} />

        <div className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Suplimax Marketing Video Generator
            </h1>
            <p className="text-orange-100 mt-2">
              Create compelling promotional content for Suplimax Energy Drink
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Product Features *
                  </label>
                  <textarea
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/20 text-black border border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none placeholder-black/50"
                    placeholder="Energy boost, tropical flavor, vitamin B12..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Video Style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/20 text-black border border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  >
                    <option>Modern</option>
                    <option>Retro</option>
                    <option>Minimalist</option>
                    <option>Cinematic</option>
                    <option>Dynamic</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Tone
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/20 text-black border border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  >
                    <option>Exciting</option>
                    <option>Professional</option>
                    <option>Playful</option>
                    <option>Inspirational</option>
                    <option>Edgy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Target Audience
                  </label>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/20 text-black border border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  >
                    <option>Young Adults</option>
                    <option>Athletes</option>
                    <option>Students</option>
                    <option>Professionals</option>
                    <option>Gamers</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                  loading
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-orange-500/30"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                    </svg>
                    Generate Video
                  </>
                )}
              </button>
            </div>
          </div>

          {videoUrl && (
            <div className="p-6 md:p-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Your Generated Video
              </h2>

              <div className="glass rounded-2xl overflow-hidden">
                <video
                  controls
                  src={videoUrl}
                  className="w-full aspect-video"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href={videoUrl}
                  download="suplimax-marketing-video.mp4"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl font-medium hover:from-green-600 hover:to-teal-600 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download Video
                </a>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(videoUrl);
                    toast.success("Link copied to clipboard!");
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl font-medium hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-white/70 text-sm">
          <p>Powered by Google Gemini (Veo3) AI technology</p>
        </div>
      </div>
    </div>
  );
}
