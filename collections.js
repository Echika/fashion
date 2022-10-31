var recentWorks = document.querySelector('#recentWorks');

const ourWorks = [
  { name: "2.jpeg", id: 1 },
  { name: "3.jpeg", id: 2 },
  { name: "4.jpeg", id: 3 },
  { name: "5.jpeg", id: 4 },
  { name: "6.jpeg", id: 5 },
  { name: "7.jpeg", id: 6 },
  { name: "8.jpeg", id: 7 },
  { name: "9.jpeg", id: 8 },
  { name: "10.jpeg", id: 9 },
  { name: "11.jpeg", id: 10 },
  { name: "12.jpeg", id: 11 },
  { name: "13.jpeg", id: 12 },
  { name: "14.jpeg", id: 13 },
  { name: "15.jpeg", id: 14 },
  { name: "16.jpeg", id: 15 },
  { name: "17.jpeg", id: 16 },
  { name: "18.jpeg", id: 17 },
  { name: "19.jpeg", id: 18 },
  { name: "20.jpeg", id: 19 },
  { name: "21.jpeg", id: 20 },
  { name: "1.png", id: 21 },
  { name: "4b.jpeg", id: 22 },
];

const newIds = ourWorks.map((work) => {
    return `
    <div>
      <img src='images/${work.name}' />
    </div>`
})

console.log(newIds);
recentWorks.innerHTML = newIds
