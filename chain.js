// each .then returns a NEW promise:
// return a value -> passed to next .then
login(user)
  .then(token   => getProfile(token))
  .then(profile => getPosts(profile.id))
  .then(posts   => render(posts))
  .catch(err    => showError(err));
// flat! compare with the pyramid
