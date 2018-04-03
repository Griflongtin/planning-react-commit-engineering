import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    projects: [],
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUser = (id) =>
  db.ref(`users/${id}`).once('value');

export const doCreateProject = (id, projectName, password, description, userId) =>
  db.ref(`projects/${id}`).set({
    projectName,
    password,
    description,
    userId
  });

export const onceGetProjects = () =>
  db.ref('projects').once('value');

export const onceGetProject = (id) =>
  db.ref(`projects/${id}`).once('value');
