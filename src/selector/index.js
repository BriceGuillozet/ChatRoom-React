/* eslint-disable import/prefer-default-export */
/**
 * Fonction pour trouver l'ID le plus haut dans le tableau des messages
 * @param {Array} array
 * @returns {number} maxID
 */

export const getHighestId = (array) => {
  const ids = array.map((item) => item.id);
  const maxID = ids.length === 0 ? 0 : Math.max(...ids);
  return maxID;
};
