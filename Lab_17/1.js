function getCurrentFormattedTime() {
  const now = new Date();

  const time = now.toLocaleTimeString('uk-UA');

  const weekday = now.toLocaleDateString('uk-UA', { weekday: 'long' });

  const day = String(now.getDate()).padStart(2, '0');

  const month = now.toLocaleDateString('uk-UA', { month: 'long' });

  const year = now.getFullYear();

  const formattedString = `${time}, ${weekday} , ${day} ${month} ${year} року`;

  console.log(formattedString);
  
  return formattedString;
}

getCurrentFormattedTime();