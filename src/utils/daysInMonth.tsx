const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

export default daysInMonth;
