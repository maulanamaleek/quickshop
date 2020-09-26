import OP from "../img/oppo.jpg";
import Jogging from "../img/jogging.png";
import Bag from "../img/bag.jpg";
import Fan from "../img/fan.jpg";
import Mac from "../img/macbook.jpg";
import Hawaii from "../img/hawai.png";
import Whiskas from "../img/whiskas.jpg";
import Skateboard from "../img/skateboard.jpg";
import Canon from "../img/canon.jpg";
import Pencil from "../img/pensil.jpg";
import Jeans from "../img/jeans.png";
import Chinos from "../img/chinos.jpg";
import Jordan from "../img/jordan.jpg";
import Neck from "../img/necklace.jpg";
import Cat from "../img/cat.jpg";
import Alex from "../img/alex.jpg";
import Ardiles from "../img/ardiles.jpg";
import Kaos from "../img/kaos.jpg";
import Basket from "../img/basket.jpg";
import Kemeja from "../img/kemeja.jpg";
import Key from "../img/key.jpg";
import Kid from "../img/kid.jpg";
import Water from "../img/water.jpg";

export const initState = {
  products: [
    {
      id: 1,
      name: "Oppo A9 2020",
      category: "ELEKTRONIK",
      price: 3500000,
      image: OP,
      quantity: 1,
      detail:
        "Oppo A9 2020 Baru. HP yang cocok untuk milenial. Kamera mulusnya akan membuat fotomu lebih berkualitas. Dapatkan segera dengan harga murah!!! ",
    },
    {
      id: 2,
      name: "Kemeja Hawaii",
      category: "BAJU",
      price: 120000,
      quantity: 1,
      image: Hawaii,
      detail:
        "Baju hawaii adem banget. Sesuai namanya, baju ini cocok banget dipakai buat santai di pantai. Anjai.",
    },
    {
      id: 3,
      name: "Louis Jeans",
      category: "CELANA",
      quantity: 1,
      price: 229000,
      image: Jeans,
      detail: "Bukan Jeans sobek-sobek. Kualitasnya muantep!",
    },
    {
      id: 4,
      name: "Tas Lucu",
      category: "TAS",
      quantity: 1,
      price: 175000,
      image: Bag,
      detail: "Beli aja tas murah dan lucu di sini!",
    },
    {
      id: 5,
      name: "Whiskas",
      category: "PELIHARAAN",
      price: 15000,
      quantity: 1,
      image: Whiskas,
      detail:
        "Jangan buat majikan anda menunggu! Ayo belikan makanan favoritnya!",
    },
    {
      id: 6,
      name: "Skateboard",
      category: "HOBI",
      price: 1500000,
      quantity: 1,
      image: Skateboard,
      detail: "Biar keren beli ini duls cuy!",
    },
    {
      id: 7,
      name: "Canon 60D",
      category: "ELEKTRONIK",
      price: 8500000,
      quantity: 1,
      image: Canon,
      detail:
        "Siapa yang hobi foto-foto? Tentunya kamera mahal ini bagus banget! Beli dong!",
    },
    {
      id: 8,
      name: "Pensil Warna",
      category: "HOBI",
      price: 35000,
      quantity: 1,
      image: Pencil,
      detail: "Masih jaman gambar manual? gapapa deh, pensil ini bagus kok.",
    },
    {
      id: 9,
      name: "Chinos Pendek",
      category: "CELANA",
      price: 97000,
      quantity: 1,
      image: Chinos,
      detail:
        "Chinos pendek setengah harga, yang panjang 2 kali lipat harganya.",
    },
    {
      id: 10,
      name: "Alexander Christie",
      category: "AKSESORIS",
      price: 2500000,
      quantity: 1,
      image: Alex,
      detail: "Beli ini biar terlihat kaya!",
    },
    {
      id: 11,
      name: "Kandang Kucing",
      category: "PELIHARAAN",
      quantity: 1,
      price: 355000,
      image: Cat,
      detail:
        "Capek kucingmu gangguin kerja terus? Kandangin aja biar tau rasa!",
    },
    {
      id: 12,
      name: "Macbook Pro 15",
      category: "ELEKTRONIK",
      quantity: 1,
      price: 21000000,
      image: Mac,
      detail: "Mau punya juga:(",
    },
    {
      id: 13,
      name: "Kalung Emas 24K",
      category: "AKSESORIS",
      price: 9000000,
      quantity: 1,
      image: Neck,
      detail: "24K magic in the aiiirrr....",
    },
    {
      id: 14,
      name: "Ardiles Biru",
      category: "SEPATU",
      price: 150000,
      quantity: 1,
      image: Ardiles,
      detail: "Sepatu berkualitas harga bersahabat",
    },
    {
      id: 15,
      name: "Kaos Dalam Putih",
      category: "BAJU",
      quantity: 1,
      price: 35000,
      image: Kaos,
      detail: "Kaos dalem warna putih",
    },
    {
      id: 16,
      name: "Celana Jogging",
      category: "CELANA",
      price: 68000,
      quantity: 1,
      image: Jogging,
      detail: "ini celana emang buat olahraga",
    },
    {
      id: 17,
      name: "Bola Basket",
      category: "HOBI",
      price: 450000,
      image: Basket,
      quantity: 1,
      detail: "hobi main tenis? yuk beli bola basket aja!",
    },
    {
      id: 18,
      name: "Nike Air Jordan",
      category: "SEPATU",
      quantity: 1,
      price: 2500000,
      image: Jordan,
      detail: "Beli satu gratis satu alias dapat sepasang!",
    },
    {
      id: 19,
      name: "Ransel Waterproof",
      category: "TAS",
      price: 355000,
      quantity: 1,
      image: Water,
      detail: "Naik motor hujan-hujanan sama doi enaknya pakai ransel ini!",
    },
    {
      id: 20,
      name: "Tas Anak",
      category: "TAS",
      price: 125000,
      image: Kid,
      quantity: 1,
      detail:
        "Fun fact: Dora the explorer pernah nawar ini tas 10jt tapi ga gw lepas!",
    },
    {
      id: 21,
      name: "Kipas Angin",
      category: "ELEKTRONIK",
      price: 330000,
      quantity: 1,
      image: Fan,
      detail: "Kipas angin biar dingin",
    },
    {
      id: 22,
      name: "Gantungan Kunci",
      category: "AKSESORIS",
      quantity: 1,
      price: 10000,
      image: Key,
      detail: "Cukup kunci aja yang digantung!",
    },
    {
      id: 23,
      name: "Kemeja Kotak",
      category: "BAJU",
      quantity: 1,
      price: 125000,
      image: Kemeja,
      detail: "Kemeja kotak berkualitas tinggi impor dari zimbabwe",
    },
  ],
  carts: 0,
  added: [],
  total: 0,
};
