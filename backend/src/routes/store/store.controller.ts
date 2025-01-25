import { minioClient, bucketName } from "@/libs/store";

const GenPresignedUrl = async ({ query: { name }, set, log }) => {
	try {
		const url = minioClient.presignedPutObject(bucketName, name, 24 * 60 * 60);
		set.status = 201;
		return url;
	} catch (err) {
		log.error(err);
		set.status = 500;
		return { message: "Internal Server Error" };
	}
};

export default {
	GenPresignedUrl
};
