const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

export default {
  showMonthDate: d => `${monthNames[d.getUTCMonth()]} ${d.getFullYear()}`,
  showDayDate: d => `${d.getDate()} ${monthNames[d.getUTCMonth()]} ${d.getFullYear()}`,
};
