module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },

  format_plural: (noun, num) => {
    if (num !== 1) {
      return `${noun}s`;
    }
    return noun;
  },
};
