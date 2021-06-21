const getJpCalender = (birthYear) => {
    if (birthYear <= 1988) {
        return '昭和' + (birthYear - 1925);
    } else if (birthYear === 1989) {
        return '昭和64/平成元';
    } else if (birthYear >= 1990 && birthYear < 2019) {
        return '平成' + (birthYear - 1988);
    } else if (birthYear === 2019) {
        return '平成31年/令和元年';
    } else if (birthYear >= 2020) {
        return '令和' + (birthYear - 2018);
    }
}

export default getJpCalender;