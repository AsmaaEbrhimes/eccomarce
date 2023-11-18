let products = [
    {
      id: 1,
      title: "Women's",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/praesent-in-ante.jpg",
      img_src_2: "imges/praesent-in-ante_002.jpg",
      size:"Large",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"5000"
    },
    {
      id: 2,
      title: "Women's",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/nulla-imperdiet-purus.jpg",
      img_src_2: "imges/nulla-imperdiet-purus_002.jpg",
      size:"Medium",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"8000"
    },

    {
      id: 3,
      title: "Mens",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/maecenas-non-laoreet_002.jpg",
      img_src_2: "imges/maecenas-non-laoreet.jpg",
      size:"Large",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"2000"
    },
    {
      id: 4,
      title: "Mens",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/fusce-et-semper.jpg",
      img_src_2: "imges/fusce-et-semper_002.jpg",
      size:"Extra large",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"4000"
    },
    {
      id: 5,
      title: "Mens",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/nunc-quis-gravida.jpg",
      img_src_2: "imges/nunc-quis-gravida_002.jpg",
      size:"Extra large",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"600"
    },
    {
      id: 6,
      title: "Kids",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/pellsque-tortor-massa_002.jpg",
      img_src_2: "imges/pellsque-tortor-massa.jpg",
      size:"Small",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"100"
    },

    {
      id: 7,
      title: "Kids",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/semper-in-tincidunt.jpg",
      img_src_2: "imges/semper-in-tincidunt_002.jpg",
      size:"Medium",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"700"
    },

    
    {
      id: 8,
      title: "Women's",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      img_src_1: "imges/morbi-facilisis-quis_002.jpg",
      img_src_2: "imges/morbi-facilisis-quis.jpg",
      size:"Medium",
      size_1:"small",
      size_2:"medium",
      size_3:"large",
      qty: 1,
      salary:"10000"
    },


  ]


  if (!localStorage.getItem('data_api')) {
    localStorage.setItem('data_api', JSON.stringify(products))
}