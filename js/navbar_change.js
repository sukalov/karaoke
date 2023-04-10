const c1 = document.getElementById('label-1');
const c2 = document.getElementById('label-2');
const c3 = document.getElementById('label-3');
const c4 = document.getElementById('label-4');
const c5 = document.getElementById('label-5');
const c6 = document.getElementById('label-6');
// const search = document.getElementById('button');
const labels = [c1, c2, c3, c4, c5, c6];
const labelsText = ['СОВЕТСКОЕ', 'РУССКИЙ РОК', 'ЗАРУБЕЖНОЕ', 'ДЕТСКИЕ ПЕСНИ', 'РАЗНОЕ', 'РУССКАЯ ПОП-МУЗЫКА']
const positions = ['14.285714285714286',
 '28.571428571428573',
  '42.85714285714286',
  '57.142857142857146',
   '71.42857142857143',
   '85.71428571428572']


const squeezeNavbar = () => {
    for (let i = 0; i < labels.length; i++){
        labels[i].innerText = '';
        labels[i].style = `
            color: #131318;
            padding-right: 10px;
            margin-right: 20px;
            margin: 0 auto;
            position: fixed;
            left: ${positions[i]}%;
            transform: translate(-50%, 0);
            top: 25px;
            width: 30px;
            height: 30px;
            box-sizing: border-box;
            transition: 0s`
    }
}

const unSqueezeNavbar = () => {
    for (let i = 0; i < labels.length; i++){
        labels[i].innerText = labelsText[i];
        labels[i].style = '';
    }

}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        squeezeNavbar()
    } else {
        unSqueezeNavbar()
    }
}
window.onscroll = function() {scrollFunction()};