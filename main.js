// Selecting timeframe buttons and time display elements
const dailyTimeframe = document.getElementById('daily');
const weeklyTimeframe = document.getElementById('weekly');
const monthlyTimeframe = document.getElementById('monthly');

const titles = document.querySelectorAll('.title');
const currentTime = document.querySelectorAll('.current-time');
const previousTime = document.querySelectorAll('.previous-time');

// fetch data from JSON file
async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const data = fetchData();


// Event listeners for timeframe buttons

dailyTimeframe.addEventListener('click', event => {
    // Update active timeframe button styling
    event.target.classList.add('active-timeframe');
    weeklyTimeframe.classList.remove('active-timeframe');
    monthlyTimeframe.classList.remove('active-timeframe');

    // Fetch data and update time displays
    data.then(data => {
        data.forEach(activity => {
            titles.forEach((title, index) => {
                if (title.textContent == activity.title) {
                    currentTime[index].textContent = `${activity.timeframes.daily.current}hrs`;
                    previousTime[index].textContent = `Yesterday - ${activity.timeframes.daily.previous}hrs`;
                }
            });
        });
    });
})

weeklyTimeframe.addEventListener('click', event => {
    // Update active timeframe button styling
    event.target.classList.add('active-timeframe');
    dailyTimeframe.classList.remove('active-timeframe');
    monthlyTimeframe.classList.remove('active-timeframe');

    // Fetch data and update time displays
    data.then(data => {
        data.forEach(activity => {
            titles.forEach((title, index) => {
                if (title.textContent == activity.title) {
                    currentTime[index].textContent = `${activity.timeframes.weekly.current}hrs`;
                    previousTime[index].textContent = `Last Week - ${activity.timeframes.weekly.previous}hrs`;
                }
            });
        });
    });
})

monthlyTimeframe.addEventListener('click', event => {
    // Update active timeframe button styling
    event.target.classList.add('active-timeframe');
    dailyTimeframe.classList.remove('active-timeframe');
    weeklyTimeframe.classList.remove('active-timeframe');

    // Fetch data and update time displays
    data.then(data => {
        data.forEach(activity => {
            titles.forEach((title, index) => {
                if (title.textContent == activity.title) {
                    currentTime[index].textContent = `${activity.timeframes.monthly.current}hrs`;
                    previousTime[index].textContent = `Last Month - ${activity.timeframes.monthly.previous}hrs`;
                }
            });
        });
    });
})