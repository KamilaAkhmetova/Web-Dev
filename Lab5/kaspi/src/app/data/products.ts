import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Vinil Records' },
  // { id: 2, name: 'Laptops' },
  { id: 3, name: 'Phones' },
  // { id: 4, name: 'Musical Instruments' }
];
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro',
    description: 'Apple iPhone 15 Pro description',
    price: 369990,
    rating: 4.8,
    category: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO2XL1o2aklVfsZDjz2oWteOrUovWN5qrEg&s',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO2XL1o2aklVfsZDjz2oWteOrUovWN5qrEg&s'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128-gb-chernyi-113137790/',
    likes: 0
  },
  {
    id: 2,
    name: "The Doors - 13",
    description: "The Doors - 13 description",
    price: 26435,
    rating: 5,
    category: 1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h72/64842708090910.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hc9/h72/64842708090910.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h42/h69/64842710581278.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h86/h72/86576024715294.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/the-doors---13-103534830/?c=750000000",
    likes: 0
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra description',
    price: 689990,
    rating: 4.9,
    category: 3,
    image: 'https://www.ixbt.com/img/n1/news/2024/0/3/Galaxy-S24-Ultra-official-3%20copy_large.jpg',
    images: ['https://www.ixbt.com/img/n1/news/2024/0/3/Galaxy-S24-Ultra-official-3%20copy_large.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116043556/',
    likes: 0
  },
  {
    id: 4,
    name: 'Apple iPhone 17 Pro Max',
    description: 'Apple iPhone 17 Pro Max description',
    price: 899990,
    rating: 4.9,
    category: 3,
    image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg',
    images: ['https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg'],
    link: '#',
    likes: 0
    },
  {
    id: 5,
    name: "Queen GreatHits50 Limited Edition",
    description: "Queen GreatHits50 Limited Edition description",
    price: 26990,
    rating: 5,
    category: 1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p27/p97/36038515.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p27/p97/36038515.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p43/p97/36038516.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p60/p97/36038517.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/queen-greathits50-limited-edition-137940110/?c=750000000",
    likes: 0
  },
  {
    id: 6,
    name: "Sade - The Best Of Sade",
    description: "Sade - The Best Of Sade description",
    price: 35800,
    rating: 5,
    category:1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h84/h4f/68002217197598.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h84/h4f/68002217197598.jpg?format=gallery-medium",
      "https://i.ytimg.com/vi/zuL50YnlEQQ/maxresdefault.jpg",
      "https://i.ytimg.com/vi/tONNUHYzdmA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AGIBoAC0AWKAgwIABABGGUgXihSMA8=&rs=AOn4CLCcT0sHszYvefd_unr3_ZDY_uvf_w"
    ],
    link: "https://kaspi.kz/shop/p/sade---the-best-of-sade-108492588/?c=750000000",
    likes: 0
  },
  {
    id: 7,
    name: "Дос-Мукасан Дос-Мукасан LP",
    description: "Дос-Мукасан Дос-Мукасан LP description",
    price: 45800,
    rating: 5.0,
    category: 1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p7e/pa9/22445626.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p7e/pa9/22445626.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p9a/pa9/22445627.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pb6/pa9/22445628.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/dos-mukasan-dos-mukasan-lp-120849851/?c=750000000",
    likes: 0
  },
  {
    id: 9,
    name: "Radiohead - OK Computer (CD)",
    description: "Radiohead - OK Computer (CD) description",
    price: 11390,
    rating: 5,
    category:1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p25/p1c/40010125.jpeg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p25/p1c/40010125.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pbb/p18/40010126.jpeg?format=gallery-medium",
      "https://lastfm.freetls.fastly.net/i/u/ar0/6d8a0ddc16e80c9936ca0757597950e1.jpg"
    ],
    link: "https://kaspi.kz/shop/p/radiohead---ok-computer-cd--139028533/?c=750000000",
    likes: 0
  }
]
