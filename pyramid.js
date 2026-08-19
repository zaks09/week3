login(user, token => {
  getProfile(token, profile => {
    getPosts(profile.id, posts => {
      getComments(posts[0], comments => {
        render(comments, () => {
          console.log("finally done!");
          // ...and where does error
          // handling go? everywhere.
        });
      });
    });
  });
});
