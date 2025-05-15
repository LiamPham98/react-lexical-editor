import SunEditor from 'suneditor-react';
import { uploadHandler } from '../plugins/uploadImage';
import { uploadVideoHandler } from '../plugins/uploadVideo';
import { EditorProps } from '../types';

import 'suneditor/dist/css/suneditor.min.css';
import './SunEditor.css';

export function Editor({
  value,
  onChange,
  placeholder = 'Enter some text...',
  readOnly = false,
  imageConfig,
  videoConfig,
  ...props
}: EditorProps) {
  return (
    <SunEditor
      onImageUploadBefore={(files, _, upload) => {
        if (imageConfig?.baseUrl) {
          uploadHandler({
            ...imageConfig || {},
            files: imageConfig?.files || files,
            upload,
          });
        }

        return true
      }}
      onVideoUploadBefore={(files, _, upload) => {
        if (videoConfig?.baseUrl) {
          uploadVideoHandler({
            ...videoConfig,
            files: videoConfig?.files || files,
            upload,
          });
        }
        return true;
      }}
      setContents={value}
      onChange={onChange}
      placeholder={placeholder}
      disable={readOnly}
      height="300px"
      setOptions={{
        buttonList: [
          // default
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['paragraphStyle', 'blockquote'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['fontColor', 'hiliteColor', 'textStyle'],
          ['removeFormat'],
          ['outdent', 'indent'],
          ['align', 'horizontalRule', 'list', 'lineHeight'],
          ['table', 'link', 'image', 'video'],
          ['fullScreen', 'showBlocks', 'codeView'],
          ['preview'],
          ['save'],
          // responsive
          ['%1161', [
              ['undo', 'redo'],
              [':p-Formats-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
              ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
              ['fontColor', 'hiliteColor', 'textStyle'],
              ['removeFormat'],
              ['outdent', 'indent'],
              ['align', 'horizontalRule', 'list', 'lineHeight'],
              ['-right', 'save'],
              ['-right', ':i-Etc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview'],
              ['-right', ':r-Table&Media-default.more_plus', 'table', 'link', 'image', 'video'],
          ]],
          ['%893', [
              ['undo', 'redo'],
              [':p-Formats-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
              ['bold', 'underline', 'italic', 'strike'],
              [':t-Fonts-default.more_text', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
              ['removeFormat'],
              ['outdent', 'indent'],
              ['align', 'horizontalRule', 'list', 'lineHeight'],
              ['-right', 'save'],
              ['-right', ':i-Etc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview'],
              ['-right', ':r-Table&Media-default.more_plus', 'table', 'link', 'image', 'video'],
          ]],
          ['%855', [
              ['undo', 'redo'],
              [':p-Formats-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
              [':t-Fonts-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
              ['removeFormat'],
              ['outdent', 'indent'],
              ['align', 'horizontalRule', 'list', 'lineHeight'],
              [':r-Table&Media-default.more_plus', 'table', 'link', 'image', 'video'],
              ['-right', 'save'],
              ['-right', ':i-Etc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview'],
          ]],
          ['%563', [
              ['undo', 'redo'],
              [':p-Formats-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
              [':t-Fonts-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
              ['removeFormat'],
              ['outdent', 'indent'],
              [':e-List&Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
              [':r-Table&Media-default.more_plus', 'table', 'link', 'image', 'video'],
              ['-right', 'save'],
              ['-right', ':i-Etc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview'],
          ]],
          ['%458', [
              ['undo', 'redo'],
              [':p-Formats-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
              [':t-Fonts-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle', 'removeFormat'],
              [':e-List&Line-default.more_horizontal', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
              [':r-Table&Media-default.more_plus', 'table', 'link', 'image', 'video'],
              ['-right', 'save'],
              ['-right', ':i-Etc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview'],
          ]],
        ],
        font: [
          'Manrope',
          'Arial',
          'Tahoma',
          'Courier New',
          'Times New Roman',
          'Verdana',
          'Roboto', // Thêm font bạn muốn
          'Montserrat'
        ],
        defaultStyle: 'font-family: Manrope, Roboto, Arial, sans-serif; font-size: 14px;',
        videoFileInput: true,
      }}
      {...props}
    />
  );
} 