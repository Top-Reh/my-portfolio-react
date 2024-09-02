const apiKey = 'cde42b8acd2d0aa36e47c42099726f1a';

const inputText = document.querySelector('.inputArea');
const activebutton = document.querySelector('.submmitbtn');
const news = document.querySelector('.newsAreHere')

activebutton.addEventListener('click', () => {
    showfacts();
});

inputText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        showfacts();
    }
})


const showfacts = async() => {
    news.innerHTML = `
        <h1 class="thecity"></h1>
        <p>Degree is <span class="showDegree"></span></p>
        <p>The weather condition is <span class="showCondition"></span></p>
        <p>On <span class="showTime"></span></p>
    `
    let city;
    city = inputText.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(city);
    console.log(apiUrl);
    const theCity = document.querySelector('.thecity');
    theCity.innerHTML = inputText.value;
    //showCondition = apiUrl.weather.main;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    console.log(weatherData);
    const coordinates = weatherData.coord;
    console.log(coordinates);
    const condition = weatherData.weather[0].main;
    console.log(condition);
    const degree = weatherData.main.temp;
    const showCondition = document.querySelector('.showCondition');
    showCondition.innerHTML = condition;
    const showDegree = document.querySelector('.showDegree');
    showDegree.innerHTML = `${degree}°`
    const currenttime = new Date().toLocaleTimeString();
    console.log('current time: ',currenttime);
    const showTime = document.querySelector('.showTime');
    showTime.innerHTML= currenttime;
    inputText.value = '';
}

