'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import { BlogEditorToolbar } from './BlogEditorToolbar';
import { BlogImageUpload } from './BlogImageUpload';
import { useTheme } from '@/contexts/ThemeContext';

interface BlogEditorProps {
  initialContent?: string;
  onContentChange?: (content: string) => void;
  placeholder?: string;
  className?: string;
}

export const BlogEditor: React.FC<BlogEditorProps> = ({
  initialContent = '',
  onContentChange,
  placeholder = '포스트 내용을 작성해주세요...',
  className = ''
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isUploading, setIsUploading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 클라이언트 사이드에서만 마운트되도록 설정
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // CodeBlockLowlight로 대체
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-purple-600 hover:text-purple-700 underline',
        },
      }),
      CodeBlockLowlight.configure({
        lowlight: createLowlight(),
        HTMLAttributes: {
          class: 'bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto',
        },
      }),
    ],
    content: initialContent,
    immediatelyRender: false, // SSR 호환성을 위해 추가
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onContentChange?.(html);
    },
    editorProps: {
      attributes: {
        class: `prose prose-lg max-w-none focus:outline-none ${
          isDark ? 'prose-invert' : ''
        } ${className}`,
        placeholder,
      },
    },
  }, [isMounted, initialContent, onContentChange, isDark, className, placeholder]);

  const handleImageUpload = useCallback(async (file: File) => {
    if (!editor) return;

    setIsUploading(true);
    
    try {
      // 실제 구현에서는 이미지 업로드 API 호출
      const formData = new FormData();
      formData.append('image', file);
      
      // 임시 URL 생성 (실제로는 서버에서 처리)
      const imageUrl = URL.createObjectURL(file);
      
      // 에디터에 이미지 삽입
      editor.chain().focus().setImage({ src: imageUrl, alt: file.name }).run();
    } catch (error) {
      console.error('Image upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  }, [editor]);

  // SSR에서는 로딩 스켈레톤만 표시
  if (typeof window === 'undefined' || !isMounted || !editor) {
    return (
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
      {/* Toolbar */}
      <BlogEditorToolbar 
        editor={editor} 
        onImageUpload={handleImageUpload}
        isUploading={isUploading}
      />
      
      {/* Editor Content */}
      <div className="p-6">
        <EditorContent 
          editor={editor}
          className="min-h-[400px] focus-within:outline-none"
        />
      </div>
      
      {/* Image Upload Dropzone */}
      <BlogImageUpload 
        onImageUpload={handleImageUpload}
        isUploading={isUploading}
      />
    </div>
  );
};
