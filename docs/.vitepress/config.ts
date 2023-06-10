import { defineConfig } from 'vitepress';

export default defineConfig({
  base: "/",
  title: 'Documentazione di CoderBot',
  description: 'Guida all\'uso di CoderBot',
  themeConfig: {
    search: {
      provider: 'local'
    },
    outlineTitle: 'Su questa pagina',
    sidebar: [
      {
        text: 'Kit di montaggio',
        items: [
          { text: 'Istruzioni di montaggio', link: '/kit/' },
          { text: 'Elenco delle parti', link: '/description/' },
        ]
      },
      {
        text: 'Manuale di configurazione',
        items: [
          { text: 'Avvio', link: '/manual/#messa-in-funzione' },
          { text: 'Ricarica della Batteria', link: '/manual/#ricarica-della-batteria' },
          { text: 'Impostazioni', link: '/manual/#impostazioni' },
          { text: 'Aggiornamento', link: '/manual/#aggiornamento' },
          { text: 'Ripristino', link: '/manual/#ripristino-impostazioni' },
        ]
      },
      {
        text: 'Manuale d\'uso',
        items: [
          { text: 'Programmazione', link: '/usermanual/#programmazione' },
          { text: 'Attività', link: '/usermanual/#attivita' },
          { text: 'Blocchi', link: '/usermanual/blocks/' },
          { text: 'Programmi', link: '/usermanual/programs/' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Muovere CoderBot', link: '/guides/#muovere-coderbot' },
          { text: 'Programmiamo con i sensori', link: '/guides/#programmiamo-con-i-sensori' },
        ]
      },
    ]
  },
  head: [
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-JH5JX4PBZG'}],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-JH5JX4PBZG');"]
  ]
});