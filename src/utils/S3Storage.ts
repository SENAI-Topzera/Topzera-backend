import { S3 } from "@aws-sdk/client-s3";
import path from "path";
import multerConfig from "../config/multer";
import mime from "mime-types";
import fs from "fs";

export class S3Storage {
    private client: S3;

    constructor() {
        this.client = new S3({
            region: process.env.S3_BUCKET_REGION
        })
    }

    async saveFile(fileName: string): Promise<void> {
        const originalPath = path.resolve(multerConfig.directory);
        const files = fs.readdirSync(originalPath);

        console.log(files);
        
        this.client.putObject({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: fileName,
            Body: files,
            ContentType: "image/jpeg"
        });

        files.forEach(file => {
            fs.promises.unlink(file);
        });
    }
}   