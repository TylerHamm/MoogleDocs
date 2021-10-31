const { TAGS } = require("./config");

class FeedbackStore {

  constructor() {
    console.log('Initialized FeedbackStore');
  }

  store(author, tag, discordUrl, content) {
    if (TAGS.indexOf(tag) < 0) {
      throw Error('Invalid tag!');
    }
    console.log(author, tag, discordUrl, content);
  }

}

FeedbackStore.TAGS = TAGS;

module.exports = new FeedbackStore();
