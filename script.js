const sosmed = document.getElementById('medsos');
const aLink = sosmed.querySelectorAll('a');

for (let i = 0; i < aLink.length; i++) {
    aLink[i].addEventListener('click', function () {
        aLink[i].style.boxShadow = 'none';
    });
    
}

