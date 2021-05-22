var initialState =[
    {
        id : 1,
        name : 'iphone 11 pro',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjK-A6-QJwJWrwvZSARrvuoBHciR53sbyI2sAhoPKfOGVBZUDWnaYxQVoCQKuNe5Kbk2ccYt8&usqp=CAc',
        descript : "san pham do Apple san suat",
        price : 1000,
        inventory : 10,
        rating : 4

    },
    {
        id : 2,
        name : 'iphone 12 pro',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc29UJ__9A5ZOHf0fwAiD6LHA0O-kDgLugzXbAop8TCZqjFgKOvNV9Q4dj6E&usqp=CAc',
        descript : "san pham do Apple san suat",
        price : 1500,
        inventory : 100,
        rating : 5

    },
    {
        id : 3,
        name : 'iphone XS ',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagHeOyNoFbahHtyOU5Z4a7Oy-Hp_V-jC5f0z2wVwCO3IScv4WipOAI6HzRK_8jU1QJbG5bZFT&usqp=CAc',
        descript : "san pham do Apple san suat",
        price : 900,
        inventory : 5,
        rating : 2

    }
]
const products = (state=initialState, action)=>{
    switch(action.type) {
        
        default : return [...state];
    }

}
export default products;