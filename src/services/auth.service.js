export const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const emailVerification = () => {
  firebase.auth().currentUser.sendEmailVerification();
}

export const loginUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
