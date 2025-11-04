// @ts-ignore
import dayjs from "dayjs";
// @ts-ignore
import updateLocale from "dayjs/plugin/updateLocale";
// @ts-ignore
import utc from "dayjs/plugin/utc";
// @ts-ignore
import timezone from "dayjs/plugin/timezone";

export const formatDate = (date): string => {
    // TODO Set locale to french
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const dateWithTimezone = dayjs(date)
        .tz("Europe/Paris")
        .format("DD/MM/YYYY");

    dayjs.extend(updateLocale);

    dayjs.updateLocale("en", {
        weekdays: [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
        ],
    });

    // https://mirzaleka.medium.com/the-complete-guide-to-day-js-fb835a5d945a
    const todayDate = dayjs();
    const formattedTodayDate = todayDate.format("DD-MM-YYYY");
    const formattedDate = dayjs(date).format("DD-MM-YYYY");

    if (formattedDate === formattedTodayDate) {
        return "Aujourd'hui";
    }

    // Day of Week (Sunday as 0, Saturday as 6)
    // https://day.js.org/docs/en/get-set/weekday Last sunday ?

    const daysFromTodayDate = dayjs(date).diff(todayDate, "day");

    if (daysFromTodayDate < 7) {
        return dayjs(date).format("dddd");
    } else {
        return `Il y a ${daysFromTodayDate} jours`;
    }
};
