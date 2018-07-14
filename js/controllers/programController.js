function programController() {


  this.card1 = [{
    img: "../../assets/img//camilleAntoine_1.jpg",
  }, {
    img: "../../assets/img/2cv.JPG",
  }, {
    img: "../../assets/img/CamilleAntoine_2.JPG",
  }, {
    img: "../../assets/img/kayak.JPG",
  }, {
    img: "../../assets/img/lotus.JPG",
  }, {
    img: "../../assets/img/star.JPG",
  }];


  this.card = [{
    id: 1,
    img: "../../assets/img/AgriSolutionLogo.jpg",
    title: "AgriSolution",
    tag: "Web, design",
    imgBio: "Nopsis Network est une société  de production participative, Nous sommes un nouveau type de communauté en ligne, Travaillons ensemble !",
  }, {
    id: 2,
    img: "../../assets/img/AgriRescueLogo.jpg",
    title: "Agri-Rescue",
    tag: "Web, Design",
    imgBio: "",
  }, {
    id: 3,
    img: "../../assets/img/lcdpLogo.jpg",
    title: "Campus LCDP",
    tag: "Web, design",
    imgBio: "Le Campus LCDP est un centre d'innovations et d'expérimentations agricoles. Communication sur les réseaux sociaux (buffer, hootsuite, MailChimp) Réalisation de vidéos (Interview, clip, reportage). Refonte du site Web du Campus avec Wordpress et la Suite Adobe(Ps, Ai, xd).",
  }, {
    id: 4,
    img: "../../assets/img/TechTimeLogo.jpg",
    title: "Tech Time",
    tag: "Événement",
    imgBio: "Événements créés par les passionnés du numérique pour les passionnés du numérique ! Venez-vous informer, échanger et développer vos compétences !Cet événement s'adresse à tout type de public (Entrepreneurs, salariés, étudiants, passionnés...).",

  }, {
    id: 5,
    img: "../../assets/img/mtsLogo.jpg",
    title: "C & T ",
    tag: "Web",
    imgBio: "Amélioration de la plateforme de supervision dématérialisée.La supervision est site d’acquisition de données (mesures, base de données...) Ajout de fonctionnalité (Impression de graphique, Api GoogleMaps).Refonte du site Web Supervision HTML/CSS, JS et la Suite Adobe(Ps, Ai, xd).",

  }, {
    id: 6,
    img: "../../assets/img/AgriSolutionLogo.jpg",
    title: "BIJ",
    tag: "Web",
    imgBio: "Création d’une application web pour le Bureau d’Information de Jeunesse. Le Vrai du Faux est un journal interactif autour de l’éducation aux médias et à l’information. Création des maquettes avec Photoshop et Moqups. Création de page animés en AngularJS, Javascript et CSS.",
  }, {
    id: 7,
    img: "../../assets/img/AgriRescueLogo.jpg",
    title: "Hackathon",
    tag: "Meetup",
    imgBio: "Création d’une application permettant le diagnostic et le suivi de personnes souffrant. d’hyperactivité vésicale. Prix “Coup de Coeur du Jury”.",

  }, {
    id: 8,
    img: "../../assets/img/lcdpLogo.jpg",
    title: "Hackathon",
    tag: "Album Photo",
    imgBio: "Création d'une application web mobile permettant de poster votre plus belle moustache dans le cadre de l’événement “Movember” . Création des maquettes avec Photoshop et Moqups, intégration du site (HTML/CSS, JS). Premier prix",
  }];


  $(document).ready(function(){


        $('.slider').slider({
          indicators:false,
          interval: 900,
        });
      $('#fullpage').fullpage({
        navigation: true,
      });


      var userFeed = new Instafeed({
          get: 'user',
          userId: '1697317359',
          limit: 12,
          resolution: 'low_resolution',
          accessToken: '1697317359.1677ed0.035030b365cf49769bb3f7f3099469e8',
          sortBy: 'most-recent',
          template: '<div class="center col s4 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
      });


      userFeed.run();


      // This will create a single gallery from all elements that have class "gallery-item"
      $('.gallery').magnificPopup({
          type: 'image',
          delegate: 'a',
          gallery: {
              enabled: true
          }
      });



                  $(function($) {
                    var roles = [
                      'Graphiste',
                      'Web Desiger',
                      'Photographe',
                      'Vidéaste',
                      'Aventurier',
                      'Rider',
                      'Couteau Suisse',
                      'Camille.'
                    ];
                    //used to determine which is the next roles to be displayed
                    var counter = 0;
                    var $role = $('#role')
                    //repeat the passed function at the specified interval - it is in milliseconds
                    setInterval(function() {
                      //display the role and increment the counter to point to next role
                      $role.text(roles[counter++]);
                      //if it is the last role in the array point back to the first item
                    }, 1100)
                  });



   });


}
