// src/components/dashboard/MonitorImprove.jsx
import { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Download,
  FileText,
  BarChart2,
  Clock,
  Volume2,
  VolumeX,
  Maximize2,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  User,
  Bot,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  TrendingUp,
  Zap,
  Activity,
} from 'lucide-react';

// Animated Wave Component
const AudioWave = ({ isPlaying }) => {
  const bars = 50;

  return (
    <div className="flex items-center justify-center gap-[2px] h-16 w-full px-4 overflow-hidden">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all ${
            isPlaying ? 'animate-wave' : 'h-1'
          }`}
          style={{
            background: `linear-gradient(to top, #8b5cf6, #6366f1, #3b82f6)`,
            height: isPlaying ? `${Math.random() * 100}%` : '4px',
            animationDelay: `${i * 0.05}s`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`,
          }}
        />
      ))}

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            height: 15%;
          }
          50% {
            height: ${Math.random() * 70 + 30}%;
          }
        }
        .animate-wave {
          animation: wave ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Colorful Spectrum Wave Component
const SpectrumWave = ({ isPlaying }) => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const generateBars = () => {
      return Array.from({ length: 60 }).map(() => ({
        height: Math.random() * 100,
        color: `hsl(${Math.random() * 60 + 250}, 80%, 60%)`,
      }));
    };

    setBars(generateBars());

    if (isPlaying) {
      const interval = setInterval(() => {
        setBars(generateBars());
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="flex items-end justify-center gap-[2px] h-20 w-full bg-gray-950/50 rounded-xl px-2 overflow-hidden">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-1 rounded-t-full transition-all duration-100 ease-out"
          style={{
            height: isPlaying ? `${bar.height}%` : '8%',
            background: isPlaying
              ? `linear-gradient(to top, ${bar.color}, #8b5cf6)`
              : '#374151',
            opacity: isPlaying ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default function MonitorImprove() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('transcript');
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);

  // Simulate progress when playing
  useEffect(() => {
    let interval;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.5, 100));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  // Format time
  const formatTime = (percentage) => {
    const totalSeconds = 127; // 2:07
    const currentSeconds = Math.floor((percentage / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getRemainingTime = (percentage) => {
    const totalSeconds = 127;
    const remaining = totalSeconds - Math.floor((percentage / 100) * totalSeconds);
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `-${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Conversation messages
  const conversation = [
    {
      id: 1,
      type: 'ai',
      message: "Hello! You're speaking with CallRolin AI, your AI support assistant. How can I assist you today?",
      time: '0:02',
      sentiment: 'neutral',
    },
    {
      id: 2,
      type: 'user',
      message: "Hi, I need help with my recent transaction. It shows as pending for 3 days now.",
      time: '0:15',
      sentiment: 'concerned',
    },
    {
      id: 3,
      type: 'ai',
      message: "I understand your concern. Let me look into that for you. Could you please provide your account number or the last 4 digits of your card?",
      time: '0:22',
      sentiment: 'helpful',
    },
    {
      id: 4,
      type: 'user',
      message: "Sure, it's ending in 4829.",
      time: '0:35',
      sentiment: 'neutral',
    },
    {
      id: 5,
      type: 'ai',
      message: "Thank you. I can see the transaction for $245.00 at TechStore. This is currently being processed by the merchant. It should clear within 24-48 hours. Would you like me to set up a notification for when it completes?",
      time: '0:48',
      sentiment: 'positive',
    },
  ];

  // Call details
  const callDetails = {
    ticketId: 'call_+1747892341',
    date: 'Aug 18, 2025',
    time: '23:56 UTC',
    duration: '2m 7s',
    agent: 'AI Assistant v2.4',
    customer: 'John D. (ID: 892341)',
    resolution: 'Resolved',
    satisfaction: 4.5,
  };

  // Latency metrics
  const latencyMetrics = [
    { label: 'Response Time', value: '0.3s', status: 'good' },
    { label: 'Processing', value: '0.15s', status: 'good' },
    { label: 'TTS Generation', value: '0.2s', status: 'good' },
    { label: 'Total Latency', value: '0.65s', status: 'good' },
  ];

  return (
    <div className="h-full flex flex-col space-y-4 md:space-y-6 p-4 md:p-6 lg:p-8 overflow-y-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Call Monitoring & Improvement
          </h1>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 bg-green-900/40 text-green-400 text-xs font-medium rounded-full border border-green-700/50 flex items-center gap-1.5">
              <CheckCircle size={12} />
              Resolved
            </span>
            <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full">
              {callDetails.ticketId}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {callDetails.date} at {callDetails.time}
          </span>
          <span>•</span>
          <span>{callDetails.duration}</span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ThumbsUp size={14} className="text-green-400" />
            {callDetails.satisfaction}/5
          </span>
        </div>
      </div>

      {/* Audio Player Card */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-2xl overflow-hidden">
        <div className="p-4 md:p-6">
          {/* Player Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Bot size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Call with {callDetails.customer}
                </h3>
                <p className="text-sm text-gray-400">
                  Agent: {callDetails.agent}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Download size={18} />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Maximize2 size={18} />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* Animated Waveform */}
          <div className="my-6">
            <SpectrumWave isPlaying={isPlaying} />
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400 min-w-[40px] font-mono">
                {formatTime(progress)}
              </span>

              <div
                className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden cursor-pointer group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const percent = ((e.clientX - rect.left) / rect.width) * 100;
                  setProgress(Math.max(0, Math.min(100, percent)));
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-full relative transition-all duration-100"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <span className="text-xs text-gray-400 min-w-[50px] text-right font-mono">
                {getRemainingTime(progress)}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              {/* Volume */}
              <div className="flex items-center gap-2 w-32">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-400 rounded-full"
                    style={{ width: isMuted ? 0 : `${volume}%` }}
                  />
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <SkipBack size={22} />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200"
                >
                  {isPlaying ? (
                    <Pause size={26} className="text-white" />
                  ) : (
                    <Play size={26} className="text-white ml-1" fill="white" />
                  )}
                </button>

                <button
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <SkipForward size={22} />
                </button>
              </div>

              {/* Speed Control */}
              <div className="w-32 flex justify-end">
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-purple-500">
                  <option>0.5x</option>
                  <option>0.75x</option>
                  <option selected>1x</option>
                  <option>1.25x</option>
                  <option>1.5x</option>
                  <option>2x</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-800">
          <div className="flex">
            {[
              { id: 'transcript', label: 'Transcript', icon: FileText },
              { id: 'details', label: 'Details', icon: BarChart2 },
              { id: 'latency', label: 'Latency', icon: Activity },
            ].map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-sm font-medium transition-all flex items-center justify-center gap-2 relative
                    ${
                      isActive
                        ? 'text-white bg-purple-900/20'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                    }`}
                >
                  <IconComponent size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-2xl overflow-hidden flex flex-col">
        {/* Tab Content */}
        {activeTab === 'transcript' && (
          <>
            {/* Initialization Logs */}
            <div className="p-4 md:p-5 border-b border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-900/40 flex items-center justify-center">
                  <CheckCircle size={16} className="text-green-400" />
                </div>
                <h3 className="font-medium text-white">
                  Initialization Logs
                </h3>
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                  4 entries
                </span>
              </div>
              <div className="text-xs font-mono bg-gray-950/70 rounded-xl p-4 space-y-1 text-green-400/80 overflow-x-auto">
                <div className="flex gap-2">
                  <span className="text-gray-500">[00:00:00]</span>
                  <span className="text-blue-400">[INIT]</span>
                  <span>Model loaded successfully</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">[00:00:01]</span>
                  <span className="text-blue-400">[INIT]</span>
                  <span>Voice synthesis engine ready</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">[00:00:01]</span>
                  <span className="text-blue-400">[INIT]</span>
                  <span>Knowledge base connected</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">[00:00:02]</span>
                  <span className="text-blue-400">[INIT]</span>
                  <span>Compliance policies applied</span>
                </div>
              </div>
            </div>

            {/* Conversation */}
            <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
              {conversation.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-4 ${
                    msg.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.type === 'ai'
                        ? 'bg-gradient-to-br from-purple-600 to-indigo-600'
                        : 'bg-gray-700'
                    }`}
                  >
                    {msg.type === 'ai' ? (
                      <Bot size={18} className="text-white" />
                    ) : (
                      <User size={18} className="text-gray-300" />
                    )}
                  </div>

                  <div
                    className={`flex-1 max-w-[80%] ${
                      msg.type === 'user' ? 'text-right' : ''
                    }`}
                  >
                    <div
                      className={`inline-block p-4 rounded-2xl ${
                        msg.type === 'ai'
                          ? 'bg-gray-800/70 text-gray-200 rounded-tl-none'
                          : 'bg-purple-600/20 text-purple-100 rounded-tr-none'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                    </div>
                    <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-500">
                      <span>{msg.time}</span>
                      {msg.type === 'ai' && (
                        <>
                          <span>•</span>
                          <button className="hover:text-green-400 transition-colors">
                            <ThumbsUp size={12} />
                          </button>
                          <button className="hover:text-red-400 transition-colors">
                            <ThumbsDown size={12} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Waiting indicator */}
              <div className="flex justify-center py-4">
                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <MessageSquare size={16} />
                  End of conversation
                </span>
              </div>
            </div>
          </>
        )}

        {activeTab === 'details' && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Duration', value: callDetails.duration, icon: Clock, color: 'blue' },
                { label: 'Resolution', value: callDetails.resolution, icon: CheckCircle, color: 'green' },
                { label: 'Satisfaction', value: `${callDetails.satisfaction}/5`, icon: ThumbsUp, color: 'purple' },
                { label: 'Agent', value: 'AI v2.4', icon: Bot, color: 'indigo' },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent size={16} className={`text-${item.color}-400`} />
                      <span className="text-xs text-gray-500">{item.label}</span>
                    </div>
                    <p className="text-xl font-bold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Call Summary */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5">
              <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                <FileText size={16} className="text-purple-400" />
                Call Summary
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Customer called regarding a pending transaction of $245.00 at TechStore. 
                The AI agent verified the customer's identity, reviewed the transaction, 
                and explained that it was still being processed by the merchant. 
                Customer was satisfied with the explanation and agreed to wait for the 
                automatic notification when the transaction clears.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Transaction Inquiry', 'Resolved', 'High Satisfaction', 'No Escalation'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'latency' && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latencyMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm text-gray-400">{metric.label}</p>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={20} className="text-green-400" />
                    <span className="text-xs text-green-400 uppercase">Good</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5">
              <h3 className="font-medium text-white mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-purple-400" />
                Response Time Over Call
              </h3>
              <div className="h-40 flex items-end justify-around gap-2">
                {[65, 45, 70, 55, 40, 60, 35, 50, 45, 55].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-600 to-indigo-500 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0:00</span>
                <span>0:30</span>
                <span>1:00</span>
                <span>1:30</span>
                <span>2:07</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}