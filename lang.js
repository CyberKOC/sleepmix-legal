// Bağlantıda dil bölümü yoksa (ör. mağaza sayfasından gelindiyse) tarayıcı diline, o dil yoksa İngilizceye gider.
if (!location.hash) {
  var language = (navigator.language || 'en').slice(0, 2).toLowerCase();
  var target = document.getElementById(language) ? language : 'en';
  if (target !== 'tr') location.replace('#' + target);
}
