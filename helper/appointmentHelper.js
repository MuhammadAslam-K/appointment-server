const startTime = 10;
const endTime = 17;
const breakStart = 13
const breakEnd = 14;

const generateTimeSlots = () => {
    let timeSlots = [];
    for (let hour = startTime; hour < endTime; hour++) {
        if (hour >= breakStart && hour < breakEnd) continue;
        for (let min = 0; min < 60; min += 30) {
            timeSlots.push(`${hour.toString().padStart(2, "0")}:${min === 0 ? "00" : "30"}`);
        }
    }
    return timeSlots;
};

export default {
    generateTimeSlots
}