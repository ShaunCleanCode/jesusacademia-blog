'use client';

import React, { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface BlogImageUploadProps {
  onImageUpload: (file: File) => void;
  isUploading: boolean;
}

export const BlogImageUpload: React.FC<BlogImageUploadProps> = ({
  onImageUpload,
  isUploading
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      files.forEach(file => {
        onImageUpload(file);
        setUploadedFiles(prev => [...prev, file]);
      });
    }
  }, [onImageUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      files.forEach(file => {
        onImageUpload(file);
        setUploadedFiles(prev => [...prev, file]);
      });
    }
  }, [onImageUpload]);

  const removeFile = useCallback((index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="p-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ${
          isDragOver
            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
            : isDark
              ? 'border-gray-600 hover:border-gray-500'
              : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className={`p-4 rounded-full ${
            isDragOver
              ? 'bg-purple-100 dark:bg-purple-800'
              : isDark
                ? 'bg-gray-700'
                : 'bg-gray-100'
          }`}>
            <ImageIcon className={`w-8 h-8 ${
              isDragOver
                ? 'text-purple-600'
                : isDark
                  ? 'text-gray-400'
                  : 'text-gray-500'
            }`} />
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              이미지를 드래그하거나 클릭하여 업로드
            </h3>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              PNG, JPG, GIF, WebP 형식 지원
            </p>
          </div>
          
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${
              isDark
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}>
              <Upload className="w-5 h-5 mr-2" />
              파일 선택
            </div>
          </label>
        </div>
      </div>

      {/* Upload Status */}
      {isUploading && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
            <span className="text-blue-700 dark:text-blue-300 font-medium">
              이미지 업로드 중...
            </span>
          </div>
        </div>
      )}

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className={`text-sm font-semibold mb-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            업로드된 파일
          </h4>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-xl ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <ImageIcon className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className={`text-sm font-medium ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {file.name}
                    </p>
                    <p className={`text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <button
                    onClick={() => removeFile(index)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
