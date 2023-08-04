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
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      following[]->{username,image},
      followers[]->{username,image},
      "followingNum": count(following),
      "followersNum": count(followers),
      "posts": count(*[_type=="post" && author->username == "${username}"]),
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
