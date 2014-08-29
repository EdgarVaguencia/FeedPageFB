// author : Edgar Valencia
// page : http://github.com/edgarvaguencia
  feedPages = {

    page : '136506299698497', //Unisem - Semillas todo terreno
    // 
    // La idea es tener un panel de opciones para indicar la url de la página que se desea optener 
    //

    jsonApi : [],

    getActivity: function () {
      var self = this;
      FB.api('/'+this.page+'/feed',function(response){
        if ( response && !response.error ) {
          self._processData(response);
        };
      });
    },

    _processData: function (data) {
      var self = this;
      if ( data.data ) {
        $.each(data.data,function (k,i) {
          // Filtramos la actividad de post propios (no tagged, no likes, no writes own status)
          if ( i.from.id == self.page && i.status_type ) {
            // console.log(i);
            self.jsonApi.id = i.id;
            self.jsonApi.title = i.message;
            self.jsonApi.img = i.picture;
            self.jsonApi.url = i.link;
            self.jsonApi.likes = i.likes;
            self.jsonApi.comments = i.comments;
          };
        });
        self._render();
      };
      this._morePost(data.paging);
    },

    _morePost: function(data){
      console.log(data);
    },

    _render: function () {
      if ( $('#srcTemplate').length == 0 ) {
        $('body').append($('<script/>',{
          id : 'srcTemplate',
          src : 'js/handlebars-v1.3.0.js',
        }));
      };
    },

  }