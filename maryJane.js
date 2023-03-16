const days= document.getElementById("days");
const hours=document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const age=document.getElementById("age");
const btn= document.getElementById('btn');


btn.addEventListener('click', () => {
	const particles = [];
	const color = randomColor();
	
	const particle = document.createElement('span');
	particle.classList.add('particle', 'move');
	
	const { x, y } = randomLocation();
	particle.style.setProperty('--x', x);
	particle.style.setProperty('--y', y);
	particle.style.background = color;
	btn.style.background = color;
	
	btn.appendChild(particle);
	
	particles.push(particle);
	
	setTimeout(() => {
	
		for(let i=0; i<100; i++) {
			const innerP = document.createElement('span');
			innerP.classList.add('particle', 'move');
			innerP.style.transform = `translate(${x}, ${y})`;

			const xs = Math.random() * 200 - 100 + 'px';
			const ys = Math.random() * 200 - 100 + 'px';
			innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
			innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
			innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
			innerP.style.background = color;
			
			btn.appendChild(innerP);
			particles.push(innerP)
		}
		
		setTimeout(() => {
			particles.forEach(particle => {
				particle.remove();
			})
		}, 1000)
	}, 1000);
});

function randomLocation() {
	return {
		x: Math.random() * window.innerWidth - window.innerWidth / 7 + 'px',
		y: Math.random() * window.innerHeight - window.innerHeight / 7 + 'px',
	}
}

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}

const currentYear= new Date().getFullYear();
 
const birthday = new Date(currentYear+1);
const bornYear = new Date(2001);

 function updateCountdown(){
     const currentTime = new Date();
     const diff = birthday - currentTime;
     const a=currentYear-bornYear +1;
     const d= Math.floor(diff / 1000 / 60 / 60 / 24);
     const h=Math.floor(diff/ 1000/60/60) %24;
     const m= Math.floor (diff/1000/60) % 60;
    const s= Math.floor(diff/1000)%60;

 days.innerHTML =d;
 hours.innerHTML=h ;
minutes.innerHTML=m;
seconds.innerHTML=s;
age.innerHTML=a;

     
 }

setInterval (updateCountdown, 1000);
