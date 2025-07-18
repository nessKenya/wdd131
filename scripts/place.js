const temperature = 10;
const windspeed = 4.9;

const temperaturecontent = `${temperature}<sup>o</sup>C`;
const windspeedcontent = `${windspeed}km/h`;

document.querySelector('#temp-sm').innerHTML = temperaturecontent;
document.querySelector('#temp-lg').innerHTML = temperaturecontent;
document.querySelector('#speed-sm').innerHTML = windspeedcontent;
document.querySelector('#speed-lg').innerHTML = windspeedcontent;

// compute windcchill factor (t-> temperature, v->wind speed)
const calculateWindChill = (t, v) => Math.round((13.12 + 0.6215 * t - 11.37 * v**0.16 + 0.3965 * t * v**0.16) * 10) / 10;

// display windchill factor
let windchillcontent = '';

if(temperature <= 10 && windspeed > 4.8) {
  const windchillfactor = calculateWindChill(temperature, windspeed);
  windchillcontent = `${windchillfactor}<sup>o</sup>C`;
} else {
  windchillcontent = 'N/A';
}

// set windchill factors in respective html elements
document.querySelector('#windchill-lg').innerHTML = windchillcontent;
document.querySelector('#windchill-sm').innerHTML = windchillcontent;
