var Api = {
  getCheckList(){
    var url = 'https://taotechph.com/api/v1/check_lists.json?access_token=cf71cbba9eeb324cdb95b95b5974235eecfeedd48339b46b270206420dfdc6b7';
    // var url = 'https://facebook.github.io/react-native/movies.json';
    return fetch(url).then((res) => res.json());
  }
};

module.exports = Api;
