// Sample data for vehicles
const vehicles = [
    {
        name: "Toyota Camry",
        type: "Gasoline",
        price: "$24,000",
        features: ["Reliable", "Fuel Efficient", "Spacious Interior"]
    },
    {
        name: "Honda Civic",
        type: "Gasoline",
        price: "$21,000",
        features: ["Compact Design", "Affordable", "Fuel Efficient"]
    },
    {
        name: "Ford Mustang",
        type: "Gasoline",
        price: "$55,000",
        features: ["V8 Engine", "Sporty Design", "Advanced Safety Features"]
    },
    {
        name: "Chevrolet Camaro",
        type: "Gasoline",
        price: "$60,000",
        features: ["Powerful Engine", "Sporty Look", "Convertible Option"]
    },
    {
        name: "Tesla Model S",
        type: "Electric",
        price: "$80,000",
        features: ["Autopilot", "Long Range Battery", "Fast Charging"]
    },
    {
        name: "BMW 3 Series",
        type: "Gasoline",
        price: "$42,000",
        features: ["Luxurious Interior", "Sporty Performance", "Advanced Tech"]
    },
    {
        name: "Audi A4",
        type: "Gasoline",
        price: "$39,000",
        features: ["Quattro AWD", "Premium Interior", "Advanced Infotainment"]
    },
    {
        name: "Mercedes-Benz C-Class",
        type: "Gasoline",
        price: "$45,000",
        features: ["Luxury Design", "Comfortable Ride", "Innovative Tech"]
    },
    {
        name: "Nissan Altima",
        type: "Gasoline",
        price: "$25,000",
        features: ["Spacious", "Efficient", "Comfortable"]
    },
    {
        name: "Hyundai Sonata",
        type: "Gasoline",
        price: "$23,000",
        features: ["Affordable", "Fuel Efficient", "Comfortable Interior"]
    },
    {
        name: "Volkswagen Passat",
        type: "Gasoline",
        price: "$26,000",
        features: ["European Style", "Smooth Drive", "Spacious Interior"]
    },
    {
        name: "Mazda3",
        type: "Gasoline",
        price: "$20,000",
        features: ["Sporty Handling", "Fuel Efficient", "Stylish Design"]
    },
    {
        name: "Subaru Outback",
        type: "Gasoline",
        price: "$28,000",
        features: ["All-Wheel Drive", "Off-Road Capability", "Spacious Cargo"]
    },
    {
        name: "Dodge Charger",
        type: "Gasoline",
        price: "$30,000",
        features: ["Powerful Engine", "Muscle Car Design", "Spacious Interior"]
    },
    {
        name: "Jeep Grand Cherokee",
        type: "Gasoline",
        price: "$35,000",
        features: ["Off-Road Capability", "Spacious", "Advanced Tech"]
    },
    {
        name: "Kia Optima",
        type: "Gasoline",
        price: "$22,000",
        features: ["Modern Design", "Fuel Efficient", "Advanced Safety Features"]
    },
    {
        name: "Volvo XC60",
        type: "Hybrid",
        price: "$48,000",
        features: ["Luxury Interior", "Advanced Safety", "Fuel Efficient"]
    },
    {
        name: "Acura TLX",
        type: "Gasoline",
        price: "$40,000",
        features: ["Sporty Performance", "Luxury Interior", "Reliable"]
    },
    {
        name: "Infiniti Q50",
        type: "Gasoline",
        price: "$41,000",
        features: ["Luxurious Design", "Advanced Tech", "Sporty Performance"]
    },
    {
        name: "Lexus ES",
        type: "Gasoline",
        price: "$39,000",
        features: ["Comfortable Ride", "Luxury Interior", "Fuel Efficient"]
    },
    {
        name: "Ford Explorer",
        type: "Gasoline",
        price: "$36,000",
        features: ["Spacious", "All-Wheel Drive", "Advanced Tech"]
    },
    {
        name: "Chevrolet Tahoe",
        type: "Gasoline",
        price: "$50,000",
        features: ["Large Capacity", "Towing Capability", "Powerful Engine"]
    },
    {
        name: "Honda Accord",
        type: "Gasoline",
        price: "$26,000",
        features: ["Reliable", "Fuel Efficient", "Comfortable Interior"]
    },
    {
        name: "Toyota Highlander",
        type: "Hybrid",
        price: "$45,000",
        features: ["Spacious", "Fuel Efficient", "All-Wheel Drive"]
    },
    {
        name: "BMW X5",
        type: "Gasoline",
        price: "$60,000",
        features: ["Luxury Interior", "Powerful Engine", "Advanced Tech"]
    },
    {
        name: "Audi Q5",
        type: "Gasoline",
        price: "$45,000",
        features: ["Quattro AWD", "Luxury Interior", "Fuel Efficient"]
    },
    {
        name: "Mercedes-Benz GLE",
        type: "Gasoline",
        price: "$55,000",
        features: ["Spacious Interior", "Luxurious Features", "Smooth Drive"]
    },
    {
        name: "Kia Sorento",
        type: "Gasoline",
        price: "$29,000",
        features: ["Spacious", "All-Wheel Drive", "Affordable"]
    },
    {
        name: "Hyundai Tucson",
        type: "Gasoline",
        price: "$27,000",
        features: ["Compact SUV", "Fuel Efficient", "Advanced Safety Features"]
    },
    {
        name: "Nissan Rogue",
        type: "Gasoline",
        price: "$26,000",
        features: ["Compact SUV", "Fuel Efficient", "Advanced Tech"]
    },
    {
        name: "Ford F-150",
        type: "Gasoline",
        price: "$28,000",
        features: ["Towing Capability", "Spacious Interior", "Durable Design"]
    },
    {
        name: "Chevrolet Silverado",
        type: "Gasoline",
        price: "$32,000",
        features: ["Heavy Duty", "Powerful Engine", "Large Cargo"]
    },
    {
        name: "Tesla Model X",
        type: "Electric",
        price: "$90,000",
        features: ["Falcon Wing Doors", "Long Range", "Advanced Tech"]
    },
    {
        name: "Cadillac Escalade",
        type: "Gasoline",
        price: "$75,000",
        features: ["Luxurious", "Spacious", "Advanced Safety"]
    },
    {
        name: "Land Rover Discovery",
        type: "Diesel",
        price: "$70,000",
        features: ["Off-Road Capability", "Luxury", "Advanced Tech"]
    },
    {
        name: "Porsche Cayenne",
        type: "Gasoline",
        price: "$80,000",
        features: ["Sporty Performance", "Luxury Interior", "Advanced Tech"]
    },
    {
        name: "GMC Sierra",
        type: "Gasoline",
        price: "$33,000",
        features: ["Heavy Duty", "Durable", "Advanced Towing"]
    },
    {
        name: "Ram 1500",
        type: "Gasoline",
        price: "$34,000",
        features: ["Towing Power", "Spacious Interior", "Off-Road Capability"]
    },
    {
        name: "Ferrari Portofino",
        type: "Gasoline",
        price: "$215,000",
        features: ["High Performance", "Convertible", "Luxury Design"]
    },
    {
        name: "Lamborghini Urus",
        type: "Gasoline",
        price: "$220,000",
        features: ["Luxury SUV", "High Performance", "Sporty Design"]
    },
    {
        name: "Bentley Bentayga",
        type: "Gasoline",
        price: "$230,000",
        features: ["Luxury SUV", "Advanced Tech", "Comfort"]
    },
    {
        name: "Maserati Levante",
        type: "Gasoline",
        price: "$80,000",
        features: ["Luxury Interior", "Sporty Drive", "Italian Design"]
    },
    {
        name: "McLaren GT",
        type: "Gasoline",
        price: "$210,000",
        features: ["Supercar Performance", "Luxury Interior", "Advanced Tech"]
    },
    {
        name: "Toyota Land Cruiser",
        type: "Diesel",
        price: "$85,000",
        features: ["Off-Road Capability", "Durability", "Spacious Interior"]
    },
    {
        name: "Rolls-Royce Ghost",
        type: "Gasoline",
        price: "$315,000",
        features: ["Ultimate Luxury", "Smooth Ride", "Handcrafted Interior"]
    },
    {
        name: "Aston Martin DBX",
        type: "Gasoline",
        price: "$190,000",
        features: ["Sporty Performance", "Luxury SUV", "Advanced Tech"]
    }
];

// Function to display vehicle details
function displayVehicles(vehicleList) {
    const container = document.getElementById("vehicle-container");
    container.innerHTML = "";  // Clear existing content

    vehicleList.forEach(vehicle => {
        const vehicleCard = document.createElement("div");
        vehicleCard.classList.add("vehicle-card");

        vehicleCard.innerHTML = `
            <h3>${vehicle.name}</h3>
            <p><strong>Type:</strong> ${vehicle.type}</p>
            <p><strong>Price:</strong> ${vehicle.price}</p>
            <h4>Features:</h4>
            <ul>
                ${vehicle.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
        `;

        container.appendChild(vehicleCard);
    });
}

// Initial display of all vehicles
displayVehicles(vehicles);

// Search function to filter vehicles
function searchVehicle() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.name.toLowerCase().includes(query)
    );
    displayVehicles(filteredVehicles);
}
