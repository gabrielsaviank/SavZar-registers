import dayjs from "dayjs";

export const calculateAge = (birthDate: string) => {
    const today = dayjs();
    const birthday = dayjs(birthDate);
    return today.diff(birthday, "year");
};

export const calculateDaysUntilBirthday = (birthDate: string) => {
    const today = dayjs();
    const birthday = dayjs(birthDate);

    let nextBirthday = birthday.set("year", today.year());

    if (nextBirthday.isBefore(today)) {
        nextBirthday = nextBirthday.add(1, "year");
    }

    const daysUntilBirthday = nextBirthday.diff(today, "day");

    return daysUntilBirthday;
};
