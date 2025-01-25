import { Client } from 'minio';

const minioClient = new Client({
    port: 9000,
    region: process.env.MINIO_ENDPOINT!,
    endPoint: process.env.MINIO_ENDPOINT!,
    accessKey: process.env.MINIO_ACCESSKEY!,
    secretKey: process.env.MINIO_SECRETKEY!,
})

const bucketName = process.env.MINIO_BUCKET_NAME!;

export { minioClient, bucketName };
