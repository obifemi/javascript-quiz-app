const questions = [
    {
        id: '1',
        name: 'name',
        message: 'What is your name?', 
    },
    {
        type: '2',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: '3',
        name: 'hobby',
        message: 'What is your favorite hobby?',
    },
    {
        type: '4',
        name: 'food',
        message: 'What is your favorite food?',
    },
    {
        type: '5',
        name: 'github',
        message: 'Enter your GitHub Username',
    }
];

const answers = [];

user = {
    name: '',
    point : 0
}

//a function when the person inputs his name in the input box and click the button, it will make visible a tag with the name of the person as : "Hello, name let's start the quiz!"
const form = document.getElementById('form');
const btn = document.getElementById('btn');
const namex = document.getElementById('namex');
const container = document.getElementsByClassName('container');




const output = document.createElement('p');
//append output to the container

output.innerHTML = '0';

input.addEventListener('input', function(e){
    output.innerHTML = e.target.value;
});

namex.innerHTML = ``;
namex.display = 'none';

//I want to take the value of the input and put it in the namex tag
btn.addEventListener('click', function(e){
    e.preventDefault();
    const nameValue = document.querySelector('input').value

    namex.innerHTML = `Hello, ${nameValue} let's start the quiz!`;
    namex.display = 'block';
}
)