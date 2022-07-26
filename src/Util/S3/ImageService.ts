import { S3Storage } from "./S3Storage";

class ImageService {
  private storage: S3Storage;

  constructor() {
    this.storage = new S3Storage();
  }

  async sendObject(file: Express.Multer.File) {
    this.storage.saveFile(file.filename);
  }

  async getObject(key: string) {
    return await this.storage.getFiles(key);
  }
}

export default ImageService;
