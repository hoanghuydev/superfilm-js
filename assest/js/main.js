const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const listFilm = [
    {
        "id": 1,
        "title": "Chờ Em Đến Ngày Mai",
        "poster": "https://i.ibb.co/MG62Snz/test.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 6,
                "name": "Tình Cảm",
                "code": "tinh-cam"
            },
            {
                "id": 9,
                "name": "Hài hước",
                "code": "hai-huoc"
            }
        ],
        "language": "Tiếng Việt"
    },
    {
        "id": 2,
        "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
        "poster": "https://i.ibb.co/cCtQzsH/cuop-bien-caribe.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Lồng tiếng"
    },
    {
        "id": 3,
        "title": "Quân Đoàn Siêu Anh Hùng",
        "poster": "https://i.ibb.co/NVLqknN/legion-of-super-heroes.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 5,
                "name": "Hoạt Hình",
                "code": "hoat-hinh"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Vietsub"
    },
    {
        "id": 1,
        "title": "Chờ Em Đến Ngày Mai",
        "poster": "https://i.ibb.co/MG62Snz/test.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 6,
                "name": "Tình Cảm",
                "code": "tinh-cam"
            },
            {
                "id": 9,
                "name": "Hài hước",
                "code": "hai-huoc"
            }
        ],
        "language": "Tiếng Việt"
    },
    {
        "id": 2,
        "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
        "poster": "https://i.ibb.co/cCtQzsH/cuop-bien-caribe.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Lồng tiếng"
    },
    {
        "id": 3,
        "title": "Quân Đoàn Siêu Anh Hùng",
        "poster": "https://i.ibb.co/NVLqknN/legion-of-super-heroes.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 5,
                "name": "Hoạt Hình",
                "code": "hoat-hinh"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Vietsub"
    },
    {
        "id": 1,
        "title": "Chờ Em Đến Ngày Mai",
        "poster": "https://i.ibb.co/MG62Snz/test.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 6,
                "name": "Tình Cảm",
                "code": "tinh-cam"
            },
            {
                "id": 9,
                "name": "Hài hước",
                "code": "hai-huoc"
            }
        ],
        "language": "Tiếng Việt"
    },
    {
        "id": 2,
        "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
        "poster": "https://i.ibb.co/cCtQzsH/cuop-bien-caribe.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Lồng tiếng"
    },
    {
        "id": 3,
        "title": "Quân Đoàn Siêu Anh Hùng",
        "poster": "https://i.ibb.co/NVLqknN/legion-of-super-heroes.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 5,
                "name": "Hoạt Hình",
                "code": "hoat-hinh"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Vietsub"
    },
    {
        "id": 1,
        "title": "Chờ Em Đến Ngày Mai",
        "poster": "https://i.ibb.co/MG62Snz/test.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 6,
                "name": "Tình Cảm",
                "code": "tinh-cam"
            },
            {
                "id": 9,
                "name": "Hài hước",
                "code": "hai-huoc"
            }
        ],
        "language": "Tiếng Việt"
    },
    {
        "id": 2,
        "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
        "poster": "https://i.ibb.co/cCtQzsH/cuop-bien-caribe.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Lồng tiếng"
    },
    {
        "id": 1,
        "title": "Chờ Em Đến Ngày Mai",
        "poster": "https://i.ibb.co/MG62Snz/test.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 6,
                "name": "Tình Cảm",
                "code": "tinh-cam"
            },
            {
                "id": 9,
                "name": "Hài hước",
                "code": "hai-huoc"
            }
        ],
        "language": "Tiếng Việt"
    },
    {
        "id": 2,
        "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
        "poster": "https://i.ibb.co/cCtQzsH/cuop-bien-caribe.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Lồng tiếng"
    },
    {
        "id": 3,
        "title": "Quân Đoàn Siêu Anh Hùng",
        "poster": "https://i.ibb.co/NVLqknN/legion-of-super-heroes.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 5,
                "name": "Hoạt Hình",
                "code": "hoat-hinh"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Vietsub"
    },
    {
        "id": 1,
        "title": "Chờ Em Đến Ngày Mai",
        "poster": "https://i.ibb.co/MG62Snz/test.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 6,
                "name": "Tình Cảm",
                "code": "tinh-cam"
            },
            {
                "id": 9,
                "name": "Hài hước",
                "code": "hai-huoc"
            }
        ],
        "language": "Tiếng Việt"
    },
    {
        "id": 2,
        "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
        "poster": "https://i.ibb.co/cCtQzsH/cuop-bien-caribe.png",
        "categories": [
            {
                "id": 1,
                "name": "Phim Lẻ",
                "code": "phim-le"
            },
            {
                "id": 3,
                "name": "Viễn Tưởng",
                "code": "vien-tuong"
            },
            {
                "id": 7,
                "name": "Hành Động",
                "code": "hanh-dong"
            },
            {
                "id": 8,
                "name": "Phiêu Lưu",
                "code": "phieu-luu"
            }
        ],
        "language": "Lồng tiếng"
    }
]
const film1 =
{
    "id": 1,
    "title": "Chờ Em Đến Ngày Mai",
    "subtitle": "Util You",
    "shortDescription": "Chờ Em Đến Ngày Mai là bộ phim chuyển thể từ tiểu thuyết Anh Không Là Con Chó Của Em của nhà báo Lê Hoàng.",
    "content": "Chờ Em Đến Ngày Mai là bộ phim chuyển thể từ tiểu thuyết Anh Không Là Con Chó Của Em của nhà báo Lê Hoàng. Bộ phim tâm lý hài này kể về chuyện tình tay bốn đầy gay cấn và bất ngờ giữa ca sĩ nổi tiếng Kevin Vũ, cô gái bán hàng Ly Cún, tiểu thư giàu có Cherry và tên cướp nghiệp dư Mic.",
    "poster": "https://i.ibb.co/MG62Snz/test.png",
    "trailer": "https://www.youtube.com/embed/ElusZEgYGfY",
    "duration": 110,
    "rate" : 9.2,
    "publishYear": 2016,
    "producer": null,
    "language": "Tiếng Việt",
    "status": "Hoàn thành",
    "country": {
        "id": 1,
        "name": "Việt Nam",
        "code": "viet-nam"
    },
    "actors": [
        {
            "id": 1,
            "name": "Trấn Thành",
            "thumbnail": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhot14.vn%2Fprofile%2Ftran-thanh-151.htm&psig=AOvVaw0Yr8Zu4utYJNpG96b-3cxB&ust=1676276415125000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiC_LXGj_0CFQAAAAAdAAAAABAE"
        },
        {
            "id": 2,
            "name": "Tiến Luật",
            "thumbnail": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhot14.vn%2Fprofile%2Ftran-thanh-151.htm&psig=AOvVaw0Yr8Zu4utYJNpG96b-3cxB&ust=1676276415125000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiC_LXGj_0CFQAAAAAdAAAAABAE"
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "Phim Lẻ",
            "code": "phim-le"
        },
        {
            "id": 6,
            "name": "Tình Cảm",
            "code": "tinh-cam"
        },
        {
            "id": 9,
            "name": "Hài hước",
            "code": "hai-huoc"
        }
    ],
    "quality": "Full HD",
    "director": 
    {
        "id": 1,
        "name": "Trấn Thành",
        "thumbnail": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhot14.vn%2Fprofile%2Ftran-thanh-151.htm&psig=AOvVaw0Yr8Zu4utYJNpG96b-3cxB&ust=1676276415125000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiC_LXGj_0CFQAAAAAdAAAAABAE"
    }
    ,
    "sourceFilms": [
        {
            "id": 1,
            "episode": 0,
            "url": "https://short.ink/XOJwEyCzZ"
        }
    ],
    "lastModifiedDate": null,
    "createdDate": null
}
const film2 = {
    "id": 2,
    "title": "Cướp Biển Vùng Caribbean 1: Lời Nguyền Tàu Ngọc Trai Đen",
    "subtitle": "Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
    "shortDescription": "Cướp biển vùng Caribbean: Lời nguyền của tàu Ngọc Trai Đen là bộ phim phiêu lưu - giả tưởng Mỹ năm 2003, là phần đầu trong loạt phim dựa trên chuyến thám hiểm Cướp biển vùng Caribe tại công viên giải trí Disney.",
    "content": "Phim Cướp biển vùng Caribbean: Lời nguyền của tàu Ngọc Trai Đen 2003: Thống đốc Weatherby Swann và cô con gái 12 tuổi Elizabeth Swann trong một chuyến đi biển trên chiếc thuyền hoàng gia sang trọng về Port Royal, Jamaica đã vớt được cậu bé Will Turner. Elizabeth nhận thấy nơi cổ cậu bé có sợi dây chuyền có hình biểu tượng của bọn cúp biển bèn giấu đi nhằm tránh cho mọi người biết lai lịch Will.Trong phim Cướp biển vùng Caribbean: Lời nguyền của tàu Ngọc Trai Đen 2003 phần 1 Will Turner cũng không hề biết mình chính là người con trai độc nhất của tướng cướp nổi danh vùng Caribbean Bootstrap Bill Turner. Cô còn kịp nhìn thấy bóng của chiếc tàu cướp biển ma quái Ngọc trai đen.Tám năm sau, thuyền trưởng James Norrington được thăng chức phó Đề đốc Hải quân Hoàng gia Anh và muốn lấy Elizabeth Swann lúc này đã trở thành một thiếu nữ xinh đẹp, làm vợ. Trước khi kịp trả lời câu hỏi của James, Elizabeth bị ngất (do chiếc áo lót thắt quá chặt) và ngã xuống vịnh. Lúc cô chìm xuống đáy cũng là lúc chiếc dây chuyền của cô léo sáng.",
    "poster": "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.mpapis.xyz%2Fposter%2Fcuop-bien-vung-caribbean-1-loi-nguyen-tau-ngoc-trai-den-1294.jpg%3F1538814526",
    "trailer": null,
    "duration": 144,
    "publishYear": 2003,
    "producer": null,
    "language": "Lồng tiếng",
    "status": "Hoàn thành",
    "country": {
        "id": 2,
        "name": "Âu Mỹ",
        "code": "au-my"
    },
    "actors": [],
    "categories": [
        {
            "id": 1,
            "name": "Phim Lẻ",
            "code": "phim-le"
        },
        {
            "id": 3,
            "name": "Viễn Tưởng",
            "code": "vien-tuong"
        },
        {
            "id": 7,
            "name": "Hành Động",
            "code": "hanh-dong"
        },
        {
            "id": 8,
            "name": "Phiêu Lưu",
            "code": "phieu-luu"
        }
    ],
    "quality": "Full HD",
    "director": null,
    "sourceFilms": [],
    "lastModifiedDate": null,
    "createdDate": null
}
const listCategory = [
    {
        "name": "Phim Lẻ",
        "code": "phim-le"
    },
    {
        "name": "Phim Bộ",
        "code": "phim-bo"
    },
    {
        "name": "Viễn Tưởng",
        "code": "vien-tuong"
    },
    {
        "name": "Cổ Trang",
        "code": "co-trang"
    },
    {
        "name": "Hoạt Hình",
        "code": "hoat-hinh"
    },
    {
        "name": "Tình Cảm",
        "code": "tinh-cam"
    },
    {
        "name": "Hành Động",
        "code": "hanh-dong"
    },
    {
        "name": "Phiêu Lưu",
        "code": "phieu-luu"
    },
    {
        "name": "Hài hước",
        "code": "hai-huoc"
    },
    {
        "name": "Kiếm Hiệp",
        "code": "kiem-hiep"
    },
    {
        "name": "Thần Thoại",
        "code": "thah-thoai"
    },
    {
        "name": "Kinh Dị",
        "code": "kinh-di"
    },
    {
        "name": "Bài Tập",
        "code": "bai-tap"
    },
    {
        "name": "Lý Thuyết",
        "code": "ly-thuyet"
    },
    {
        "name": "Kinh Dị",
        "code": "kinh-di"
    },
]


