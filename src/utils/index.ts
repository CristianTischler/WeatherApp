export function formatSpanishDate(timestamp: number) {
  const day = new Date(timestamp * 1000);

  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dayOfWeek = daysOfWeek[day.getDay()];
  const dayOfMonth = day.getDate();
  const month = months[day.getMonth()];
  const hour = day.getHours();

  return {
    dayOfWeek,
    dayOfMonth,
    month,
    hour,
  };
}

interface I_GetWeatherState {
  id: number;
  dt: number;
}

export function getWeatherState({ id, dt }: I_GetWeatherState) {
  const timestampInSeconds = dt;
  const date = new Date(timestampInSeconds * 1000);
  const hour = date.getHours();

  const isNight = hour < 7 || hour >= 18;
  if (id >= 200 && id < 300) {
    return isNight ? "night" : "rainy";
  } else if (id >= 300 && id < 400) {
    return isNight ? "night" : "rainy";
  } else if (id >= 500 && id < 600) {
    return isNight ? "night" : "rainy";
  } else if (id >= 600 && id < 700) {
    return isNight ? "night" : "rainy";
  } else if (id >= 700 && id < 800) {
    return isNight ? "night" : "rainy";
  } else if (id === 800) {
    return isNight ? "night" : "sunny";
  } else if (id === 801) {
    return isNight ? "night" : "sunny";
  } else if (id >= 802 && id < 805) {
    return isNight ? "night" : "rainy";
  } else {
    return isNight ? "night" : "rainy";
  }
}
