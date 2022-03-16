function toggleModal() {
  let modal = document.getElementById('modal');
  modal.classList.toggle('active');
}

function toggleAnswer(index) {
  let answer = document.getElementById('q' + index);
  answer.classList.toggle('active');
}

function submitRegistration() {
  document.getElementById('regForm').submit();
  this.toggleModal();
}