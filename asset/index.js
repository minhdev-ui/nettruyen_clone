var index = 0;
const nextBtn = document.querySelector(".next-btn");
const slideShow = document.querySelector(".slideshow");
const recommendList = [
    {
        name: "Tuyệt Thế Phi Đao",
        chapter: 276,
        image: "asset/img/tuyet-the-phi-dao.jpg",
    },
    {
        name: 'Tu La Vô Thần',
        chapter: 249,
        image: 'asset/img/tu-la-vo-than.jpg',
    },
    {
        name: 'Diệu Thủ Cuồng Y',
        chapter: 202,
        image: 'asset/img/dieu-thu-cuong-y.jpg',
    },
    {
        name: 'Vương Phi Thật Thích Trang Điểm',
        chapter: 147,
        image: 'asset/img/vuong-phi-that-thich-trang-diem.jpg',
    },
    {
        name: 'Cô Vợ Lạnh Lùng Hợp Đồng Không dễ động đâu',
        chapter: 147.1,
        image: 'asset/img/co-vo-hop-dong-lanh-lung-khong-de-dung-d-5236.jpg',
    },
    {
        name: 'Toàn Chức Pháp Sư',
        chapter: 743,
        image: 'asset/img/toan-chuc-phap-su.jpg',
    },
    {
        name: 'Thể Thao Cực Hạn',
        chapter: 268,
        image: 'asset/img/the-thao-cuc-han.jpg',
    },
    {
        name: 'Kịch Trường Của Takemichi',
        chapter: 218,
        image: 'asset/img/kich-truong-cua-takemichi.jpg',
    },
    {
        name: 'Cẩn Thận Nữ Phụ Phản Diện Đấy',
        chapter: 80,
        image: 'asset/img/can-than-nu-phu-phan-dien-day.jpg',
    },
    {
        name: 'Công Chúa Bé Bỏng',
        chapter: 79,
        image: 'asset/img/cong-chua-be-bong.jpg',
    }
]

const slidelist =
    recommendList.map((recommend) =>`
            <div class="slide">
                <img src="${recommend.image}">
                <div class="detail">
                    <span class="name-detail">
                        ${recommend.name}
                    </span>
                    <span class="chapter-detail">${recommend.chapter} Chapter</span>
                </div>
            </div>`
    ).join("")
document.querySelector(".slideshow").innerHTML = slidelist
const slide = document.querySelectorAll(".slide");
function reset() {
    for(var i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
}

setInterval(autoSlide, 5000)

function showSlide() {
    reset()
    if (index == slide.length - 4){index = 0}
    if (index < 0){index = slide.length-5}
    for (var i = index; i < index + 5; i++){
        slide[i].className = "slide active";
    }
    slideShow.style["transform"] = `translate3d(${0 - 210*index}px,0,0)`;
}

function autoSlide() {
    showSlide();
    index = index + 1;
}

function nextSlide(n) {
    index = index + n;
    showSlide();
}
