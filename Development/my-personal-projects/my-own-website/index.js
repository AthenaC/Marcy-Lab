const main = () => {
    const body = document.querySelector('body');
    
    // "About Me" Section
    const aboutMe = document.getElementById('about-me');
    const calculateAge = () => {
        // Getting current date:
        const date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        // My birthday:
        const birthMonth = 11;
        const birthDay = 17;
        const birthYear = 1999;
        // Calculate age:
        if (month < birthMonth && day < birthDay && year > birthYear) {
            return (year - birthYear) - 1;
        } else {
            return year - birthYear;
        };
    };
    aboutMe.textContent = `I am ${calculateAge()} years old. I am an aspiring software engineer. 
    Currently studying in The Marcy Lab School. I decide to make a career change in 2024 focusing on improving my programming skills. 
    I am seeking job opportunities where I can grow and learn from my peers.`;
}
main();

const snowflake = () => {
    const happyHolidays = document.querySelector('#happy-holidays');
    const snowfall = document.querySelector('.snowfall');
    // Get current date
    const date = Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    // Christmas date
    const xmasMonth = 12;
    const xmasDay = 25;
    // Start on Christmas day and go on for 12 days
    if (month === xmasMonth && day === xmasDay) {
        for (day = xmasDay; day < (xmasDay + 12); day++) {
            return happyHolidays && snowfall;
        };
    };
};
snowflake();