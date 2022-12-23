const software = document.querySelector('#software');
const AI = document.querySelector('#AI');
const CS = document.querySelector('#CS');
const PD = document.querySelector('#PD');
const DM = document.querySelector('#DM');
const data = document.querySelector('#Data');


const software2 = document.querySelector('.software2');
const ai2 = document.querySelector('.ai2');
const cs2 = document.querySelector('.cs2');
const pd2 = document.querySelector('.pd2');
const dm2 = document.querySelector('.dm2');
const data2 = document.querySelector('.data2');

const software3 = document.querySelector('#software3');
const ai3 = document.querySelector('#ai3');
const cs3 = document.querySelector('#cs3');
const pd3 = document.querySelector('#pd3');
const dm3 = document.querySelector('#dm3');
const data3 = document.querySelector('#data3');

const serviceOpen = document.querySelector('#service-open');
const serviceClose = document.querySelector('#service-close');
const serviceDropdown2 = document.querySelector('#service-dropdown2');
const soft2 = document.querySelector('#soft2');
const soft = document.querySelector('#software3');
const AI2 = document.querySelector('#AI2');
const artificial = document.querySelector('#ai3');
const CS2 = document.querySelector('#CS2');
const cyber = document.querySelector('#cs3');
const PD2 = document.querySelector('#PD2');
const product = document.querySelector('#pd3');
const DM2 = document.querySelector('#DM2');
const digital = document.querySelector('#dm3');
const Data2 = document.querySelector('#Data2');
const dataa = document.querySelector('#data3');

soft2.addEventListener('click', () => {
    soft.style.display = "block";
    artificial.style.display = "none";
    cyber.style.display = "none";
    product.style.display = "none";
    digital.style.display = "none";
    dataa.style.display = "none";
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";
})



AI2.addEventListener('click', () => {
    artificial.style.display = "block";
    soft.style.display = "none";
    cyber.style.display = "none";
    product.style.display = "none";
    digital.style.display = "none";
    dataa.style.display = "none";
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";

})

CS2.addEventListener('click', () => {
    cyber.style.display = "block";
    soft.style.display = "none";
    artificial.style.display = "none";
    product.style.display = "none";
    digital.style.display = "none";
    dataa.style.display = "none";
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";

})

PD2.addEventListener('click', () => {
    product.style.display = "block";
    soft.style.display = "none";
    cyber.style.display = "none";
    artificial.style.display = "none";
    digital.style.display = "none";
    dataa.style.display = "none";
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";

})

DM2.addEventListener('click', () => {
    digital.style.display = "block";
    soft.style.display = "none";
    cyber.style.display = "none";
    product.style.display = "none";
    artificial.style.display = "none";
    dataa.style.display = "none";
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";

})

Data2.addEventListener('click', () => {
    dataa.style.display = "block";
    soft.style.display = "none";
    cyber.style.display = "none";
    product.style.display = "none";
    digital.style.display = "none";
    artificial.style.display = "none";
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";


})

serviceOpen.addEventListener('click', () => {
    serviceOpen.style.display = "none";
    serviceDropdown2.style.transform = "translateX(0)";


})
serviceClose.addEventListener('click', () => {
    serviceOpen.style.display = "block";
    serviceDropdown2.style.transform = "translateX(300px)";


})
const ai_link = document.querySelector(".ai_link")


data.addEventListener('click', () => {
    console.log('yes')
    data2.classList.add('active');
    ai2.classList.remove('active');
    software2.classList.remove('active');
    cs2.classList.remove('active');
    pd2.classList.remove('active');
    dm2.classList.remove('active');

    data3.style.display = 'block';
    software3.style.display = 'none';
    ai3.style.display = 'none';
    pd3.style.display = 'none';
    cs3.style.display = 'none';
    dm3.style.display = 'none';

});
software.addEventListener('click', () => {
    data2.classList.remove('active');
    ai2.classList.remove('active');
    software2.classList.add('active');
    software2.style.transition = "2s ease-in-out";
    cs2.classList.remove('active');
    pd2.classList.remove('active');
    dm2.classList.remove('active');

    data3.style.display = 'none';
    software3.style.display = 'block';
    ai3.style.display = 'none';
    pd3.style.display = 'none';
    cs3.style.display = 'none';
    dm3.style.display = 'none';
});

function Aitogle() {
    data2.classList.remove('active');
    ai2.classList.add('active');
    software2.classList.remove('active');
    cs2.classList.remove('active');
    pd2.classList.remove('active');
    dm2.classList.remove('active')

    data3.style.display = 'none';
    software3.style.display = 'none';
    pd3.style.display = 'none';
    cs3.style.display = 'none';
    dm3.style.display = 'none';
    ai3.style.display = 'block';
}

AI.addEventListener('click', () => {
    Aitogle()
});

ai_link.addEventListener('click', (ev) => {
    Aitogle();
    ev.preventDefault()
})
CS.addEventListener('click', () => {
    data2.classList.remove('active');
    ai2.classList.remove('active');
    software2.classList.remove('active');
    cs2.classList.add('active');
    pd2.classList.remove('active');
    dm2.classList.remove('active');

    data3.style.display = 'none';
    software3.style.display = 'none';
    pd3.style.display = 'none';
    cs3.style.display = 'block';
    dm3.style.display = 'none';
    ai3.style.display = 'none';
});

PD.addEventListener('click', () => {
    console.log('yes')
    data2.classList.remove('active');
    ai2.classList.remove('active');
    software2.classList.remove('active');
    cs2.classList.remove('active');
    pd2.classList.add('active');
    dm2.classList.remove('active');

    data3.style.display = 'none';
    software3.style.display = 'none';
    pd3.style.display = 'block';
    cs3.style.display = 'none';
    dm3.style.display = 'none';
    ai3.style.display = 'none';
});

DM.addEventListener('click', () => {
    console.log('yes')
    data2.classList.remove('active');
    ai2.classList.remove('active');
    software2.classList.remove('active');
    cs2.classList.remove('active');
    pd2.classList.remove('active');
    dm2.classList.add('active');

    data3.style.display = 'none';
    software3.style.display = 'none';
    pd3.style.display = 'none';
    cs3.style.display = 'none';
    dm3.style.display = 'block';
    ai3.style.display = 'none';
});






