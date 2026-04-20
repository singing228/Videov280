import React, { useState } from "react";
import { Header } from "./components/Header";
import { VideoPlayer } from "./components/VideoPlayer";
import { SegmentEditor } from "./components/SegmentEditor";
import { VideoManagementHome } from "./components/VideoManagementHome";

import { VideoPlayerPage } from "./components/VideoPlayerPage";

interface Segment {
  id: number;
  time: string;
  title: string;
  source?: 'manual' | 'ai';
}

export default function App() {
  const [page, setPage] = useState<"editor" | "home" | "player">("editor");
  const [currentTime, setCurrentTime] = useState(333);
  const [videoDuration, setVideoDuration] = useState(0);

  // Shared state for editor page
  const [editorSegments, setEditorSegments] = useState<Segment[]>([]);

  if (page === "home") {
    return <VideoManagementHome onNavigateToEditor={() => setPage("editor")} onNavigateToPlayer={() => setPage("player")} />;
  }

  if (page === "player") {
    return <VideoPlayerPage onBack={() => setPage("home")} segments={editorSegments} />;
  }

  return (
    <div className="h-screen flex flex-col bg-[#fafafa] font-['Roboto',sans-serif]">
      <Header onBack={() => setPage("home")} />
      <main className="flex-1 min-h-0 overflow-hidden pt-4 px-4 pb-8 flex flex-col lg:flex-row gap-4 w-full">
        {/* Left Column: Video Player */}
        <div className="flex-1 lg:flex-[6]">
          <VideoPlayer
            segments={editorSegments}
            currentTime={currentTime}
            onTimeChange={setCurrentTime}
            onDurationChange={setVideoDuration}
          />
        </div>

        {/* Right Column: Editor */}
        <div className="flex-1 lg:flex-[4] lg:relative">
          <div className="lg:absolute lg:inset-0">
            <SegmentEditor
              onCancel={() => setPage("home")}
              segments={editorSegments}
              setSegments={setEditorSegments}
              currentTime={currentTime}
              videoDuration={videoDuration}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
