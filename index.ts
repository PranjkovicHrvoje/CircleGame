let divX: number;
let divY: number;
let flag = false;
let i = 0;
let totalDist = 0;
let average = 0;
let startingRad: number;
let accuracy: number;

const targetDiv = document.getElementById('center');

if (targetDiv) {
  const rect = targetDiv.getBoundingClientRect();

  divX = rect.left;
  divY = rect.top;

  console.log(`Div Coordinates: X=${divX}, Y=${divY}`);
} else {
  console.error('Div not found');
}
document.addEventListener('keydown', (event: KeyboardEvent) => {
    const key = event.key;
    if(key === 'r'){
        document.addEventListener('mousemove', mouseMovement);
        console.clear();
        const mouseMoveHandler = (mouseEvent: MouseEvent) => {
            const cursorX = mouseEvent.clientX;
            const cursorY = mouseEvent.clientY;
            const distanceX = Math.abs(divX-cursorX);
            const distanceY = Math.abs(divY-cursorY);
            startingRad = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
            average = startingRad;
            console.clear();
            console.log(`Starting radius is: ${startingRad}`);
            i=0; totalDist = 0; accuracy = 0;
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
        document.addEventListener('mousemove', mouseMoveHandler);
    }
    console.log(`Key pressed: ${key}`);
  });

const mouseMovement = (mouseEvent: MouseEvent) => {
    i++;
    const cursorX = mouseEvent.clientX ;
    const cursorY = mouseEvent.clientY ;
    //console.log(cursorX, cursorY);  
    const distanceX = Math.abs(divX-cursorX);
    const distanceY = Math.abs(divY-cursorY);
    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
    totalDist = totalDist + distance;
    average = totalDist / i;
    accuracy = 100-(((Math.abs(startingRad - average))/average)*100);
    const resultDiv = document.querySelector('.bottom-right') as HTMLDivElement;
    resultDiv.innerHTML = (`RESULT: ${accuracy.toFixed(2)}%`);
    console.log(i, distance, accuracy);
};
document.addEventListener('mousemove', mouseMovement);

