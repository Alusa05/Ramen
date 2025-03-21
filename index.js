const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran",
         image: "Images/shoyu.jpg", 
         rating: 5, 
         comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", 
        restaurant: "Menya",
         image: "Images/miso.jpg", 
         rating: 4, 
         comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen",
         restaurant: "Ramen-ya",
          image: "Images/tonkotsu.jpg",
           rating: 5,
            comment: "Rich and creamy!" },
    { id: 4, name: "Gyukotsu Ramen", 
        restaurant: "Ramen-ya", 
        image: "Images/gyukotsu.jpg",
         rating: 4, 
         comment: "Very refreshing!" },
    { id: 5, name: "Kojiro Ramen", 
        restaurant: "Ramen-ya", 
        image: "Images/kojiro.jpg", 
        rating: 3, 
        comment: "Not bad!" },
    { id: 6, name: "Naruto Ramen",
         restaurant: "Ichiran",
          image: "Images/naruto.jpg",
           rating: 5, 
           comment: "Best ramen ever!" },
    { id: 7, name: "Nirvana Ramen", 
        restaurant: "Menya",
         image: "Images/nirvana.jpg", 
         rating: 4, 
         comment: "Very tasty!" }
];

// Displaying the Ramen Images
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing images
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id; 
        img.width = 150; // Set width
        img.height = 150; // Set height
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Handle Click on Ramen Image
function handleClick(ramen) {
    const detailName = document.getElementById('detail-name');
    const detailRestaurant = document.getElementById('detail-restaurant');
    const detailRating = document.getElementById('detail-rating');
    const detailComment = document.getElementById('detail-comment');

    // Update the ramen details section
    detailName.textContent = `Name: ${ramen.name}`;
    detailRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
    detailRating.textContent = `Rating: ${ramen.rating}`;
    detailComment.textContent = `Comment: ${ramen.comment}`;
}

// Form Submission
function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value
        };
        ramens.push(newRamen);
        displayRamens(); // Refresh the Ramen menu
        form.reset(); // Clear the form
    });
}

function main() {
    displayRamens();
    addSubmitListener();
    if (ramens.length > 0) {
        handleClick(ramens[0]); // Display the first ramen by default
    }
}

document.addEventListener('DOMContentLoaded', main);