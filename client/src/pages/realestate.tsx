import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function RealEstatePage() {
  const [style, setStyle] = useState("Luxury");
  const [propertyUrl, setPropertyUrl] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqft, setSqft] = useState("");
  const [features, setFeatures] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGenerate = async () => {
    if (!features.trim() || !address.trim()) {
      toast.error("Please fill in required fields like address and features.");
      return;
    }

    setLoading(true);
    setSuccess(false);
    try {
      const res = await axios.post("/api/videos/realestate", {
        style,
        propertyUrl,
        address,
        price,
        bedrooms,
        bathrooms,
        sqft,
        features,
      });
      setVideoUrl(res.data.videoUrl);
      setSuccess(true);
      toast.success("🏡 Real estate tour generated!");
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
        <title>Real Estate Video Generator</title>
      </Head>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
            },
          }}
        />

        <div className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Real Estate Video Generator
            </h1>
            <p className="text-emerald-100 mt-2">
              Create engaging property tours from details you enter
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address */}
              <input
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Property Address *"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              {/* Property URL (optional) */}
              <input
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Property Listing URL (optional)"
                value={propertyUrl}
                onChange={(e) => setPropertyUrl(e.target.value)}
              />

              {/* Price */}
              <input
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Price (e.g., $1,200,000)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              {/* Sqft */}
              <input
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Square Footage (e.g., 3200 sqft)"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
              />

              {/* Bedrooms */}
              <input
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Bedrooms (e.g., 4)"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />

              {/* Bathrooms */}
              <input
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Bathrooms (e.g., 3)"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>

            {/* Features Textarea */}
            <textarea
              className="w-full p-4 rounded-xl bg-white/20 text-black placeholder-black/50 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Special features (e.g., pool, fireplace, smart home...) *"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              rows={4}
              required
            />

            {/* Video Style Dropdown */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Video Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/20 text-black border border-white/20 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              >
                <option>Luxury</option>
                <option>Modern</option>
                <option>Minimalist</option>
                <option>Cinematic</option>
                <option>Elegant</option>
              </select>
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                  loading
                    ? "bg-emerald-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 shadow-lg hover:shadow-emerald-500/30"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.882a2 2 0 011.447-1.842L9 10m6 0V7a3 3 0 00-6 0v3m6 0H9"
                      />
                    </svg>
                    Generate Video
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Video Section */}
          {videoUrl && (
            <div className="p-6 md:p-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Your Generated Video
              </h2>
              <div className="glass rounded-2xl overflow-hidden">
                <video controls src={videoUrl} className="w-full aspect-video" />
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href={videoUrl}
                  download="real-estate-tour.mp4"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl font-medium hover:from-green-600 hover:to-teal-600 transition-all"
                >
                  Download Video
                </a>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(videoUrl);
                    toast.success("Link copied to clipboard!");
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl font-medium hover:bg-white/20 transition-all"
                >
                  Copy Link
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-white/70 text-sm">
          <p>Powered by AI — Real Estate Video Generator</p>
        </div>
      </div>
    </div>
  );
}
