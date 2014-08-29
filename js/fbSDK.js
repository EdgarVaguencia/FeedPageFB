// Load the SDK asynchronously and login User
window.fbAsyncInit = function() {
  FB.init({
    appId      : 'APIKEY',
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });
  FB.login(function(response){
    if (response.status == 'connected') {
      loadFeed();
      // console.log("Logged into your app ('connected')");
    }else if( response.status == 'not_authorized' ){
      console.log("Logged into Facebook, but not your app ('not_authorized')");
    }else{
      console.log("Not logged into Facebook and can't tell if they are logged into your app or not.");
    };
  },{scope: 'manage_pages'});
  loadFeed = function () {
    var scriptTag = document.createElement('script');
    scriptTag.src = "js/feed.js";
    document.body.appendChild(scriptTag);
  }
};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));