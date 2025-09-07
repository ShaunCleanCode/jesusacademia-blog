'use client';

import React, { useCallback } from 'react';
import { Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link,
  Image,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Type,
  Minus
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface BlogEditorToolbarProps {
  editor: Editor;
  onImageUpload: (file: File) => void;
  isUploading: boolean;
}

export const BlogEditorToolbar: React.FC<BlogEditorToolbarProps> = ({
  editor,
  onImageUpload,
  isUploading
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const ToolbarButton = ({ 
    onClick, 
    isActive = false, 
    disabled = false, 
    children, 
    title 
  }: {
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
          : isDark
            ? 'text-gray-400 hover:text-white hover:bg-gray-700'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {children}
    </button>
  );

  const handleImageClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        onImageUpload(file);
      }
    };
    input.click();
  }, [onImageUpload]);

  const handleLinkClick = useCallback(() => {
    const url = window.prompt('링크 URL을 입력하세요:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} border-b ${isDark ? 'border-gray-600' : 'border-gray-200'} p-4`}>
      <div className="flex flex-wrap items-center gap-1">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive('bold')}
            title="굵게"
          >
            <Bold className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive('italic')}
            title="기울임"
          >
            <Italic className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive('strike')}
            title="취소선"
          >
            <Strikethrough className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive('code')}
            title="인라인 코드"
          >
            <Code className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* Headings */}
        <div className="flex items-center gap-1 px-2 border-r border-gray-300 dark:border-gray-600">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            isActive={editor.isActive('heading', { level: 1 })}
            title="제목 1"
          >
            <Heading1 className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            isActive={editor.isActive('heading', { level: 2 })}
            title="제목 2"
          >
            <Heading2 className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            isActive={editor.isActive('heading', { level: 3 })}
            title="제목 3"
          >
            <Heading3 className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 px-2 border-r border-gray-300 dark:border-gray-600">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive('bulletList')}
            title="글머리 기호 목록"
          >
            <List className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive('orderedList')}
            title="번호 목록"
          >
            <ListOrdered className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* Block Elements */}
        <div className="flex items-center gap-1 px-2 border-r border-gray-300 dark:border-gray-600">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive('blockquote')}
            title="인용문"
          >
            <Quote className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            isActive={editor.isActive('codeBlock')}
            title="코드 블록"
          >
            <Code2 className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="구분선"
          >
            <Minus className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-1 px-2 border-r border-gray-300 dark:border-gray-600">
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            isActive={editor.isActive({ textAlign: 'left' })}
            title="왼쪽 정렬"
          >
            <AlignLeft className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            isActive={editor.isActive({ textAlign: 'center' })}
            title="가운데 정렬"
          >
            <AlignCenter className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            isActive={editor.isActive({ textAlign: 'right' })}
            title="오른쪽 정렬"
          >
            <AlignRight className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            isActive={editor.isActive({ textAlign: 'justify' })}
            title="양쪽 정렬"
          >
            <AlignJustify className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* Media & Links */}
        <div className="flex items-center gap-1 px-2 border-r border-gray-300 dark:border-gray-600">
          <ToolbarButton
            onClick={handleLinkClick}
            isActive={editor.isActive('link')}
            title="링크 삽입"
          >
            <Link className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={handleImageClick}
            disabled={isUploading}
            title="이미지 삽입"
          >
            <Image className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* History */}
        <div className="flex items-center gap-1 px-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="실행 취소"
          >
            <Undo className="w-4 h-4" />
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="다시 실행"
          >
            <Redo className="w-4 h-4" />
          </ToolbarButton>
        </div>
      </div>
    </div>
  );
};
