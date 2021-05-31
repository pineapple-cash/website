fetch('https://api.allorigins.win/raw?url=https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=pnapltoken').then(function(response) {
  // response.json() returns a promise, use the same .then syntax to work with the results
  response.json().then(function(users){
    // users is now our actual variable parsed from the json, so we can use it
    users.forEach(function(user){
      document.getElementById("twitter-followers").innerHTML = (user.followers_count)
    });
  });
}).catch(err => console.error(err));