const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'person-1.jpeg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto ipsam adipisci delectus necessitatibus animi fuga temporibus.Quibusdam, tempore dicta dolore, deserunt nulla rerum cum rem quisquam non ab voluptatum.`
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'person-2.jpg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto ipsam adipisci delectus necessitatibus animi fuga temporibus.Quibusdam, tempore dicta dolore, deserunt nulla rerum cum rem quisquam non ab voluptatum.`
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'person-3.jpg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto ipsam adipisci delectus necessitatibus animi fuga temporibus.Quibusdam, tempore dicta dolore, deserunt nulla rerum cum rem quisquam non ab voluptatum.`
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'person-4.jpg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto ipsam adipisci delectus necessitatibus animi fuga temporibus.Quibusdam, tempore dicta dolore, deserunt nulla rerum cum rem quisquam non ab voluptatum.`
    },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//! set starting value
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});

const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// setting up buttons

nextBtn.onclick = () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    };
    showPerson();
}

prevBtn.onclick = () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
}

randomBtn.onclick = () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
}

