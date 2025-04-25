// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
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
          section: "News",},{id: "news-parution-prochaine-guerres-en-europe-éditions-j-c-godefroy-disponible-à-partir-du-22-mai-2025-une-analyse-des-nouveaux-conflits-internes-et-de-la-transformation-du-paysage-stratégique-européen",
          title: 'Parution prochaine: Guerres en Europe (Éditions J.-C. Godefroy), disponible à partir du 22...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%69%63%68%74.%62%65%72%6E%61%72%64@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("//feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
