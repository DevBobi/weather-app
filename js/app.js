// private api 
// const api ={
//     key: '2228e20b0da454c04d5564b64fb05d77',
// }

const searchBtn = () => {
    const inputField = document.getElementById('input-btn');
    const inputText = inputField.value;
    // console.log(inputText);
    inputField.value='';

    const apiKey= '2228e20b0da454c04d5564b64fb05d77';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}`;

    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const icons = data.weather[0].icon;
        const div = document.createElement('div');
        div.innerHTML=`
        <img id="icon" src="${icons}." alt="">
        `
        // console.log(icons);
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        // document.getElementById('icon').innerHTML = icons;
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2);
        document.getElementById('description').innerText = description;
    })
    // .catch(res => alert('Please type valid City'))

}