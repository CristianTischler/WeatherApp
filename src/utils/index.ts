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

  // return `${dayOfWeek}, ${dayOfMonth} ${month}`;
  return {
    dayOfWeek,
    dayOfMonth,
    month,
    hour,
  };
}
