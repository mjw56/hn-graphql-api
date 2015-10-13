import fetch from 'isomorphic-fetch';
import config from './config';

export async function getTopStories() {
  const response = await fetch(config.topstories);
  const storyIds = await response.json();
  return storyIds;
}

export async function getItem(id) {
  const response = await fetch(config.item(id));
  const item = await response.json();
  return item;
}

export async function getUser(id) {
  const response = await fetch(config.user(id));
  const user = await response.json();
  return user;
}
