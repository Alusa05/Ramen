const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];
 //Displaying the Ramen Images
 function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.ig = ramen.id; 
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
 }
 //Handle Click Events
 function handleClick(ramen) {
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const detailRestaurant = document.getElementById('detail-restaurant');
    const detailRating = document.getElementById('detail-rating');
    const detailComment = document.getElementById('detail-comment');

    detailImage.src = ramen.image;  
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = 'Restaurant: ${ramen.restaurant}';
    detailRating.textContent = 'Rating: ${ramen.rating}';
    detailComment.textContent = 'Comment: ${ramen.comment}';

 }

 //Form Submission
 function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        co
    })
 }