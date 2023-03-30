module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="savoring-food">😋</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="happy">😊</span>`;
      } else {
        return `<span for="img" aria-label="chef">👨‍🍳</span>`;
      }
    },
  };
  