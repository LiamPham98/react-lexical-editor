# editor-react

A powerful React rich text editor based on [SunEditor](https://github.com/JiHong88/SunEditor), hỗ trợ upload ảnh/video custom, đổi font, responsive toolbar, và nhiều tính năng mở rộng.

## Cài đặt

```bash
npm i @shisuipham/editor-react
```

```bash
pnpm i @shisuipham/editor-react
```


**Peer dependencies:**  
- react >= 18
- react-dom >= 18

## Import font (nếu dùng Google Fonts)

Font mặc định đã được import sẵn trong file CSS, nhưng bạn có thể thêm vào `public/index.html` hoặc file CSS chính nếu cần:

```html
<link href="https://fonts.googleapis.com/css?family=Manrope:300,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap" rel="stylesheet">
```

## Sử dụng cơ bản

```tsx
import { Editor } from 'editor-react';

function App() {
  return (
    <Editor
      value="<p>Hello SunEditor!</p>"
      onChange={val => console.log(val)}
      placeholder="Nhập nội dung..."
      imageConfig={{
        baseUrl: 'https://your-server.com/api/upload-image',
        prefixUrl: 'https://cdn.your-server.com/images/'
      }}
      videoConfig={{
        baseUrl: 'https://your-server.com/api/upload-video',
        prefixUrl: 'https://cdn.your-server.com/videos/'
      }}
      readOnly={false}
    />
  );
}
```

## API

### `<Editor />` Props

| Prop         | Kiểu dữ liệu | Mô tả                                  |
|--------------|--------------|----------------------------------------|
| value        | string       | Nội dung HTML                          |
| onChange     | function     | Hàm callback khi nội dung thay đổi     |
| placeholder  | string       | Placeholder cho editor                 |
| readOnly     | boolean      | Chế độ chỉ đọc                         |
| imageConfig  | object       | Config upload ảnh (xem bên dưới)       |
| videoConfig  | object       | Config upload video (xem bên dưới)     |
| ...props     | SunEditorReactProps | Các props khác của SunEditor   |

### imageConfig / videoConfig

```ts
{
  baseUrl: string; // Endpoint upload file
  prefixUrl?: string; // Prefix cho url trả về (nếu cần)
  notification?: (message: string) => void; // Hàm callback khi upload thành công/thất bại
  files?: File[]; // (ít dùng) override file upload
}
```

## Custom upload handler

Bạn có thể tuỳ chỉnh upload ảnh/video qua các plugin:

### Upload ảnh

```ts
import { uploadHandler } from 'editor-react';

uploadHandler({
  files, // File[] từ SunEditor
  upload, // Hàm callback của SunEditor
  baseUrl: 'https://your-server.com/api/upload-image',
  prefixUrl: 'https://cdn.your-server.com/images/',
  notification: (msg) => alert(msg),
});
```

### Upload video

```ts
import { uploadVideoHandler } from 'editor-react';

uploadVideoHandler({
  files, // File[] từ SunEditor
  upload, // Hàm callback của SunEditor
  baseUrl: 'https://your-server.com/api/upload-video',
  prefixUrl: 'https://cdn.your-server.com/videos/',
  notification: (msg) => alert(msg),
});
```

## Đổi font chữ

- Đã cấu hình sẵn các font phổ biến (Manrope, Roboto, Montserrat, v.v.).
- Để font hiển thị đúng, cần import font vào dự án như hướng dẫn trên.
- Có thể custom thêm font trong `setOptions.font`.

## Responsive toolbar

Toolbar sẽ tự động thay đổi theo kích thước màn hình.

## Hiển thị loading khi upload

Bạn có thể tự thêm overlay loading bằng React state.  
Ví dụ:

```tsx
const [loading, setLoading] = useState(false);

<Editor
  // ...
  onImageUploadBefore={async (files, _, upload) => {
    setLoading(true);
    await uploadHandler({ ...imageConfig, files, upload });
    setLoading(false);
    return true;
  }}
  // ...
/>
{loading && <div className="editor-loading-overlay">Đang upload...</div>}
```

**CSS:**
```css
.editor-loading-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
```

## Các tính năng nổi bật

- **Upload ảnh/video**: Tích hợp sẵn custom handler, dễ dàng mở rộng.
- **Đổi font, màu sắc, định dạng**: Đầy đủ các tính năng soạn thảo hiện đại.
- **Responsive**: Toolbar tự động co giãn theo màn hình.
- **Dễ mở rộng**: Có thể truyền thêm props của SunEditor gốc.

## License

MIT

---

**Nếu bạn cần thêm ví dụ hoặc hướng dẫn chi tiết hơn, hãy xem trong source code hoặc liên hệ tác giả.**
