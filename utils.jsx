export const generateBoard = () => {
    const cards = Array.from({ length: 18 }, (_, i) => i % 9);
    return cards.sort(() => Math.random() - 0.5);
  };
  