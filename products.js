const products = [
    {
        id: 'm1',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: `Men's Shirt`,
        description: 'Tan Skin Color Pure Cotton',
        price: 22.99,
        label: " Clothing"
    },
    {
        id: 'm2',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: `Women's Loose Fit Jeans`,
        description: 'Comfortable & Trendy!',
        price: 16.5,
        label: " Clothing"
    },
    {
        id: 'm3',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Crop Top',
        description: 'Fitted & Wrapped!',
        price: 11.5,
        label: " Clothing"
    },
    {
        id: 'm4',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Pure Cotton Kurti',
        description: ' Green & Pink Floral Printed Sequinned',
        price: 9.5,
        label: " Clothing"
    },
    {
        id: 'm5',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Oversized Tee',
        description: 'Dropped Shoulder',
        price: 7.3,
        label: " Clothing"
    },
    {
        id: 'm6',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Collar Tshirt',
        description: 'Polo T-Shirt with Logo Embroidery',
        price: 15.3,
        label: " Clothing"
    },
    {
        id: 'm7',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'BB Cream',
        description: 'Maybelline New York Fit Me Fresh Tint With SPF 50 & Vitamin C',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm8',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Eye Shadow',
        description: 'L.A. Colors 24 Color Velvet Eyeshadow Palette',
        price: 15.3,
    },
    {
        id: 'm9',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Coffee Body Scrub',
        description: 'Coconut(100g) Natural & Vegan',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm10',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Nivea Men Creme',
        description: 'Dark Spot Reduction,Non Greasy Moisturizer,Cream with UV Protect',
        price: 15.3,
        label: " Cosmetics and Body care"
    },

    {
        id: 'm11',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Garnier Men Face Wash',
        description: 'Turbo Bright Anti-Pollution Double Action - Cleans Skin Deeply',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm12',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Ultime Pro Matte Lip Crayon',
        description: 'COLOR — Peach Me (08)',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm13',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: '24H Waterproof Liquid Foundation',
        description: 'Included Blender,Highlighter,HD Face Cream',
        price: 26,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm14',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Corsica Mystic',
        description: ' Set of 3 Metal Doll Figurines ',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm15',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Ticking Thunder',
        description: 'Resin Handmade,Clock Regular Size',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm16',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Custom Neon Sing Light',
        description: 'Led Sing For Home Decor,Wedding, Birthday, Anniversary (1 Alphabet 8x8 inch)',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm17',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Wall Shelves',
        description: 'Wooden Shelf Home Decor Items Rack (Set of 6) Size- Standard',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm18',
        imgUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?format=webp&w=1080&dpr=1.8',
        name: 'Porcelain Vase and T-Light Holder',
        description: 'Fantasy Collection with round shape',
        price: 26,
        label: " Home Decor"
    },
];

exports.products = products;