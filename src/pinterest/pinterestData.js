const sizes = ["small", "medium", "large"];

const pinterestData = [
    {
        id: "1",
        username: "john_doe",
        profileImage: "https://i.pinimg.com/236x/90/57/19/9057192d89f278467329d8d4d5efc5b2.jpg",
        boards: [
            {
                boardId: "101",
                boardName: "Travel",
                pins: [
                    {
                        pinId: "1001",
                        imageUrl: "https://i.pinimg.com/236x/3c/e6/36/3ce636b78cd88696ba0c182c0b9cdbe4.jpg",
                        description: "Beautiful sunset at the beach",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c101", username: "alice123", text: "Stunning!" },
                            { commentId: "c102", username: "mark_w", text: "I want to go!" },
                        ],
                    },
                    {
                        pinId: "1002",
                        imageUrl: "https://via.placeholder.com/300x200?text=Mountain+View",
                        description: "Breathtaking mountain view",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [{ commentId: "c103", username: "traveler_joe", text: "Amazing place!" }],
                    },
                ],
            },
            {
                boardId: "102",
                boardName: "Photography",
                pins: [
                    {
                        pinId: "1003",
                        imageUrl: "https://via.placeholder.com/300x200?text=City+Lights",
                        description: "City lights at night",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [{ commentId: "c104", username: "photo_fan", text: "Great shot!" }],
                    },
                ],
            },
        ],
    },
    {
        id: "2",
        username: "jane_smith",
        profileImage: "https://i.pinimg.com/474x/d4/e7/c0/d4e7c0459230c6082c4850ba38f45ea1.jpg",
        boards: [
            {
                boardId: "103",
                boardName: "Art & Design",
                pins: [
                    {
                        pinId: "1004",
                        imageUrl: "https://i.pinimg.com/736x/f6/24/8d/f6248d5e0fd656e2e07780f644d88b23.jpg",
                        description: "Colorful abstract art piece",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [{ commentId: "c105", username: "artlover", text: "Creative!" }],
                    },
                    {
                        pinId: "1005",
                        imageUrl: "https://via.placeholder.com/300x200?text=Modern+Design",
                        description: "Sleek modern design concept",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c106", username: "design_guru", text: "Minimalistic!" },
                            { commentId: "c107", username: "jane_smith", text: "Inspired by this!" },
                        ],
                    },
                ],
            },
            {
                boardId: "104",
                boardName: "Home Decor",
                pins: [
                    {
                        pinId: "1006",
                        imageUrl: "https://via.placeholder.com/300x200?text=Cozy+Living+Room",
                        description: "Cozy living room setup",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [{ commentId: "c108", username: "home_decor_fan", text: "So inviting!" }],
                    },
                ],
            },
        ],
    },
    {
        id: "3",
        username: "alice123",
        profileImage: "https://i.pinimg.com/236x/a0/79/31/a07931bc9c7ee89f2012b209ad5f911f.jpg",
        boards: [
            {
                boardId: "105",
                boardName: "Food & Drink",
                pins: [
                    {
                        pinId: "1007",
                        imageUrl: "https://i.pinimg.com/236x/e5/fa/be/e5fabe64458b592bda7cf94375ae3ea4.jpg",
                        description: "Delicious gourmet dish",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c109", username: "foodie_mike", text: "Mouth-watering!" },
                            { commentId: "c110", username: "john_doe", text: "Need the recipe!" },
                        ],
                    },
                ],
            },
            {
                boardId: "106",
                boardName: "Baking",
                pins: [
                    {
                        pinId: "1008",
                        imageUrl: "https://via.placeholder.com/300x200?text=Chocolate+Cake",
                        description: "Decadent chocolate cake",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [{ commentId: "c111", username: "sweet_tooth", text: "Yummy!" }],
                    },
                ],
            },
        ],
    },
    {
        id: "4",
        username: "mark_w",
        profileImage: "https://i.pinimg.com/236x/d6/62/d6/d662d66e3947a86461cf34017a5576fe.jpg",
        boards: [
            {
                boardId: "107",
                boardName: "Tech Gadgets",
                pins: [
                    {
                        pinId: "1009",
                        imageUrl: "https://i.pinimg.com/236x/7d/c2/ea/7dc2ea34233ac2803e534897aef35221.jpg",
                        description: "Latest smartphone release",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c112", username: "tech_guy", text: "Must-have!" },
                            { commentId: "c113", username: "gadget_fan", text: "Looks awesome!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "5",
        username: "traveler_joe",
        profileImage: "https://i.pinimg.com/236x/c5/f1/c8/c5f1c8536a8c641215e119b4486ee558.jpg",
        boards: [
            {
                boardId: "108",
                boardName: "Adventure",
                pins: [
                    {
                        pinId: "1010",
                        imageUrl: "https://i.pinimg.com/236x/9d/b1/e0/9db1e056017df13b120ff25a3d823610.jpg",
                        description: "Skydiving over the ocean",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c114", username: "adventure_fan", text: "So thrilling!" },
                            { commentId: "c115", username: "jane_smith", text: "Bucket list item!" },
                        ],
                    },
                    {
                        pinId: "1011",
                        imageUrl: "https://via.placeholder.com/300x200?text=Hiking+Trail",
                        description: "Scenic hiking trail",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [{ commentId: "c116", username: "nature_lover", text: "Beautiful!" }],
                    },
                ],
            },
        ],
    },
    {
        id: "6",
        username: "foodie_mike",
        profileImage: "https://i.pinimg.com/236x/03/66/da/0366da57ff1e091de6f58b6727ec7f54.jpg",
        boards: [
            {
                boardId: "109",
                boardName: "Recipes",
                pins: [
                    {
                        pinId: "1012",
                        imageUrl: "https://i.pinimg.com/474x/2f/6a/ba/2f6abaff3d0e322177f9dc8387e4f44b.jpg",
                        description: "Homemade pasta recipe",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c117", username: "alice123", text: "I need to try this!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "7",
        username: "design_guru",
        profileImage: "https://i.pinimg.com/474x/e2/53/84/e2538457cd90cce472ca5d7ef458e651.jpg",
        boards: [
            {
                boardId: "110",
                boardName: "Interior Design",
                pins: [
                    {
                        pinId: "1013",
                        imageUrl: "https://i.pinimg.com/236x/e9/55/d1/e955d129f561d49a0a4be08a073dd8d4.jpg",
                        description: "Modern bedroom design",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c118", username: "home_decor_fan", text: "So sleek!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "8",
        username: "photo_fan",
        profileImage: "https://i.pinimg.com/474x/e0/39/0f/e0390f8f9eb00a8df73016d4f5e4ff39.jpg",
        boards: [
            {
                boardId: "111",
                boardName: "Nature Photography",
                pins: [
                    {
                        pinId: "1014",
                        imageUrl: "https://i.pinimg.com/474x/e3/df/19/e3df19dc19b3d175109450fc41c03187.jpg",
                        description: "Mystical forest path",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c119", username: "nature_lover", text: "Ethereal!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "9",
        username: "home_decor_fan",
        profileImage: "https://i.pinimg.com/236x/78/85/b6/7885b68dfa44195529fee42441b59ee7.jpg",
        boards: [
            {
                boardId: "112",
                boardName: "Living Spaces",
                pins: [
                    {
                        pinId: "1015",
                        imageUrl: "https://i.pinimg.com/736x/9d/ce/9f/9dce9f90e3c366d02cda88f49269d13f.jpg",
                        description: "Stylish living room setup",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c120", username: "design_lover", text: "Incredible style!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "10",
        username: "urban_explorer",
        profileImage: "https://i.pinimg.com/236x/d2/d6/dd/d2d6dd21f7f84b4f7d4522faaeb29a34.jpg",
        boards: [
            {
                boardId: "113",
                boardName: "Cityscapes",
                pins: [
                    {
                        pinId: "1016",
                        imageUrl: "https://i.pinimg.com/236x/a9/af/4d/a9af4dd9c8851e0821d6f994675f3cba.jpg",
                        description: "Urban sunset view",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c121", username: "city_dweller", text: "Love the colors!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "11",
        username: "art_enthusiast",
        profileImage: "https://i.pinimg.com/236x/de/79/54/de79546ae35a3e472dd03ce35c7911b1.jpg",
        boards: [
            {
                boardId: "114",
                boardName: "Street Art",
                pins: [
                    {
                        pinId: "1017",
                        imageUrl: "https://i.pinimg.com/474x/87/db/26/87db269951e954714736a66f26c70d44.jpg",
                        description: "Colorful graffiti mural",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c122", username: "urban_art", text: "Fantastic art!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "12",
        username: "fitness_freak",
        profileImage: "https://i.pinimg.com/236x/4d/8b/1c/4d8b1cd35082f104de89b09fffc1e97d.jpg",
        boards: [
            {
                boardId: "115",
                boardName: "Workout Routines",
                pins: [
                    {
                        pinId: "1018",
                        imageUrl: "https://i.pinimg.com/474x/91/b8/b7/91b8b701a8c20ed8412953739d266e67.jpg",
                        description: "High-intensity interval training",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c123", username: "gym_rat", text: "Great routine!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "13",
        username: "tech_lover",
        profileImage: "https://i.pinimg.com/236x/8c/51/2b/8c512b10a29b36040e75ffde4a7471e2.jpg",
        boards: [
            {
                boardId: "116",
                boardName: "Gadget Reviews",
                pins: [
                    {
                        pinId: "1019",
                        imageUrl: "https://i.pinimg.com/474x/59/cf/30/59cf307897639c58b1fb286909198293.jpg",
                        description: "Latest smartwatch review",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c124", username: "gadget_enthusiast", text: "Looks cool!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "14",
        username: "bookworm",
        profileImage: "https://i.pinimg.com/474x/19/2f/c2/192fc233db4168ea95e3aa50bcb6735a.jpg",
        boards: [
            {
                boardId: "117",
                boardName: "Books to Read",
                pins: [
                    {
                        pinId: "1020",
                        imageUrl: "https://i.pinimg.com/474x/6c/d6/fe/6cd6fed4964c2aa1e89eac90674e2535.jpg",
                        description: "Interesting book cover design",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c125", username: "literature_lover", text: "Adding this to my list!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "15",
        username: "travel_addict",
        profileImage: "https://i.pinimg.com/474x/25/54/28/255428ea4a5e3ac8babd8d86bcc5aedb.jpg",
        boards: [
            {
                boardId: "118",
                boardName: "Destinations",
                pins: [
                    {
                        pinId: "1021",
                        imageUrl: "https://i.pinimg.com/474x/a7/d9/15/a7d91590e30e2ca91f7b08420ba45c01.jpg",
                        description: "Iconic view of the Eiffel Tower",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c126", username: "europe_traveler", text: "Bucket list destination!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "16",
        username: "fashionista",
        profileImage: "https://i.pinimg.com/474x/3e/54/1b/3e541b24be0627ba1b025be3fd307b7c.jpg",
        boards: [
            {
                boardId: "119",
                boardName: "Fashion Trends",
                pins: [
                    {
                        pinId: "1022",
                        imageUrl: "https://i.pinimg.com/474x/d1/07/11/d10711435a8c814781d1e90e682ea027.jpg",
                        description: "Latest fashion trend",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c127", username: "style_expert", text: "Love this outfit!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "17",
        username: "diy_queen",
        profileImage: "https://i.pinimg.com/236x/dc/af/7b/dcaf7b60a519fd06e5dfa24b7dbe25b3.jpg",
        boards: [
            {
                boardId: "120",
                boardName: "Crafts & DIY",
                pins: [
                    {
                        pinId: "1023",
                        imageUrl: "https://i.pinimg.com/474x/ad/94/2a/ad942a8458a80637c452f6555666edac.jpg",
                        description: "Beautiful handmade craft",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c128", username: "craft_lover", text: "So creative!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "18",
        username: "music_fanatic",
        profileImage: "https://i.pinimg.com/236x/c4/f6/ce/c4f6cef912cd827d1b5a89635609fb4a.jpg",
        boards: [
            {
                boardId: "121",
                boardName: "Concerts & Gigs",
                pins: [
                    {
                        pinId: "1024",
                        imageUrl: "https://i.pinimg.com/474x/d2/af/d8/d2afd88acde75743ba24ee23fc30875c.jpg",
                        description: "Exciting live concert",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c129", username: "rock_lover", text: "Awesome performance!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "19",
        username: "pet_lover",
        profileImage: "https://i.pinimg.com/474x/b3/75/ce/b375ce511401a479824304482ed671e8.jpg",
        boards: [
            {
                boardId: "122",
                boardName: "Pets & Animals",
                pins: [
                    {
                        pinId: "1025",
                        imageUrl: "https://i.pinimg.com/474x/45/2d/03/452d0348db7916832059ea57e2bbe081.jpg",
                        description: "Adorable cute puppy",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c130", username: "dog_lover", text: "So cute!" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "20",
        username: "garden_guru",
        profileImage: "https://i.pinimg.com/236x/59/62/06/5962065c910109e904871eb2374f9968.jpg",
        boards: [
            {
                boardId: "123",
                boardName: "Gardening Tips",
                pins: [
                    {
                        pinId: "1026",
                        imageUrl: "https://i.pinimg.com/474x/db/24/6b/db246b2f60f0e84ce1f115f4bf10aa02.jpg",
                        description: "Beautiful garden setup",
                        size: sizes[Math.floor(Math.random() * sizes.length)],
                        comments: [
                            { commentId: "c131", username: "plant_lover", text: "Incredible garden!" },
                        ],
                    },
                ],
            },
        ],
    },
];

export default pinterestData;