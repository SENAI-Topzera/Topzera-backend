import { S3Storage } from "../utils/S3Storage";

class UploadImageService {
    async sendObject(file: Express.Multer.File) {
        const storage = new S3Storage();
        storage.saveFile(file.filename);
    }
}

export default UploadImageService;