import axios from 'axios';
import FileDownload from 'js-file-download';

export async function downloadAsset() {
  try {
    // const { data } = await axios.post(
    //   `http://localhost:1337/warkawikassets/getzip`
    // );

    const response = await axios({
      url: 'http://localhost:1337/warkawikassets/getzip',
      method: 'POST',
      responseType: 'blob',
      headers: { Accept: 'multipart/form-data' },
    });

    if (response && response.data) {
      FileDownload(response.data, 'example.zip');
      return true;
    }

    return false;
  } catch (e) {
    console.log(e);
  }
}
