import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import { UploadBeforeHandler } from "suneditor-react/dist/types/upload";

// --- Interface Image ---
export interface UploadInfo {
  files: File[];
  upload: UploadBeforeHandler;
  baseUrl: string;
  prefixUrl?: string;
  notification?: (message: string) => void;
}

// --- Interface Editor ---
export interface EditorProps extends SunEditorReactProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  imageConfig?: Omit<UploadInfo,'files' | 'upload'> & { files?: File[] };
  videoConfig?: Omit<UploadInfo,'files' | 'upload'> & { files?: File[] };
}