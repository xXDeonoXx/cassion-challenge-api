import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { BadRequestError } from 'routing-controllers';
import { AWS_REGION, AWS_BUCKET } from '../config';

export const uploadFileToS3 = async file => {
  const client = new S3({
    region: AWS_REGION,
  });
  if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png')
    throw new BadRequestError('Invalid file, only png and jpeg are allowed');

  const generatedName = `${uuidv4()}-${file.originalname}`;

  await client
    .putObject({
      Bucket: `${process.env.AWS_BUCKET}/${'images'}`,
      Key: generatedName,
      ACL: 'public-read',
      Body: file.buffer,
      ContentType: 'image/png',
    })
    .promise();

  return `https://${AWS_BUCKET}.s3-${AWS_REGION}.amazonaws.com/images/${generatedName}`;
};
