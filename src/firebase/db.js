import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const doCreateProject = (id, projectName, password, description, userId) =>
  db.ref(`projects/${id}`).set({
    projectName,
    password,
    description,
    userId
  });

export const onceGetProject = (id) =>
  db.ref(`projects/${id}`).once('value');
