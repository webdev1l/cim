// const directions = document.querySelector('.directions');
//
// let prevItemId = null;
//
// if (directions) {
//   directions.addEventListener('click', (event) => {
//     const item = event.target.closest('.directions__item');
//     if (item) {
//       const itemId = item.getAttribute('data-id');
//       if ((prevItemId !== itemId) && (prevItemId !== null)) {
//         directions.querySelector(`[data-hidden-id="${prevItemId}"]`)
//           .classList.remove('active');
//         directions.querySelector(`[data-id="${prevItemId}"]`)
//           .classList.remove('active');
//       }
//       prevItemId = itemId;
//       const hiddenText = directions.querySelector(`[data-hidden-id="${itemId}"]`);
//       item.classList.toggle('active');
//       hiddenText.classList.toggle('active');
//     }
//   });
// }
//
// const offside = offside('#my-menu', {
//   slidingSide: 'right',
//   buttonsSelector: '.toggle-button, .offside__close-btn',
// });
//
// document.body.addEventListener('click', (event) => {
//     if(!event.target.closest('.offside')
//       && !event.target.closest('.toggle-button')) {
//       offside.close()
//     }
// });

const fileInput = document.getElementById('file-upload');

if (fileInput) {
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length !== 0) {
      const fileName = fileInput.files[0]['name'];
      const fileData = document.querySelector('.form-section__file-data');
      const fileLabel = document.querySelector('.form-section__file-upload');
      fileLabel.innerHTML = 'Выбрать другой файл';
      fileData.innerHTML = `Выбран файл ${fileName}`;
    }
  })
}
