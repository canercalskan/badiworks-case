const navbar = document.getElementById('navbar');
const portfolio = document.getElementById('navbar-link-portfolio');
const about = document.getElementById('navbar-link-about');
const contact = document.getElementById('navbar-link-contact');
const navbarList = document.getElementById('navbar-list');
const burgerIcon = document.getElementById('burger-icon'); // 750px ve altında navbar'da beliren burger iconuna erişilip değişkene atıldı
let activated = false; // activated boolean değişkeni, burger menüye her tıklandığında değer değiştirecek ve güncel değerine göre doğru if statement bloğunun execute edilmesini sağlayacak


document.getElementById('navbar-title').addEventListener('click' , () => { /* Kullanıcının scroll-back yapmak için fixed navbar'daki title'a tıklayabiliyor olması UX'i iyileştirecektir. */
    window.scrollTo(0 , 0)
})

portfolio.addEventListener('click' , () => {
    portfolio.classList = 'navbar-list-item-active'
    about.classList = ''
    contact.classList = '';
})

about.addEventListener('click' , () => {
    about.classList = 'navbar-list-item-active'
    portfolio.classList = ''
    contact.classList = '';
})

contact.addEventListener('click' , () => {
    contact.className = 'navbar-list-item-active'
    about.className = ''
    portfolio.className = '';
})

burgerIcon.addEventListener('click' , () => { // burger menu üzerindeki click eventlerinde execute edilecek arrow fonksiyon tanımlandı.
    if(!activated) {
        navbarList.classList = 'navbar-list-toggle'
        navbar.classList = 'navbar-toggle'
        activated = true;
    }
    else {
        navbarList.classList = 'navbar-list';
        navbar.classList = 'navbar'
        activated = false;
    }
});

// kullanıcı burger menüyü açtıktan sonra kapatmadan ekran boyutunu 750px den yukarıya çekerse, tasarımın bozulmaması için ilgili elementlerin classlarını otomatik olarak resetliyorum
window.addEventListener('resize' , () => { 
    if(window.innerWidth > 750 && activated) {
        navbarList.classList = 'navbar-list';
        navbar.classList = 'navbar';
        activated = false;
    }
})

// kullanıcı sayfayı scroll ettiğinde tetiklenecek event tanımlandı. kullanıcı her 600px scroll ettiğinde ilgili sectiona denk gelen navbar itemı yeşil bg color alacak.
// eğer kullanıcı mobil ekran boyutundaysa yalnızca açılır menüden tıklama ile dinamik class değişimi sağlanacak. scroll eventinin bir etkisi olmayacak.
window.addEventListener('scroll' , () => {
    if(!activated) {
        if(window.scrollY > 600 && window.scrollY < 1200) {
            portfolio.classList = 'navbar-list-item-active'
            about.classList = ''
            contact.classList = '';
        }
        else if(window.scrollY > 1200 && window.scrollY < 1800) {
            portfolio.classList = ''
            about.classList = 'navbar-list-item-active';
            contact.classList = '';
        }
        else if (window.scrollY > 1800) {
            portfolio.classList = '';
            about.classList = '';
            contact.classList = 'navbar-list-item-active';
        }
        else {
            portfolio.classList = ''
            about.classList = ''
            contact.classList = ''
        }
    }
})


// Form gönderildiğinde onsubmit() attribute ile tetiklenecek fonksiyon tanımlandı.
handleContactSubmission = (event) => {
    event.preventDefault(); // sitenin url'ine formdan gelen dataların geçerek navigate olması engellendi.
    let fullname = event.target[0].value;
    document.getElementById('submission-info').innerText = 'Thank you for your interest ' + fullname + '. I will respond ASAP...'
    document.getElementById('submission-info').style.display = 'block';

    // Form submit edildiğinde formda mevcut olan bütün input fieldların temizlenmesi sağlandı.
    for(let i = 0; i < event.target.length; i++) {
        event.target[i].value = null
    }
}