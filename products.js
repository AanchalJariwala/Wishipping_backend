const products = [
    {
        id: 'm1',
        imgUrl: "https://cdn.shopify.com/s/files/1/0683/0784/5403/products/WM0044_medium.webp?v=1672829628",
        name: `Men's Shirt`,
        description: 'Blue Skin Color Pure Cotton',
        price: 22.99,
        label: " Clothing"
    },
    {
        id: 'm2',
        imgUrl: 'https://cdn.shopify.com/s/files/1/0170/3422/products/authentik1_330x495_crop_center.jpg?v=1675731230',
        name: `Women's Loose Fit Jeans`,
        description: 'Comfortable & Trendy!',
        price: 16.5,
        label: " Clothing"
    },
    {
        id: 'm3',
        imgUrl: 'https://assets.ajio.com/medias/sys_master/root/20221014/CpxH/6349444daeb269659c459377/-473Wx593H-465155418-maroon-MODEL.jpg',
        name: 'Crop Top',
        description: 'Fitted & Wrapped!',
        price: 11.5,
        label: " Clothing"
    },
    {
        id: 'm4',
        imgUrl: 'https://m.media-amazon.com/images/I/514+mQqQVxL._AC_UY1100_.jpg',
        name: 'Pure Cotton Kurti',
        description: ' Green & Pink Floral Printed Sequinned',
        price: 9.5,
        label: " Clothing"
    },
    {
        id: 'm5',
        imgUrl: 'https://i.pinimg.com/originals/51/0d/a0/510da0e702399d89492fc6ea369084c0.jpg',
        name: 'Oversized Tee',
        description: 'Dropped Shoulder',
        price: 7.3,
        label: " Clothing"
    },
    {
        id: 'm6',
        imgUrl: 'https://assets.ajio.com/medias/sys_master/root/20220414/i4UD/62580776aeb26921af21472d/-1117Wx1400H-464179937-green-MODEL.jpg',
        name: 'Collar Tshirt',
        description: 'Slim Fit Polo T-Shirt',
        price: 15.3,
        label: " Clothing"
    },
    {
        id: 'm7',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQF1HfCyt2tcICUC2SJ1FARpvaSmhgcM32lme463_gFJZVBGEzWOVeBAxhzF9pYN4DPEcNMmInCkbEy0eB3cwqzwpQityoNQEI11tj-t9PE9WLB_i4uBS4jNQ&usqp=CAE',
        name: 'BB Cream',
        description: 'Maybelline New York Fit Me Fresh Tint With SPF 50 & Vitamin C',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm8',
        imgUrl: 'https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/230451/la-colors-24-color-luxe-eyeshadow-palette-velvety_1_display_1614324390_b6880dda.jpg',
        name: 'Eye Shadow',
        description: 'L.A. Colors 24 Color Velvet Eyeshadow Palette',
        price: 15.3,
    },
    {
        id: 'm9',
        imgUrl: 'https://cdn.shopify.com/s/files/1/1454/5188/products/card-1_340dd7ab-c7f7-4683-b52c-5aa9d45a89df.jpg?v=1657680785',
        name: 'Coffee Body Scrub',
        description: 'Coconut(100g) Natural & Vegan',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm10',
        imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzExPXHrcGuTHE_pdE01fgM3TzrTHKQPhSCUgCDXMEfE6KWWSjvf8BJ7tDKdgmGDtOChS4W_LVmejQ61vH4eHeofyofxqFLHi51930AVaDmmVzbj2JGcg&usqp=CAE',
        name: 'Nivea Men Creme',
        description: 'Dark Spot Reduction,Non Greasy Moisturizer,Cream with UV Protect',
        price: 15.3,
        label: " Cosmetics and Body care"
    },

    {
        id: 'm11',
        imgUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRTs5TKTKLZpkvsCGgMN-41wSWp5u3ILYWzcSVot6qDhWu-AqLa2EthSzNEaythi8319wn2bK8g_bXchNGEEgGT0wBRmbAi9GatZ0BlYdcybn4FxmwdCEUwpA&usqp=CAE',
        name: 'Garnier Men Face Wash',
        description: 'Turbo Bright Anti-Pollution Double Action - Cleans Skin Deeply',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm12',
        imgUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/faces-canada/939622/0/CyYkBlWXWs-YWFc2t3eOM-ptB8TNlRNH-939622_1.jpg?dpr=2',
        name: 'Ultime Pro Matte Lip Crayon',
        description: 'COLOR — Peach Me (08)',
        price: 15.3,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm13',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVr8Si8OqzD4PtERdkwxP5M334IJ1_8_PBqOz1pm5Sg1fTf6AT4GlzdtJG8c0BOAmPK4FnGV-DHnfL8NEkrNXpvioFw2NVvEuCvAb54q6HwKLMzBpunJMO1Q&usqp=CAE',
        name: '24H Waterproof Liquid Foundation',
        description: 'Included Blender,Highlighter,HD Face Cream',
        price: 26,
        label: " Cosmetics and Body care"
    },
    {
        id: 'm14',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOt18qP9LuDvqIeA-DhKCPse7er-wM0mo3FI5BnZ2aJo_LCNNtTi0vDi4qGOuBkF9nxOWeA7fhN2sK-MuRLchoaF1G2azOc69EtRAULLNELRZjJ3b-ZrX9SQ&usqp=CAE',
        name: 'Corsica Mystic',
        description: ' Set of 3 Metal Doll Figurines ',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm15',
        imgUrl: 'https://cdn.shopify.com/s/files/1/0615/4036/8554/products/Picsart_22-04-10_13-04-04-644.jpg?v=1649585839',
        name: 'Ticking Thunder',
        description: 'Resin Handmade,Clock Regular Size',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm16',
        imgUrl: 'https://m.media-amazon.com/images/I/51rnocBTdML.jpg',
        name: 'Custom Neon Sing Light',
        description: 'Led Sing For Home Decor,Wedding, Birthday, Anniversary (1 Alphabet 8x8 inch)',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm17',
        imgUrl: 'https://5.imimg.com/data5/ECOM/Default/2023/3/291945685/TT/OP/MS/186159128/516yyr3ljgs-1-500x500.jpg',
        name: 'Wall Shelves',
        description: 'Wooden Shelf Home Decor Items Rack (Set of 6) Size- Standard',
        price: 26,
        label: " Home Decor"
    },
    {
        id: 'm18',
        imgUrl: 'https://lmsin.net/cdn-cgi/image/h=550,w=550,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000011614922-1000011614921_01-2100.jpg',
        name: 'Porcelain Vase and T-Light Holder',
        description: 'Fantasy Collection with round shape',
        price: 26,
        label: " Home Decor"
    },
];

exports.products = products;