import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => ({ photo: values[0], user: values[1] }))
    .catch(() => ({ photo: null, user: null }));
}
// another answer
// export default async function asyncUploadUser() {
//   let res = {};
//   try {
//     const photo = await uploadPhoto();
//     const user = await createUser();
//     res = { photo, user };
//   } catch (err) {
//     res = { photo: null, user: null };
//   }
//   return res;
// }
