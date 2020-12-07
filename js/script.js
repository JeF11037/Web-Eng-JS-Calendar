const button = document.querySelector('.btn-start');
const container = document.querySelector('.container');

const months = 24;

const openDoor = (path, event) =>
{
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.backgroundColor = "snow";
    event.target.style.opacity = 0;
}

const createCalendar = () => 
{
    for(let tick = 0; tick < months; tick++)
    {
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add("img");
        calendarDoor.style.gridArea = "door" + (tick + 1);
        container.appendChild(calendarDoor);

        const calendarDoorText = document.createElement('div');
        calendarDoorText.classList.add('text');
        calendarDoorText.innerHTML = tick + 1;
        calendarDoor.appendChild(calendarDoorText);

        let picNumber = tick + 1;
        let picPath = `./img/${picNumber}.jpg`;

        calendarDoorText.addEventListener('click', openDoor.bind(null, picPath));
    }
}

button.addEventListener('click', createCalendar);
