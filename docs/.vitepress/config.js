export default {
  title: 'Documentazione di CoderBot',
  description: 'Guida all\'uso di CoderBot',
  srcDir: './',
  themeConfig: {
    sidebar: [
      {
        text: 'Kit di montaggio',
        items: [
          { text: 'Istruzioni di montaggio', link: '/kit/index.html' },
          { text: 'Elenco delle parti', link: '/parts/' },
        ]
      },
      {
        text: 'Manuale di configurazione',
        items: [
          { text: 'Avvio', link: '/manual/#messa-in-funzione' },
          { text: 'Ricarica della Batteria', link: '/manual/#ricarica-della-batteria' },
          { text: 'Ripristino', link: '/manual/#reset' },
          { text: 'Aggiornamento', link: '/manual/#aggiornamento' },
          { text: 'Impostazioni', link: '/manual/#settings' },
        ]
      },
      {
        text: 'Guida all\'uso',
        items: [
          { text: 'Programmazione', link: '/guides/#programming' },
          { text: 'Attività', link: '/guides/#activities' },
          { text: 'Muovere CoderBot', link: '/guides/#muovere-coderbot' },
          { text: 'Programmare con i sensori', link: '/guides/#programmiamo-con-i-sensori' },
        ]
      },
    ]
  },
  head: [
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-52649755-1'}],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-52649755-1');"]
  ]
}