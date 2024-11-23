document.addEventListener("DOMContentLoaded", function () {
    var categories = [
      {
        name: "Cars",
        items: [
          { name: "Sports Car", description: "High-performance sports car.", price: "$80,000", image: "assets/sport-car.jpg" },
          { name: "SUV", description: "Luxury and spacious SUV.", price: "$70,000", image: "assets/suv.png" },
          { name: "Electric Car", description: "Eco-friendly car.", price: "$50,000", image: "assets/electric-car.jpg" },
          { name: "Classic Car", description: "Vintage timeless design.", price: "$30,000", image: "assets/classic-car.png" }
        ]
      },
      {
        name: "Electronics",
        items: [
          { name: "Smartphone", description: "Latest smartphone.", price: "$999", image: "assets/smart-phone.png" },
          { name: "Laptop", description: "High-performance laptop.", price: "$1,500", image: "assets/laptop.jpg" },
          { name: "Headphones", description: "Noise-cancelling headphones.", price: "$300", image: "assets/headphones.png" },
          { name: "Smart Watch", description: "Stylish smart watch.", price: "$250", image: "assets/smart-watch.png" }
        ]
      },
      {
        name: "Books",
        items: [
          { name: "Fiction", description: "Engaging fiction story.", price: "$15", image: "assets/fiction.jpeg" },
          { name: "Non-Fiction", description: "Explore reality.", price: "$20", image: "assets/non-fiction.jpg" },
          { name: "Comic Book", description: "Fun comic adventures.", price: "$10", image: "assets/comic-book.png" },
          { name: "Cookbook", description: "Delicious recipes.", price: "$25", image: "assets/cook-book.jpg" }
        ]
      },
      {
        name: "Clothing",
        items: [
          { name: "T-Shirt", description: "Comfortable cotton t-shirt.", price: "$20", image: "assets/t-shirt.jpg" },
          { name: "Jeans", description: "Stylish denim jeans.", price: "$40", image: "assets/jeans.png" },
          { name: "Jacket", description: "Warm and cozy jacket.", price: "$60", image: "assets/jacket.png" },
          { name: "Sneakers", description: "Trendy sneakers.", price: "$50", image: "assets/sneakers.jpg" }
        ]
      },
      {
        name: "Home Appliances",
        items: [
          { name: "Washing Machine", description: "Efficient washing machine.", price: "$500", image: "assets/washing-machine.png" },
          { name: "Microwave Oven", description: "Compact microwave oven.", price: "$200", image: "assets/microwave-oven.png" },
          { name: "Refrigerator", description: "Spacious refrigerator.", price: "$1,000", image: "assets/refrigerator.jpg" },
          { name: "Air Conditioner", description: "Energy-efficient AC.", price: "$1,200", image: "assets/air-conditioner.png" }
        ]
      },
      {
        name: "Toys",
        items: [
          { name: "Action Figure", description: "Detailed superhero figure.", price: "$25", image: "assets/action-figure.jpeg" },
          { name: "Building Blocks", description: "Creative construction set.", price: "$30", image: "assets/building-blocks.jpg" },
          { name: "Stuffed Animal", description: "Soft and cuddly plush toy.", price: "$15", image: "assets/stuffed-animal.png" },
          { name: "Board Game", description: "Family-friendly board game.", price: "$35", image: "assets/board-game.jpg" }
        ]
      },
      {
        name: "Sports Equipment",
        items: [
          { name: "Football", description: "Durable and official size.", price: "$20", image: "assets/football.jpg" },
          { name: "Basketball", description: "Professional-grade basketball.", price: "$25", image: "assets/basket-ball.jpg" },
          { name: "Tennis Racket", description: "Lightweight and durable racket.", price: "$50", image: "assets/tennis-racket.png" },
          { name: "Yoga Mat", description: "Comfortable and non-slip mat.", price: "$30", image: "assets/yoga-mat.jpg" }
        ]
      },
      {
        name: "Gaming",
        items: [
          { name: "Gaming Console", description: "Next-gen gaming console.", price: "$500", image: "assets/gaming-console.jpeg" },
          { name: "Gaming PC", description: "Custom high-performance PC.", price: "$1,200", image: "assets/gaming-pc.png" },
          { name: "VR Headset", description: "Immersive virtual reality experience.", price: "$400", image: "assets/vr-headset.jpg" },
          { name: "Gaming Chair", description: "Ergonomic and stylish chair.", price: "$250", image: "assets/gaming-chair.png" }
        ]
      },
      {
        name: "Furniture",
        items: [
          { name: "Sofa", description: "Comfortable and stylish sofa.", price: "$800", image: "assets/sofa.jpeg" },
          { name: "Dining Table", description: "Elegant wooden dining table.", price: "$600", image: "assets/dining-table.png" },
          { name: "Bed Frame", description: "Modern and durable bed frame.", price: "$700", image: "assets/bed-frame.jpg" },
          { name: "Office Chair", description: "Ergonomic office chair.", price: "$150", image: "assets/office-chair.jpg" }
        ]
      },
      {
        name: "Health & Beauty",
        items: [
          { name: "Face Cream", description: "Hydrating and anti-aging cream.", price: "$40", image: "assets/face-cream.jpg" },
          { name: "Perfume", description: "Luxury fragrance for any occasion.", price: "$60", image: "assets/perfume.jpg" },
          { name: "Hair Dryer", description: "Professional hair styling tool.", price: "$100", image: "assets/hair-dryer.png" },
          { name: "Makeup Kit", description: "Complete makeup essentials.", price: "$75", image: "assets/makeup-kit.png" }
        ]
      },
      {
        name: "Groceries",
        items: [
          { name: "Organic Vegetables", description: "Fresh and healthy veggies.", price: "$20", image: "assets/organic-vegetables.jpg" },
          { name: "Cereal", description: "Nutritious breakfast cereal.", price: "$10", image: "assets/cereal.png" },
          { name: "Beverages", description: "Refreshing drinks.", price: "$5", image: "assets/beverages.png" },
          { name: "Snacks", description: "Tasty and crispy snacks.", price: "$8", image: "assets/snacks.png" }
        ]
      },
      {
        name: "Musical Instruments",
        items: [
          { name: "Acoustic Guitar", description: "Rich and resonant tones.", price: "$300", image: "assets/acoustic-guitar.jpg" },
          { name: "Keyboard", description: "Versatile digital keyboard.", price: "$400", image: "assets/keyboard.jpeg" },
          { name: "Drum Set", description: "Complete drum kit.", price: "$1,000", image: "assets/drum-set.jpg" },
          { name: "Violin", description: "Elegant and smooth tones.", price: "$200", image: "assets/violin.jpg" }
        ]
      },
      {
        name: "Outdoor Gear",
        items: [
          { name: "Tent", description: "Durable and waterproof tent.", price: "$150", image: "assets/tent.jpg" },
          { name: "Backpack", description: "Spacious hiking backpack.", price: "$100", image: "assets/backpack.jpg" },
          { name: "Sleeping Bag", description: "Warm and compact sleeping bag.", price: "$80", image: "assets/sleeping-bag.jpg" },
          { name: "Camping Stove", description: "Portable and easy-to-use stove.", price: "$50", image: "assets/camping-stove.jpg" }
        ]
      }
    ];
  
    var container = document.getElementById("categoriesContainer");
    var filterDropdown = document.getElementById("filterDropdown");
  
    // Render categories
    function renderCategories(filter = "all") {
      container.innerHTML = "";
      categories.forEach(category => {
        if (filter === "all" || category.name.toLowerCase() === filter) {
          const section = document.createElement("section");
          section.dataset.category = category.name.toLowerCase();
  
          var heading = document.createElement("h2");
          heading.textContent = category.name;
  
          var grid = document.createElement("div");
          grid.className = "grid";
  
          category.items.forEach(item => {
            var card = document.createElement("div");
            card.className = "card";
  
            card.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p class="price">${item.price}</p>
            `;
  
            grid.appendChild(card);
          });
  
          section.appendChild(heading);
          section.appendChild(grid);
          container.appendChild(section);
        }
      });
    }
  
    // Initial render
    renderCategories();
  
    // Filter functionality
    filterDropdown.addEventListener("change", () => {
      renderCategories(filterDropdown.value);
    });
  });
