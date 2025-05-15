import axios from 'axios';
import { UploadInfo } from '../types';

export const uploadVideoHandler = async (props: UploadInfo) => {
  const { files, upload, baseUrl, prefixUrl = '', notification } = props;

  const formData = new FormData();
  formData.append('file', files[0]);
  try {
    const response = await axios.post(baseUrl, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    const data = response.data;
    if (data.file_path) {
      upload({
        result: [{
          url: prefixUrl + data.file_path, // hoặc `${prefix}${data.file_path}` nếu cần
          name: files[0].name,
          size: files[0].size,
        }],
        errorMessage: '',
      });
    } else {
			notification?.('Upload video failed!');
    }
  } catch (e) {
		notification?.('Upload video error!');
  }
};