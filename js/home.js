
  function copyDiv(containerid) {
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    if (document.selection) {
        let range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        showCopyAlert()
        setTimeout(() => {showCopyAlert()}, 1500)
    } else if (window.getSelection) {
        let range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        showCopyAlert()
        setTimeout(() => {showCopyAlert()}, 1500)
    }
}

function showCopyAlert() {
    let phone = document.getElementById('phone');
    phone.classList.toggle('copied');
}

let donateButton = document.getElementById('donate')
const payments = document.getElementsByClassName('payments')
const songbook = document.getElementById('songbook')

function toggleDonateButton() {
 console.log('hi')
 for (let i = 0; i<payments.length; i++) {
    payments[i].classList.toggle('invisible')
 }
 songbook.classList.toggle('invisible')
 donateButton.value = donateButton.value == 'ПРОСТО СКИНУТЬ НАМ ДЕНЕГ' ?
 '← НАЗАД' : 'ПРОСТО СКИНУТЬ НАМ ДЕНЕГ'
 document.activeElement.blur();

}
