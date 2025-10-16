// const filter_Buttons = document.querySelectorAll('.filter-button');
// const museum = document.querySelectorAll('.gambar');
// filter_Buttons.forEach((each_button) =>  {
//     each_button.addEventListener('click', () => {
        
//         filter_Buttons.forEach((btn) => btn.classList.remove('active'));
//         each_button.classList.add('active');


//         const filter = each_button.getAttribute('data-filter');
//             museum.forEach((item) => {
//                 if (filter === 'All' || filter === 'Desain Grafis' || filter === 'Desain 3D' || filter === 'Fotografi'){

//                 } else{ 
//                     item.style.display = 'none';
                    
//                 }
//             });
//     });
// });
const all_buttons = document.querySelectorAll(".filter-button")
const all_images = document.querySelectorAll(".gambar")

all_buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // Bagian 1: Button
        all_buttons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Bagian 2: 
        const filter = button.getAttribute("data-filter");

        // Bagian 3:
        all_images.forEach((img) => {
            if(filter === "All" || img.classList.contains(filter)){
                img.style.display = "block";
            }
            else{
                img.style.display = "none";
            }
        });
    });
});x