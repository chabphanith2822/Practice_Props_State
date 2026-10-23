
export type ProductType = {
    image: string;
    name: string;
    desc: string;
    price: number;
    oldPrice?: number;   
  isPopular?: boolean;
};
  
export const ProductList: ProductType[] = [
    {
      image:
        "https://foodpanda.dhmedia.io/image/global-menu-service/FP_KH/vendor/otxi/product/4956361/a339714d-6ea1-4cdf-982d-4704fad17f91.jpg?width=500",
      name: "Braised Beef with Pumpkin Noodle",
      desc: "Pumpkin noodles served with tender beef in a rich and savory beef stew broth",
      price: 2.75,
      oldPrice: 10.5,
      isPopular: true,
    },
    {
      image:
        "https://foodpanda.dhmedia.io/image/global-menu-service/FP_KH/vendor/otxi/product/4956362/81997b68-78c2-40b9-802e-6f20ef0c51af.jpg?width=500",
      name: "Braised Beef with Instant Noodle",
      desc: "Instant noodles combined with tender beef and flavorful beef stew sauce for a hearty meal",
      price: 2.75,
      oldPrice: 10.5,
      isPopular: true,
    },
    {
      image:
        "https://foodpanda.dhmedia.io/image/global-menu-service/FP_KH/vendor/otxi/product/4956363/f2bc193f-cf88-48a6-842f-56a85abaced2.jpg?width=500",
      name: "Braised Beef with Glass Noodle",
      desc: "Soft rice vermicelli served with tender beef and rich, aromatic beef stew broth",
      price: 2.75,
      oldPrice: 10.5,
      isPopular: true,
    },
    {
      image:
        "https://foodpanda.dhmedia.io/image/fd-kh/Products/4399280.jpg?width=500",
      name: "Braised Beef with Thick Rice Noodle",
      desc: "Thick rice noodles served with tender beef in a rich and flavorful beef stew broth",
      price: 2.75,
      oldPrice: 10.5,
      isPopular: true,
    },
];