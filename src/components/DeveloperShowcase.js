import React, { useState } from "react";


//Component created with AI so it help to know the imp feature of this application
const DeveloperShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("search");

  const highlightFeature = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Scroll to element smoothly
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      
      // Apply highlighting class
      element.classList.remove("spotlight-active");
      // Trigger reflow
      void element.offsetWidth; 
      element.classList.add("spotlight-active");

      // Remove class after animation finishes
      setTimeout(() => {
        element.classList.remove("spotlight-active");
      }, 4500);

      // Close the widget panel so the user can see the highlight clearly
      setIsOpen(false);
    } else {
      alert("Please click on any video to open the Watch Page and see this feature in action!");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-indigo-800 active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-300"></span>
        </span>
        <span>{isOpen ? "Close Showcase" : "⚡ Code Showcase"}</span>
      </button>

      {/* Showcase Sheet Overlay */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md p-5 shadow-2xl ring-1 ring-black/5 animate-fade-in transition-all">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
              🚀 Developer Portfolio Hub
            </h2>
            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
              Reviewing Aryan's Component Management skills
            </p>
          </div>

          {/* Feature Selector Tabs */}
          <div className="mt-4 flex border-b border-slate-100 gap-1">
            <button
              onClick={() => setActiveTab("search")}
              className={`flex-1 pb-2 text-xs font-bold transition-all border-b-2 ${
                activeTab === "search"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              🔍 Search
            </button>
            <button
              onClick={() => setActiveTab("recursion")}
              className={`flex-1 pb-2 text-xs font-bold transition-all border-b-2 ${
                activeTab === "recursion"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              🔄 Recursion
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 pb-2 text-xs font-bold transition-all border-b-2 ${
                activeTab === "chat"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              💬 Live Chat
            </button>
          </div>

          {/* Active Tab Explanations */}
          <div className="mt-4 min-h-[120px] bg-slate-50 rounded-xl p-3.5 border border-slate-150/50">
            {activeTab === "search" && (
              <div>
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Debounced Autocomplete Search
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-medium">
                  Saves API bandwidth using a 200ms debounce timeout to wait for user typing pause, and caches results inside Redux. 
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2 py-1 border border-emerald-100 text-[10px] text-emerald-700 font-semibold">
                  <span>💡 Tip:</span>
                  <span>Type the same query twice - you'll see "⚡ Cached" in the search bar!</span>
                </div>
                <button
                  onClick={() => highlightFeature("search-container-showcase")}
                  className="mt-3.5 w-full rounded-lg bg-indigo-600 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 active:scale-95 transition-all shadow-sm"
                >
                  Spotlight Search Bar
                </button>
              </div>
            )}

            {activeTab === "recursion" && (
              <div>
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Recursive Comments Thread
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-medium">
                  Renders infinite-depth comment trees by dynamically referencing {"<CommentList />"} recursively inside its own mapping layout.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-indigo-50 px-2 py-1 border border-indigo-100 text-[10px] text-indigo-700 font-semibold">
                  <span>💡 Tip:</span>
                  <span>Explore the tree indentation below the video player.</span>
                </div>
                <button
                  onClick={() => highlightFeature("comments-showcase")}
                  className="mt-3.5 w-full rounded-lg bg-indigo-600 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 active:scale-95 transition-all shadow-sm"
                >
                  Spotlight Comments Section
                </button>
              </div>
            )}

            {activeTab === "chat" && (
              <div>
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Live Chat Queue Management
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-medium">
                  Simulates a high-performance stream. Evicts old entries when messages exceed 100 items (shift/unshift queue buffer) to keep the DOM node footprint small.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-indigo-50 px-2 py-1 border border-indigo-100 text-[10px] text-indigo-700 font-semibold">
                  <span>💡 Tip:</span>
                  <span>Add messages to test the automatic tail scroll containment!</span>
                </div>
                <button
                  onClick={() => highlightFeature("live-chat-showcase")}
                  className="mt-3.5 w-full rounded-lg bg-indigo-600 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 active:scale-95 transition-all shadow-sm"
                >
                  Spotlight Live Chat Panel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperShowcase;
