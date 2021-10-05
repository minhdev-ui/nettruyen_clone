const newList = [
  {
    name: "Là Thánh Hoàng Chính Đạo, Ta Cưới Ma Tôn Tà Đạo？!",
    image: "asset/img/newupdate/tuyet-the-phi-dao.jpg",
    follow: "44.781",
    heart: "3.121",
  },
  {
    name: "Ngôi Nhà Kết Nối Với Hầm Ngục",
    image: "asset/img/newupdate/ngoi-nha-ket-noi-voi-ham-nguc.jpg",
    follow: "69.208",
    heart: "6.375",
  },
  {
    name: "Ta Lập Hậu Cung Tại Tây Du Ký",
    image: "asset/img/newupdate/ta-lap-hau-cung-tai-tay-du-ky.jpg",
    follow: "720.479",
    heart: "19.180",
  },
  {
    name: "Đơn Phương 37,5",
    image: "asset/img/newupdate/don-phuong-375.jpg",
    follow: "322.559",
    heart: "4.744",
  },
  {
    name: "Kowloon Generic Romance",
    image: "asset/img/newupdate/kowloon-generic-romance.jpg",
    follow: "2.599",
    heart: "221",
  },
  {
    name: "Đấu Phá Thương Khung",
    image: "asset/img/newupdate/dau-pha-thuong-khung.jpg",
    follow: "87.810.958 ",
    heart: " 92.649",
  },
  {
    name: "Học Sĩ Tái Sinh",
    image: "asset/img/newupdate/hoc-si-tai-sinh.jpg",
    follow: "14.936.073",
    heart: " 54.495",
  },
  {
    name: "Migi to Dali",
    image: "asset/img/newupdate/migi-to-dali.jpg",
    follow: "324.652",
    heart: "3.907",
  },
  {
    name: "Gunjou Senki",
    image: "asset/img/newupdate/gunjou-senki.jpg",
    follow: "466.294 ",
    heart: "2.554",
  },
  {
    name: "Thể Thao Cực Hạn",
    image: "asset/img/the-thao-cuc-han.jpg",
    follow: "7.233.664",
    heart: " 25.925",
  },
  {
    name: "Đồ Đệ Nhà Ta Lại Quải Rồi",
    image: "asset/img/newupdate/do-de-nha-ta-lai-quai-roi.jpg",
    follow: "15.736.176",
    heart: " 64.450",
  },
  {
    name: "Bắt Đầu Với Chí Tôn Đan Điền",
    image: "asset/img/newupdate//bat-dau-voi-chi-ton-dan-dien.jpg",
    follow: "2.877.331 ",
    heart: "43.708",
  },
];
const updateList = document.querySelector('.list_update');
const html = newList.map((item) =>
     `
        <li class="list_update-item">
            <img src="${item.image}" alt="" />
            <div class="follow-detail">
            <span class="follow">
                <i class="far fa-eye"></i>
                ${item.follow}
            </span>
            <span class="favourite">
                <i class="fas fa-heart"></i>
                ${item.heart}
            </span>
            </div>
            <h4>${item.name}</h4>
        </li>
    `
);
updateList.innerHTML = html
