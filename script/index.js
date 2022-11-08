class SocialMediaService {
  static checkInstagramAvailability = async (username) => {
    try {
      const response = await axios.post('/social-media/instagram', {
        username,
      });
      if (response.data.status === 'success') {
        return response.data.body;
      }
    } catch (e) {
      console.log(e);
      return { available: false, url: false };
    }
  };

  static checkFacebookAvailability = async (username) => {
    try {
      const response = await axios.post('/social-media/facebook', {
        username,
      });
      if (response.data.status === 'success') {
        return response.data.body;
      }
    } catch (e) {
      console.log(e);
      return { available: false, url: false };
    }
  };

  static checkRedditAvailability = async (username) => {
    try {
      const response = await axios.post('/social-media/reddit', {
        username,
      });
      if (response.data.status === 'success') {
        return response.data.body;
      }
    } catch (e) {
      console.log(e);
      return { available: false, url: false };
    }
  };

  static checkYoutubeAvailability = async (username) => {
    try {
      const response = await axios.post('/social-media/youtube', {
        username,
      });
      if (response.data.status === 'success') {
        return response.data.body;
      }
    } catch (e) {
      console.log(e);
      return { available: false, url: false };
    }
  };

  static checkTwitterAvailability = async (username) => {
    try {
      const response = await axios.post('/social-media/twitter', {
        username,
      });
      if (response.data.status === 'success') {
        return response.data.body;
      }
    } catch (e) {
      console.log(e);
      return { available: false, url: false };
    }
  };

  static checkTwitchAvailability = async (username) => {
    try {
      const response = await axios.post('/social-media/twitch', {
        username,
      });
      if (response.data.status === 'success') {
        return response.data.body;
      }
    } catch (e) {
      console.log(e);
      return { available: false, url: false };
    }
  };
}

const form = document.querySelector('#search');
const usernameInput = document.querySelector('#username');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  instagramActions.loading();
  SocialMediaService.checkInstagramAvailability(username).then((response) => {
    instagramActions.setResponse(response);
  });
  SocialMediaService.checkInstagramAvailability(username).then((response) => {
    instagramActions.setResponse(response);
  });
});

const createActions = (rootId) => {
  return {
    root: document.querySelector(`#${rootId}`),
    refresh: document.querySelector(`#${rootId} #Refresh`),
    check: document.querySelector(`#${rootId} #Check`),
    cancel: document.querySelector(`#${rootId} #Cancel`),
    link: document.querySelector(`#${rootId} a`),

    loading: function () {
      this.refresh.classList.remove('hidden');
      this.check.classList.add('hidden');
      this.cancel.classList.add('hidden');
      this.link.setAttribute('src', '#');
    },
    setResponse: function ({ available, url }) {
      if (available) {
        this.refresh.classList.add('hidden');
        this.cancel.classList.add('hidden');
        this.link.setAttribute('src', '#');

        this.check.classList.remove('hidden');
      } else {
        this.refresh.classList.add('hidden');
        this.check.classList.add('hidden');
        this.link.setAttribute('href', url ? url : '#');

        this.cancel.classList.remove('hidden');
      }
    },
  };
};

const instagramActions = createActions('instagram-root');
const facebookActions = createActions('facebook-root');
const youtubeActions = createActions('youtube-root');
const linkedinActions = createActions('linkedin-root');
const twitchActions = createActions('twitch-root');
const redditActions = createActions('reddit-root');
const snapchatActions = createActions('snapchat-root');
