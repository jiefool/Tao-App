var Api = {
  getCheckList(){
    var url = 'https://taotechph.com/api/v1/check_lists.json?access_token=cf71cbba9eeb324cdb95b95b5974235eecfeedd48339b46b270206420dfdc6b7';
    return fetch(url).then((res) => res.json());
  },
  getTaoProjects(){
    var url = 'https://taotechph.com/api/v1/tao_projects.json?access_token=cf71cbba9eeb324cdb95b95b5974235eecfeedd48339b46b270206420dfdc6b7';
    return fetch(url).then((res) => res.json());
  },
  getTaoAroundPhs(){
    var url = 'https://taotechph.com/api/v1/tao_around_phs.json?access_token=cf71cbba9eeb324cdb95b95b5974235eecfeedd48339b46b270206420dfdc6b7';
    return fetch(url).then((res) => res.json());
  },
  sendNgeyngeyApplication(firstName, lastName, nationality, birthDate, email){
    var url = 'https://taotechph.com/api/v1/camp_ngeyngey_applications.json?access_token=cf71cbba9eeb324cdb95b95b5974235eecfeedd48339b46b270206420dfdc6b7';
    return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    nationality: nationality,
                    birth_date: birthDate,
                    email: email
                  })
                });
  },

  createLoginExplorer(data){
    var url = 'https://taotechph.com/api/v1/explorers.json?access_token=cf71cbba9eeb324cdb95b95b5974235eecfeedd48339b46b270206420dfdc6b7';
    return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    login: data.login ,
                    book_ref: data.book_ref,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email
                  })
                }).then((res) => res.json());
  }
};

module.exports = Api;