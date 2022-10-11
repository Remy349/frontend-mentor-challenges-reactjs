import newbieImg from './img/newbie-img.jpg'
import juniorImg from './img/junior-img.jpg'
import intermediateImg from './img/intermediate-img.jpg'
import advancedImg from './img/advanced-img.jpg'
import guruImg from './img/guru-img.jpg'

export const cardData = [
  {
    plan: {
      type: 'Premium'
    },
    image: {
      url: newbieImg,
      alt: 'Newbiew Challenge Image'
    },
    content: {
      title: 'Skilled e-learning landing page',
      info: {
        tools: {
          html: 'HTML',
          css: 'CSS'
        },
        difficulty: {
          number: '1',
          level: 'newbie'
        }
      },
      desc: 'This responsive page is perfect if you`ve learned the fundamentals of HTML & CSS, completed a couple of smaller projects, and want to take it up a notch.'
    }
  },
  {
    plan: {
      type: 'Free'
    },
    image: {
      url: juniorImg,
      alt: 'Junior Challenge Image'
    },
    content: {
      title: 'Intro section with dropdown navigation',
      info: {
        tools: {
          html: 'HTML',
          css: 'CSS',
          js: 'JS'
        },
        difficulty: {
          number: '2',
          level: 'junior'
        }
      },
      desc: 'This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges.'
    }
  },
  {
    plan: {
      type: 'Premium'
    },
    image: {
      url: intermediateImg,
      alt: 'Intermediate Challenge Image'
    },
    content: {
      title: 'Tic Tac Toe game',
      info: {
        tools: {
          html: 'HTML',
          css: 'CSS',
          js: 'JS'
        },
        difficulty: {
          number: '3',
          level: 'intermediate'
        }
      },
      desc: 'This classic practice project for web developers is a great exercise to complete. It will test your HTML semantics, your grid layout skill, as well as your JS logic.'
    }
  },
  {
    plan: {
      type: 'Free'
    },
    image: {
      url: advancedImg,
      alt: 'Advanced Challenge Image'
    },
    content: {
      title: 'REST Countries API with color theme switcher',
      info: {
        tools: {
          html: 'HTML',
          css: 'CSS',
          js: 'JS',
          api: 'API'
        },
        difficulty: {
          number: '4',
          level: 'advanced'
        }
      },
      desc: 'If you`re wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.'
    }
  },
  {
    plan: {
      type: 'Premium'
    },
    image: {
      url: guruImg,
      alt: 'Guru Challenge Image'
    },
    content: {
      title: 'Product feedback app',
      info: {
        tools: {
          html: 'HTML',
          css: 'CSS',
          js: 'JS'
        },
        difficulty: {
          number: '5',
          level: 'guru'
        }
      },
      desc: 'This will be a perfect portfolio piece! You`ll be working with JSON, managing state, and building like a real-world app. You can even create it as a full-stack project!'
    }
  }
]
