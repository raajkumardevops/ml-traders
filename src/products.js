// src/products.js
// 60 products (20 Men, 20 Women, 20 Boys)
// Each product has 3 images (front / back / closeup) using Unsplash source queries.

const products = [
  // -------------------- MEN (1 - 20) --------------------
  {
    id: 1,
    category: "men",
    name: "Men's Kanchipuram Silk Shirt - Maroon",
    price: 4299,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/mens/shirtback.png",
      "/mens/shirtfront.png",
      "/mens/shirtside.png"
    ],
    description: "Luxurious Kanchipuram silk shirt with rich maroon tone and traditional zari border."
  },
  {
    id: 2,
    category: "men",
    name: "Men's Silk Kurta - Cream",
    price: 3499,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-kurta,cream,front",
      "https://source.unsplash.com/800x1000/?men-kurta,cream,back",
      "https://source.unsplash.com/800x1000/?men-kurta,cream,detail"
    ],
    description: "Elegant silk kurta in cream, ideal for traditional events and functions."
  },
  {
    id: 3,
    category: "men",
    name: "Men's Cotton Checked Shirt - Blue",
    price: 1299,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-shirt,checked,blue,front",
      "https://source.unsplash.com/800x1000/?men-shirt,checked,blue,back",
      "https://source.unsplash.com/800x1000/?men-shirt,checked,blue,detail"
    ],
    description: "Comfortable cotton checked shirt for daily and casual wear."
  },
  {
    id: 4,
    category: "men",
    name: "Men's Formal Cotton Pant - Grey",
    price: 1699,
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://source.unsplash.com/800x1000/?men-pant,formal,grey,front",
      "https://source.unsplash.com/800x1000/?men-pant,formal,grey,back",
      "https://source.unsplash.com/800x1000/?men-pant,formal,grey,detail"
    ],
    description: "Tailored formal cotton pant with neat finish and comfortable fit."
  },
  {
    id: 5,
    category: "men",
    name: "Men's T-Shirt - Polo Style",
    price: 799,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-tshirt,polo,front",
      "https://source.unsplash.com/800x1000/?men-tshirt,polo,back",
      "https://source.unsplash.com/800x1000/?men-tshirt,polo,detail"
    ],
    description: "Casual polo-style t-shirt made of breathable cotton."
  },
  {
    id: 6,
    category: "men",
    name: "Men's Designer Nehru Jacket - Silk",
    price: 2899,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?nehru-jacket,silk,men,front",
      "https://source.unsplash.com/800x1000/?nehru-jacket,silk,men,back",
      "https://source.unsplash.com/800x1000/?nehru-jacket,silk,men,detail"
    ],
    description: "Classic Nehru jacket in silk — perfect for weddings and festive occasions."
  },
  {
    id: 7,
    category: "men",
    name: "Festive Silk Shirt - Gold Border",
    price: 3799,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?festive-silk,shirt,gold,front",
      "https://source.unsplash.com/800x1000/?festive-silk,shirt,gold,back",
      "https://source.unsplash.com/800x1000/?festive-silk,shirt,gold,detail"
    ],
    description: "Silk shirt with rich gold border — ideal for ceremonies and celebrations."
  },
  {
    id: 8,
    category: "men",
    name: "Men's Cotton Kurta - Printed",
    price: 1599,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?cotton-kurta,printed,men,front",
      "https://source.unsplash.com/800x1000/?cotton-kurta,printed,men,back",
      "https://source.unsplash.com/800x1000/?cotton-kurta,printed,men,detail"
    ],
    description: "Lightweight printed cotton kurta for festive and casual use."
  },
  {
    id: 9,
    category: "men",
    name: "Men's Linen Shirt - Summer",
    price: 1399,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-linen,shirt,front",
      "https://source.unsplash.com/800x1000/?men-linen,shirt,back",
      "https://source.unsplash.com/800x1000/?men-linen,shirt,detail"
    ],
    description: "Breathable linen shirt designed for hot weather comfort."
  },
  {
    id: 10,
    category: "men",
    name: "Silk Veshti - Traditional",
    price: 999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?veshti,men,front",
      "https://source.unsplash.com/800x1000/?veshti,men,back",
      "https://source.unsplash.com/800x1000/?veshti,men,detail"
    ],
    description: "Traditional silk veshti with neat border, ideal for rituals and ceremonies."
  },
  {
    id: 11,
    category: "men",
    name: "Men's Ethnic Printed Shirt",
    price: 1199,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?ethnic-shirt,men,printed,front",
      "https://source.unsplash.com/800x1000/?ethnic-shirt,men,printed,back",
      "https://source.unsplash.com/800x1000/?ethnic-shirt,men,printed,detail"
    ],
    description: "Colorful ethnic printed shirt with comfortable fabric and fit."
  },
  {
    id: 12,
    category: "men",
    name: "Men's Churidhar Set",
    price: 2199,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-churidhar,set,front",
      "https://source.unsplash.com/800x1000/?men-churidhar,set,back",
      "https://source.unsplash.com/800x1000/?men-churidhar,set,detail"
    ],
    description: "Traditional churidhar set with fine stitching and comfortable fabric."
  },
  {
    id: 13,
    category: "men",
    name: "Men's Festive Waistcoat",
    price: 1999,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-waistcoat,festive,front",
      "https://source.unsplash.com/800x1000/?men-waistcoat,festive,back",
      "https://source.unsplash.com/800x1000/?men-waistcoat,festive,detail"
    ],
    description: "Decorative waistcoat to elevate festive outfits and kurta sets."
  },
  {
    id: 14,
    category: "men",
    name: "Men's Casual T-Shirt - V-Neck",
    price: 699,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-tshirt,vneck,front",
      "https://source.unsplash.com/800x1000/?men-tshirt,vneck,back",
      "https://source.unsplash.com/800x1000/?men-tshirt,vneck,detail"
    ],
    description: "Everyday V-neck t-shirt made of soft cotton blend."
  },
  {
    id: 15,
    category: "men",
    name: "Men's Silk Shirt - Embroidered",
    price: 4599,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?embroidered,silk,men,front",
      "https://source.unsplash.com/800x1000/?embroidered,silk,men,back",
      "https://source.unsplash.com/800x1000/?embroidered,silk,men,detail"
    ],
    description: "Hand-like embroidered silk shirt with rich texture and finish."
  },
  {
    id: 16,
    category: "men",
    name: "Men's Formal Blazer - Classic",
    price: 4999,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-blazer,formal,front",
      "https://source.unsplash.com/800x1000/?men-blazer,formal,back",
      "https://source.unsplash.com/800x1000/?men-blazer,formal,detail"
    ],
    description: "Classic formal blazer with structured tailoring for events."
  },
  {
    id: 17,
    category: "men",
    name: "Men's Cotton Pajama Set",
    price: 1399,
    sizes: ["M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?men-pajama,set,front",
      "https://source.unsplash.com/800x1000/?men-pajama,set,back",
      "https://source.unsplash.com/800x1000/?men-pajama,set,detail"
    ],
    description: "Comfortable cotton pajama set for home and casual lounging."
  },
  {
    id: 18,
    category: "men",
    name: "Men's Printed T-Shirt - Vintage",
    price: 749,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?vintage,tshirt,men,front",
      "https://source.unsplash.com/800x1000/?vintage,tshirt,men,back",
      "https://source.unsplash.com/800x1000/?vintage,tshirt,men,detail"
    ],
    description: "Retro-inspired printed tee with soft cotton fabric."
  },
  {
    id: 19,
    category: "men",
    name: "Men's Festive Shawl - Silk Blend",
    price: 1799,
    sizes: ["One Size"],
    images: [
      "https://source.unsplash.com/800x1000/?festive,shawl,silk,front",
      "https://source.unsplash.com/800x1000/?festive,shawl,silk,back",
      "https://source.unsplash.com/800x1000/?festive,shawl,silk,detail"
    ],
    description: "Decorative silk-blend shawl to complement festive attires."
  },
  {
    id: 20,
    category: "men",
    name: "Men's Slim Fit Cotton Pant",
    price: 1599,
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://source.unsplash.com/800x1000/?slim-fit,pant,men,front",
      "https://source.unsplash.com/800x1000/?slim-fit,pant,men,back",
      "https://source.unsplash.com/800x1000/?slim-fit,pant,men,detail"
    ],
    description: "Slim-fit cotton pants with modern cut and comfortable stretch."
  },

  // -------------------- WOMEN (21 - 40) --------------------
  {
    id: 21,
    category: "women",
    name: "Kanjivaram Silk Saree - Red & Gold",
    price: 18999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?kanjivaram,saree,red,gold,front",
      "https://source.unsplash.com/800x1000/?kanjivaram,saree,red,gold,back",
      "https://source.unsplash.com/800x1000/?kanjivaram,saree,red,gold,detail"
    ],
    description: "Rich Kanjivaram saree with golden zari border — perfect for weddings."
  },
  {
    id: 22,
    category: "women",
    name: "Half Saree Set - Green Traditional",
    price: 8999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?half-saree,green,traditional,front",
      "https://source.unsplash.com/800x1000/?half-saree,green,traditional,back",
      "https://source.unsplash.com/800x1000/?half-saree,green,traditional,detail"
    ],
    description: "Traditional half saree set with rich motifs and finishing."
  },
  {
    id: 23,
    category: "women",
    name: "Women's Embroidered Top - Coral",
    price: 1999,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?embroidered,top,women,coral,front",
      "https://source.unsplash.com/800x1000/?embroidered,top,women,coral,back",
      "https://source.unsplash.com/800x1000/?embroidered,top,women,coral,detail"
    ],
    description: "Beautiful embroidered top with delicate threadwork and motifs."
  },
  {
    id: 24,
    category: "women",
    name: "Silk Top - Festive",
    price: 2499,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?silk,top,women,front",
      "https://source.unsplash.com/800x1000/?silk,top,women,back",
      "https://source.unsplash.com/800x1000/?silk,top,women,detail"
    ],
    description: "Silk top with luxury sheen — ideal for party wear."
  },
  {
    id: 25,
    category: "women",
    name: "Printed Legging - Comfort",
    price: 799,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?printed,legging,women,front",
      "https://source.unsplash.com/800x1000/?printed,legging,women,back",
      "https://source.unsplash.com/800x1000/?printed,legging,women,detail"
    ],
    description: "Stretchy printed leggings for comfort and style."
  },
  {
    id: 26,
    category: "women",
    name: "Cotton Legging - Plain",
    price: 599,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?cotton,legging,women,front",
      "https://source.unsplash.com/800x1000/?cotton,legging,women,back",
      "https://source.unsplash.com/800x1000/?cotton,legging,women,detail"
    ],
    description: "Plain cotton leggings ideal for daily wear and layering."
  },
  {
    id: 27,
    category: "women",
    name: "Designer Lehenga - Festive",
    price: 21999,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?lehenga,designer,festive,front",
      "https://source.unsplash.com/800x1000/?lehenga,designer,festive,back",
      "https://source.unsplash.com/800x1000/?lehenga,designer,festive,detail"
    ],
    description: "Opulent designer lehenga for major celebrations and weddings."
  },
  {
    id: 28,
    category: "women",
    name: "Silk Half-Saree - Pink",
    price: 10999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?half-saree,silk,pink,front",
      "https://source.unsplash.com/800x1000/?half-saree,silk,pink,back",
      "https://source.unsplash.com/800x1000/?half-saree,silk,pink,detail"
    ],
    description: "Premium silk half-saree set with classic motifs and finish."
  },
  {
    id: 29,
    category: "women",
    name: "Anarkali Kurta - Embellished",
    price: 4999,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?anarkali,kurta,embroidered,front",
      "https://source.unsplash.com/800x1000/?anarkali,kurta,embroidered,back",
      "https://source.unsplash.com/800x1000/?anarkali,kurta,embroidered,detail"
    ],
    description: "Graceful Anarkali kurta with embellishments and flowy silhouette."
  },
  {
    id: 30,
    category: "women",
    name: "Casual Top - Floral Print",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?floral,top,women,front",
      "https://source.unsplash.com/800x1000/?floral,top,women,back",
      "https://source.unsplash.com/800x1000/?floral,top,women,detail"
    ],
    description: "Casual floral top — light and comfortable for everyday wear."
  },
  {
    id: 31,
    category: "women",
    name: "Silk Saree - Pastel Blue",
    price: 12999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?silk,saree,pastel,front",
      "https://source.unsplash.com/800x1000/?silk,saree,pastel,back",
      "https://source.unsplash.com/800x1000/?silk,saree,pastel,detail"
    ],
    description: "Delicate pastel silk saree with subtle borders and finish."
  },
  {
    id: 32,
    category: "women",
    name: "Embroidered Blouse - Bridal",
    price: 3499,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?embroidered,blouse,bridal,front",
      "https://source.unsplash.com/800x1000/?embroidered,blouse,bridal,back",
      "https://source.unsplash.com/800x1000/?embroidered,blouse,bridal,detail"
    ],
    description: "Intricate embroidered blouse suitable for bridal and festive wear."
  },
  {
    id: 33,
    category: "women",
    name: "Silk Top - Embossed",
    price: 2199,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?silk,top,embossed,front",
      "https://source.unsplash.com/800x1000/?silk,top,embossed,back",
      "https://source.unsplash.com/800x1000/?silk,top,embossed,detail"
    ],
    description: "Embossed silk top with a luxurious texture for special occasions."
  },
  {
    id: 34,
    category: "women",
    name: "Cotton Tunic - Comfort",
    price: 999,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/800x1000/?cotton,tunic,women,front",
      "https://source.unsplash.com/800x1000/?cotton,tunic,women,back",
      "https://source.unsplash.com/800x1000/?cotton,tunic,women,detail"
    ],
    description: "Comfortable cotton tunic for everyday elegance and ease."
  },
  {
    id: 35,
    category: "women",
    name: "Contemporary Saree - Printed",
    price: 6999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?printed,saree,contemporary,front",
      "https://source.unsplash.com/800x1000/?printed,saree,contemporary,back",
      "https://source.unsplash.com/800x1000/?printed,saree,contemporary,detail"
    ],
    description: "Modern printed saree that blends tradition with contemporary style."
  },
  {
    id: 36,
    category: "women",
    name: "Palazzo Set - Festive",
    price: 2999,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?palazzo,set,women,front",
      "https://source.unsplash.com/800x1000/?palazzo,set,women,back",
      "https://source.unsplash.com/800x1000/?palazzo,set,women,detail"
    ],
    description: "Comfortable palazzo set with rich fabrics and festive motifs."
  },
  {
    id: 37,
    category: "women",
    name: "Silk Dupatta - Embellished",
    price: 1299,
    sizes: ["One Size"],
    images: [
      "https://source.unsplash.com/800x1000/?silk,dupatta,embellished,front",
      "https://source.unsplash.com/800x1000/?silk,dupatta,embellished,back",
      "https://source.unsplash.com/800x1000/?silk,dupatta,embellished,detail"
    ],
    description: "Decorative silk dupatta to pair with sarees and lehengas."
  },
  {
    id: 38,
    category: "women",
    name: "Chiffon Top - Partywear",
    price: 1499,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?chiffon,top,women,front",
      "https://source.unsplash.com/800x1000/?chiffon,top,women,back",
      "https://source.unsplash.com/800x1000/?chiffon,top,women,detail"
    ],
    description: "Lightweight chiffon top for evening and party wear."
  },
  {
    id: 39,
    category: "women",
    name: "Designer Half-Saree Set - Royal",
    price: 15999,
    sizes: ["Free Size"],
    images: [
      "https://source.unsplash.com/800x1000/?designer,half-saree,royal,front",
      "https://source.unsplash.com/800x1000/?designer,half-saree,royal,back",
      "https://source.unsplash.com/800x1000/?designer,half-saree,royal,detail"
    ],
    description: "Regal half-saree set with impeccable detailing and rich hues."
  },
  {
    id: 40,
    category: "women",
    name: "Silk Skirt - Party Collection",
    price: 2699,
    sizes: ["S", "M", "L"],
    images: [
      "https://source.unsplash.com/800x1000/?silk,skirt,women,front",
      "https://source.unsplash.com/800x1000/?silk,skirt,women,back",
      "https://source.unsplash.com/800x1000/?silk,skirt,women,detail"
    ],
    description: "Elegant silk skirt with premium finishing for festive events."
  },

  // -------------------- BOYS (41 - 60) --------------------
  {
    id: 41,
    category: "boys",
    name: "Boy's Kurta Set - Festive",
    price: 899,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-kurta,set,front",
      "https://source.unsplash.com/800x1000/?boys-kurta,set,back",
      "https://source.unsplash.com/800x1000/?boys-kurta,set,detail"
    ],
    description: "Traditional kurta set tailored for boys with comfortable fabric."
  },
  {
    id: 42,
    category: "boys",
    name: "Boy's Cotton Shirt - Checked",
    price: 499,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-shirt,checked,front",
      "https://source.unsplash.com/800x1000/?boys-shirt,checked,back",
      "https://source.unsplash.com/800x1000/?boys-shirt,checked,detail"
    ],
    description: "Cute checked cotton shirt for boys with soft stitching."
  },
  {
    id: 43,
    category: "boys",
    name: "Boy's T-Shirt - Cartoon Print",
    price: 349,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-tshirt,cartoon,front",
      "https://source.unsplash.com/800x1000/?boys-tshirt,cartoon,back",
      "https://source.unsplash.com/800x1000/?boys-tshirt,cartoon,detail"
    ],
    description: "Fun cartoon print tee made of soft cotton for playful days."
  },
  {
    id: 44,
    category: "boys",
    name: "Boy's Festive Dhoti Set",
    price: 799,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-dhoti,set,front",
      "https://source.unsplash.com/800x1000/?boys-dhoti,set,back",
      "https://source.unsplash.com/800x1000/?boys-dhoti,set,detail"
    ],
    description: "Traditional dhoti set designed especially for young boys."
  },
  {
    id: 45,
    category: "boys",
    name: "Boy's Cotton Pant - Casual",
    price: 399,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-pant,cotton,front",
      "https://source.unsplash.com/800x1000/?boys-pant,cotton,back",
      "https://source.unsplash.com/800x1000/?boys-pant,cotton,detail"
    ],
    description: "Durable cotton pants for daily play and school wear."
  },
  {
    id: 46,
    category: "boys",
    name: "Boy's Ethnic Vest",
    price: 549,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-vest,ethnic,front",
      "https://source.unsplash.com/800x1000/?boys-vest,ethnic,back",
      "https://source.unsplash.com/800x1000/?boys-vest,ethnic,detail"
    ],
    description: "Cute ethnic vest to style with kurta sets and dhotis."
  },
  {
    id: 47,
    category: "boys",
    name: "Boy's Party Shirt - Polka Dot",
    price: 599,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-shirt,polka,front",
      "https://source.unsplash.com/800x1000/?boys-shirt,polka,back",
      "https://source.unsplash.com/800x1000/?boys-shirt,polka,detail"
    ],
    description: "Stylish party shirt in fun prints for special occasions."
  },
  {
    id: 48,
    category: "boys",
    name: "Boy's Track Pant - Sporty",
    price: 449,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-trackpant,sport,front",
      "https://source.unsplash.com/800x1000/?boys-trackpant,sport,back",
      "https://source.unsplash.com/800x1000/?boys-trackpant,sport,detail"
    ],
    description: "Comfortable track pants with elastic waist for active play."
  },
  {
    id: 49,
    category: "boys",
    name: "Boy's Kurta - Embroidered",
    price: 999,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-kurta,embroidered,front",
      "https://source.unsplash.com/800x1000/?boys-kurta,embroidered,back",
      "https://source.unsplash.com/800x1000/?boys-kurta,embroidered,detail"
    ],
    description: "Embroidered kurta for boys to wear at festivities and celebrations."
  },
  {
    id: 50,
    category: "boys",
    name: "Boy's Cotton Shorts - Summer",
    price: 299,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-shorts,cotton,front",
      "https://source.unsplash.com/800x1000/?boys-shorts,cotton,back",
      "https://source.unsplash.com/800x1000/?boys-shorts,cotton,detail"
    ],
    description: "Lightweight cotton shorts perfect for summer days and play."
  },
  {
    id: 51,
    category: "boys",
    name: "Boy's Festive Jacket",
    price: 1199,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-jacket,festive,front",
      "https://source.unsplash.com/800x1000/?boys-jacket,festive,back",
      "https://source.unsplash.com/800x1000/?boys-jacket,festive,detail"
    ],
    description: "Smart festive jacket to layer over kurta sets for ceremonies."
  },
  {
    id: 52,
    category: "boys",
    name: "Boy's Polo T-Shirt - Classic",
    price: 349,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-polo,tshirt,front",
      "https://source.unsplash.com/800x1000/?boys-polo,tshirt,back",
      "https://source.unsplash.com/800x1000/?boys-polo,tshirt,detail"
    ],
    description: "Classic polo t-shirt comfy for school and outings."
  },
  {
    id: 53,
    category: "boys",
    name: "Boy's Denim Jeans - Casual",
    price: 549,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-jeans,denim,front",
      "https://source.unsplash.com/800x1000/?boys-jeans,denim,back",
      "https://source.unsplash.com/800x1000/?boys-jeans,denim,detail"
    ],
    description: "Durable denim jeans built for everyday adventures and play."
  },
  {
    id: 54,
    category: "boys",
    name: "Boy's Ethnic Waistcoat",
    price: 699,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-waistcoat,ethnic,front",
      "https://source.unsplash.com/800x1000/?boys-waistcoat,ethnic,back",
      "https://source.unsplash.com/800x1000/?boys-waistcoat,ethnic,detail"
    ],
    description: "Handsome waistcoat to add a festive touch to boy's outfits."
  },
  {
    id: 55,
    category: "boys",
    name: "Boy's Festive Pant - Silk Blend",
    price: 599,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-pant,festive,silk,front",
      "https://source.unsplash.com/800x1000/?boys-pant,festive,silk,back",
      "https://source.unsplash.com/800x1000/?boys-pant,festive,silk,detail"
    ],
    description: "Festive pants with slight sheen to complement kurta sets."
  },
  {
    id: 56,
    category: "boys",
    name: "Boy's Slim Fit T-Shirt",
    price: 329,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-slimtshirt,front",
      "https://source.unsplash.com/800x1000/?boys-slimtshirt,back",
      "https://source.unsplash.com/800x1000/?boys-slimtshirt,detail"
    ],
    description: "Slim-fit tee with modern cut for young boys."
  },
  {
    id: 57,
    category: "boys",
    name: "Boy's Cotton Kurta - Light",
    price: 749,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-cotton-kurta,light,front",
      "https://source.unsplash.com/800x1000/?boys-cotton-kurta,light,back",
      "https://source.unsplash.com/800x1000/?boys-cotton-kurta,light,detail"
    ],
    description: "Soft cotton kurta for comfort and easy wear at functions."
  },
  {
    id: 58,
    category: "boys",
    name: "Boy's Partywear Set - Mini",
    price: 999,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-party,set,front",
      "https://source.unsplash.com/800x1000/?boys-party,set,back",
      "https://source.unsplash.com/800x1000/?boys-party,set,detail"
    ],
    description: "Mini partywear set with decorative elements for special days."
  },
  {
    id: 59,
    category: "boys",
    name: "Boy's Cotton Romper - Easy",
    price: 449,
    sizes: ["3-4", "5-6", "7-8"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-romper,cotton,front",
      "https://source.unsplash.com/800x1000/?boys-romper,cotton,back",
      "https://source.unsplash.com/800x1000/?boys-romper,cotton,detail"
    ],
    description: "Comfortable cotton romper for young kids with gentle stretch."
  },
  {
    id: 60,
    category: "boys",
    name: "Boy's Ethnic Jacket - Mini Sherwani",
    price: 1299,
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    images: [
      "https://source.unsplash.com/800x1000/?boys-ethnic-jacket,sherwani,front",
      "https://source.unsplash.com/800x1000/?boys-ethnic-jacket,sherwani,back",
      "https://source.unsplash.com/800x1000/?boys-ethnic-jacket,sherwani,detail"
    ],
    description: "Mini ethnic jacket styled like a sherwani for celebrations."
  }
];

export default products;
