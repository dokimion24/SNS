import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export async function addUser({ username, id, email, image, name }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"]{
      ...,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
      }`
  );
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}" || username match "${keyword}")`
    : '';
  return client.fetch(
    ` *[_type == "user" ${query}]{
      ...,
      "id":_id,
      "following": count(following),
      "followers": count(followers)
    }`
  );
}

export async function getUserForProfile(username: string) {
  return client
    .fetch(
      ` *[_type == "user" && username == "${username}}[0]{
      ...,
      "id":_id,
      "following": count(following),
      "followers": count(followers),
      "posts": count(*[_type=="post" && author->username == ${username}])
    }`
    )
    .then((user) => ({
      ...user,
      following: user.following ?? 0,
      followers: user.followers ?? 0,
      post: user.post ?? 0,
    }));
}
