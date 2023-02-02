const menuShowBtn = document.getElementById('menu_show');
const menuHideBtn = document.getElementById('menu_hide');
const menuOverlay = document.querySelector('.nav_overlay');
const content = document.getElementById('content');

menuShowBtn.addEventListener('click', () => [
    menuOverlay.classList.add('show_overlay'),
    content.classList.add('hide_content')
]);
menuHideBtn.addEventListener('click', () => [
    menuOverlay.classList.remove('show_overlay'),
    content.classList.remove('hide_content')

]);

// account not verified yet so this will be implemented at a later date 

// var sendButton = document.getElementById('contact-form-btn');
// 
// sendButton.addEventListener('click', function(e) {
//     e.preventDefault()
// 
//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var message = document.getElementById('message');
//     var body = `name: ${name}<br>email: ${email}<br>message: ${message}`
// 
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "ashley.pancho17@gmail.com",
//         Password : "paskddgwsgkwoxqa",
//         To : 'ashley.pancho17@gmail.com',
//         From : email,
//         Subject : name,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// });