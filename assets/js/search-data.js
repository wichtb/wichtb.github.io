// obtenir l'élément ninja-keys
const ninja = document.querySelector('ninja-keys');

// ajouter les éléments du menu accueil et autres pages
ninja.data = [{
    id: "nav-au-sujet-de",
    title: "Au sujet de",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-œuvres",
          title: "Œuvres",
          description: "Œuvres par ordre chronologique.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "news-bernard-wicht-est-intervenu-dans-l-émission-tocsin-aux-côtés-du-grand-reporter-régis-le-sommier-voir-l-entretien-complet-sur-youtube",
          title: 'Bernard Wicht est intervenu dans l’émission Tocsin aux côtés du grand reporter Régis...',
          description: "",
          section: "News",},{id: "news-le-nouveau-site-officiel-de-bernard-wicht-est-désormais-en-ligne-vous-y-retrouverez-ses-publications-ses-interventions-ainsi-que-toutes-les-actualités-concernant-ses-travaux-de-recherche-et-ses-conférences-vous-pouvez-également-suivre-toutes-les-mises-à-jour-grâce-au-flux-rss",
          title: 'Le nouveau site officiel de Bernard Wicht est désormais en ligne ! Vous...',
          description: "",
          section: "News",},{id: "news-guerre-en-europe-éditions-j-c-godefroy",
          title: 'Guerre en Europe (Éditions J.-C. Godefroy)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/guerre-en-europe.html";
            },},{
        id: 'social-email',
        title: 'Email',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open('wicht.bernard@proton.me', '_blank');
        },
      },{
        id: 'social-rss-icon',
        title: 'Rss_icon',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open('true', '_blank');
        },
      },{
      id: 'light-theme',
      title: 'Passer au thème clair',
      description: 'Changer le thème du site en clair',
      section: 'Thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Passer au thème sombre',
      description: 'Changer le thème du site en sombre',
      section: 'Thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Utiliser le thème du système',
      description: 'Changer le thème du site selon le système',
      section: 'Thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
