import axios from 'axios';
import { UploadInfo } from '../types';

export const uploadHandler = async (props: UploadInfo) => {
  const { files, upload, baseUrl, prefixUrl = '', notification } = props;
  const formData = new FormData();
  formData.append('file', files[0]);

  try {
    const response = await axios.post(
      baseUrl,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    const data = response.data;
    if (data.file_path) {
      upload({
        errorMessage: '',
        result: [
          {
            url: prefixUrl + data.file_path,
            name: files[0].name,
            size: files[0].size,
          },
        ],
      });
      notification?.('Upload successful!');
    } else {
      notification?.('Upload failed!');
    }
  } catch (e) {
    notification?.('Upload failed!');
  }
};
