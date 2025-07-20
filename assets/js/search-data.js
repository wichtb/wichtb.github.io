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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-œuvres",
          title: "Œuvres",
          description: "Œuvres par ordre chronologique.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-d-39-une-suisse-à-l-39-autre-25-ans-de-coopération-internationale-en-éducation",
        
          title: "D&#39;une Suisse à l&#39;autre: 25 ans de coopération internationale en éducation",
        
        description: "Article original de Bernard Wicht publié sur le site de la CDIP à l’occasion de son départ à la retraite.",
        section: "Articles",
        handler: () => {
          
            window.location.href = "/blog/2025/06/11/25_years.html";
          
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
              window.location.href = "/news/2025-05-22.html";
            },},{id: "news-d-une-suisse-à-l-autre-25-ans-de-coopération-internationale-en-éducation",
          title: 'D’une Suisse à l’autre: 25 ans de coopération internationale en éducation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-11.html";
            },},{id: "news-la-guerre-sans-état-fragmentation-du-conflit-et-retour-à-l-autodéfense",
          title: 'La guerre sans État ? Fragmentation du conflit et retour à l’autodéfense',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-15.html";
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
