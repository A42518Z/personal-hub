export const happyHourUploadWhitelist = ['2942893806@qq.com'];

export const happyHourUploadConfig = {
  maxFileSizeMb: 10,
  acceptedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  futureApi: {
    createUploadUrl: '/api/happy-hour/create-upload-url',
    commitUpload: '/api/happy-hour/commit-upload',
  },
};
