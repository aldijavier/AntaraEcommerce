'use strict'
const searchData = {
    data: [
        {
            id: 1,
            name: 'Pengayuh Becak',
            imageUri: 'https://v-images2.antarafoto.com/hari-buruh-l1mpl3-hlc.jpg',
            prize: 5000,
            regularPrize: 100.00,
            discountPercent: 15
        },
        {
            id: 2,
            name: 'Pengendara Mobil',
            imageUri: 'https://v-images2.antarafoto.com/hari-buruh-l1mpl8-psbc.jpg',
            prize: 20000,
            regularPrize: 100.00,
            discountPercent: 15
        },
        {
            id: 3,
            name: 'Pedagang Sayur',
            imageUri: 'https://v-images2.antarafoto.com/hari-buruh-l1mpl8-psbc.jpg',
            prize: 4000,
            regularPrize: 100.00,
            discountPercent: 15
        },
        {
            id: 4,
            name: 'Buruh Tani',
            imageUri: 'https://v-images2.antarafoto.com/hari-buruh-l1mpl8-psbc.jpg',
            prize: 7000,
            regularPrize: 100.00,
            discountPercent: 15
        }
    ],
    sortData: [
        {
            name: 'Harga Terendah',
            active: true
        },
        {
            name: 'Harga Tertinggi'
        },
    ],
    filterData: [
        {
            name: 'Urutkan',
            type: 'select'
        },
        {
            name: 'Kategori',
            type: 'select'
        },
        {
            name: 'Item Terjual',
            type: 'switch',
            checked: true
        },
    ]
}
export default searchData
