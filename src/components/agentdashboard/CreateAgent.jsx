// src/components/dashboard/CreateAgent.jsx
import { useState, useRef, useCallback } from 'react';
import {
  Mic,
  MessageSquare,
  Layout,
  Upload,
  FileText,
  Music,
  Image,
  X,
  File,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function CreateAgent() {
  const [selectedType, setSelectedType] = useState('voice');
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Supported file types
  const supportedTypes = {
    'application/pdf': { icon: FileText, color: 'text-red-400' },
    'application/msword': { icon: FileText, color: 'text-blue-400' },
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { icon: FileText, color: 'text-blue-400' },
    'text/plain': { icon: FileText, color: 'text-gray-400' },
    'audio/mpeg': { icon: Music, color: 'text-green-400' },
    'audio/wav': { icon: Music, color: 'text-green-400' },
    'image/png': { icon: Image, color: 'text-purple-400' },
    'image/jpeg': { icon: Image, color: 'text-purple-400' },
    'image/jpg': { icon: Image, color: 'text-purple-400' },
  };

  const maxFileSize = 50 * 1024 * 1024; // 50MB

  // Handle file validation
  const validateFile = (file) => {
    if (file.size > maxFileSize) {
      return { valid: false, error: 'File size exceeds 50MB limit' };
    }
    if (!Object.keys(supportedTypes).includes(file.type)) {
      return { valid: false, error: 'Unsupported file format' };
    }
    return { valid: true, error: null };
  };

  // Process files
  const processFiles = useCallback((fileList) => {
    const newFiles = Array.from(fileList).map((file) => {
      const validation = validateFile(file);
      const fileObj = {
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        valid: validation.valid,
        error: validation.error,
        preview: null,
      };

      // Generate preview for images
      if (file.type.startsWith('image/') && validation.valid) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === fileObj.id ? { ...f, preview: e.target.result } : f
            )
          );
        };
        reader.readAsDataURL(file);
      }

      return fileObj;
    });

    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  // Drag handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      processFiles(droppedFiles);
    }
  };

  // Click to browse
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    if (e.target.files.length > 0) {
      processFiles(e.target.files);
    }
    e.target.value = '';
  };

  // Remove file
  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get file icon
  const getFileIcon = (fileType) => {
    const typeInfo = supportedTypes[fileType];
    if (typeInfo) {
      const IconComponent = typeInfo.icon;
      return <IconComponent size={24} className={typeInfo.color} />;
    }
    return <File size={24} className="text-gray-400" />;
  };

  const agentTypes = [
    {
      id: 'chat',
      icon: MessageSquare,
      label: 'Chat',
      description: 'Text-based conversations',
    },
    {
      id: 'voice',
      icon: Mic,
      label: 'Voice',
      description: 'Voice interactions',
    },
    {
      id: 'multimodal',
      icon: Layout,
      label: 'Multi-modal',
      description: 'Text, voice & vision',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Create New Agent
        </h1>
        <p className="text-sm md:text-base text-gray-400">
          Configure your intelligent voice, chat or multimodal agent
        </p>
      </div>

      {/* Agent Type Selection */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-2xl p-4 md:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <span className="text-white font-bold text-xl">+</span>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Create new agent
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              Select agent type
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {agentTypes.map((type) => {
            const IconComponent = type.icon;
            const isSelected = selectedType === type.id;

            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`group p-4 md:p-5 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 md:gap-3 relative overflow-hidden
                  ${
                    isSelected
                      ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/60 text-gray-300'
                  }`}
              >
                {/* Glow effect for selected */}
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
                )}

                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    isSelected
                      ? 'bg-purple-500/20'
                      : 'bg-gray-700/50 group-hover:bg-gray-700'
                  }`}
                >
                  <IconComponent
                    size={28}
                    className={`md:w-8 md:h-8 transition-colors ${
                      isSelected ? 'text-purple-400' : 'text-gray-400'
                    }`}
                  />
                </div>

                <div className="text-center">
                  <span className="font-semibold block">{type.label}</span>
                  <span className="text-xs text-gray-500 hidden md:block">
                    {type.description}
                  </span>
                </div>

                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle size={18} className="text-purple-400" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Training Documents */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-2xl p-4 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
            Add training documents
          </h2>
          <p className="text-sm text-gray-400">
            Attach files to give your agent business context
          </p>
        </div>

        {/* Drag & Drop Zone */}
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
          className={`relative border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all duration-300 cursor-pointer
            ${
              isDragging
                ? 'border-purple-500 bg-purple-500/10 scale-[1.02]'
                : 'border-gray-700/70 bg-gray-950/30 hover:border-purple-600/50 hover:bg-gray-900/50'
            }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt,.mp3,.wav,.png,.jpg,.jpeg"
            onChange={handleFileInputChange}
            className="hidden"
          />

          <div
            className={`flex justify-center gap-4 md:gap-6 mb-4 transition-transform duration-300 ${
              isDragging ? 'scale-110' : ''
            }`}
          >
            <div className="p-3 rounded-lg bg-gray-800/50">
              <Upload
                size={28}
                className={`transition-colors ${
                  isDragging ? 'text-purple-400' : 'text-gray-500'
                }`}
              />
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50">
              <FileText size={28} className="text-red-400/70" />
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 hidden sm:block">
              <Music size={28} className="text-green-400/70" />
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 hidden sm:block">
              <Image size={28} className="text-purple-400/70" />
            </div>
          </div>

          <p className="text-base md:text-lg font-medium text-white mb-2">
            {isDragging ? 'Drop files here!' : 'Drag files here or click to browse'}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Supported: PDF, DOCX, TXT, MP3, WAV, PNG, JPG • Max 50MB each
          </p>
        </div>

        {/* Uploaded Files Preview */}
        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-300">
                Uploaded Files ({files.length})
              </h3>
              <button
                onClick={() => setFiles([])}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Remove All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {files.map((fileItem) => (
                <div
                  key={fileItem.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group
                    ${
                      fileItem.valid
                        ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600'
                        : 'bg-red-900/20 border-red-500/30'
                    }`}
                >
                  {/* Preview / Icon */}
                  <div className="flex-shrink-0">
                    {fileItem.preview ? (
                      <img
                        src={fileItem.preview}
                        alt={fileItem.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          fileItem.valid ? 'bg-gray-700/50' : 'bg-red-900/30'
                        }`}
                      >
                        {fileItem.valid ? (
                          getFileIcon(fileItem.type)
                        ) : (
                          <AlertCircle size={24} className="text-red-400" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {fileItem.name}
                    </p>
                    {fileItem.valid ? (
                      <p className="text-xs text-gray-500">
                        {formatFileSize(fileItem.size)}
                      </p>
                    ) : (
                      <p className="text-xs text-red-400">{fileItem.error}</p>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(fileItem.id);
                    }}
                    className="flex-shrink-0 p-2 rounded-lg bg-gray-700/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="mt-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700/30">
          <p className="text-xs md:text-sm text-gray-500">
            <span className="text-purple-400 font-medium">💡 Recommended:</span>{' '}
            Company handbook, product catalog, FAQ, previous call transcripts
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      {/* <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 font-medium">
          Cancel
        </button>
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200">
          Continue to Next Step →
        </button>
      </div> */}
    </div>
  );
}