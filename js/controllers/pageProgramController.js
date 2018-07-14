function pageProgramController($routeParams, $location) {

  this.$location = $location;
  this.$routeParams = $routeParams;

  console.log(this.$location.path());
  console.log(this.$routeParams);
  console.log(this.$routeParams.id);

  this.index = this.$routeParams.id - 1;
  console.log(this.index);



    this.program = [{
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
      title: "Composite & Technologies",
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
  this.pageProgram = this.program[this.index];
  console.log(this.pageProgram);



  $(document).ready(function() {
    $('#fullpage').fullpage({
    });

    $('.slider').slider();
    $('.carousel').carousel({
      dist: 0,
      shift: 0,
      padding: 20,
      indicators: true,
    });

  });

}
