const indoorFurniture = [
  {
    name: "Modern Coffee Table",
    price: "15,000",
    description: "Stylish low-height coffee table with a matte finish for contemporary interiors.",
    image: "https://media.istockphoto.com/id/1430535785/photo/classic-and-luxury-round-wooden-pedestal-side-table-in-sunlight-from-window-with-beige.jpg?s=612x612&w=0&k=20&c=NddUlEIf-Gz9rtN-FP0rRi7sYJRzkxHGpc5Fm2BYkFM=",
    material: "Engineered wood",
    dimensions: "90 x 50 x 40 cm",
    color: "Walnut Brown"
  },
  {
    name: "Luxury Sofa Set",
    price: "89,900",
    description: "Elegant and spacious three-piece sofa set designed for comfort and aesthetics.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
    material: "Solid wood + Fabric upholstery",
    dimensions: "220 x 90 x 85 cm (3-seater)",
    color: "Beige"
  },
  {
    name: "Wooden Bookshelf",
    price: "23,000",
    description: "Solid wood bookshelf perfect for home libraries and living spaces.",
    image: "https://plus.unsplash.com/premium_photo-1704744489988-1e4dfd3a8fcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGVuJTIwYm9vayUyMHNoZWxmfGVufDB8fDB8fHww",
    material: "Sheesham wood",
    dimensions: "180 x 75 x 30 cm",
    color: "Natural Teak"
  },
  {
    name: "Recliner Chair",
    price: "37,000",
    description: "Premium recliner with ergonomic design and soft cushioning for maximum comfort.",
    image: "https://media.istockphoto.com/id/1424803291/photo/close-up-view-of-reclining-chair-in-living-room.jpg?s=612x612&w=0&k=20&c=M5Uqp6VBJAePbkuPciflEL6yxVgLYmzS2pl_0JLx1No=",
    material: "Leather + metal frame",
    dimensions: "100 x 85 x 100 cm",
    color: "Dark Grey"
  },
  {
    name: "Dining Table Set",
    price: "72,000",
    description: "Six-seater dining table with matching chairs and a natural wood finish.",
    image: "https://media.istockphoto.com/id/1309042044/photo/interior-design-of-stylish-dining-room-interior-with-family-wooden-table-modern-chairs-plate.jpg?s=612x612&w=0&k=20&c=_r5TNzVXvZwgbHEKiEvguyq-kmAzR9U667It3mDpWQo=",
    material: "Mango wood",
    dimensions: "180 x 90 x 75 cm",
    color: "Light Oak"
  }
];

const outdoorFurniture = [
  {
    name: "Patio Lounge Chair",
    price: "20,000",
    description: "Relaxing outdoor lounge chair with weather-resistant material for patios.",
    image: "https://media.istockphoto.com/id/1321320083/photo/3d-rendering-of-an-isolated-modern-rattan-wicker-lounge-wooden-chair.jpg?s=612x612&w=0&k=20&c=Bk3DZHjHP6WDnQZ13d_bXY1PRK8VO9k_ipBnVnsLCw0=",
    material: "Rattan + steel",
    dimensions: "120 x 65 x 85 cm",
    color: "Natural Brown"
  },
  {
    name: "Garden Bench",
    price: "18,000",
    description: "Weather-resistant garden bench perfect for patios or lawns.",
    image: "https://media.istockphoto.com/id/98843911/photo/park-bench-in-clearing-in-autumn.jpg?s=612x612&w=0&k=20&c=ll7Rvp-QmgUnuyu_2E45NuBxe5Vid-x3QD3OPHXmFw0=",
    material: "Cast iron + hardwood slats",
    dimensions: "140 x 55 x 90 cm",
    color: "Dark Green & Brown"
  },
  {
    name: "Outdoor Dining Set",
    price: "64,000",
    description: "Sturdy metal dining set ideal for gardens or open balconies.",
    image: "https://images.unsplash.com/photo-1632210370137-4088c0e38de6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vciUyMGRpbmluZyUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
    material: "Powder-coated steel",
    dimensions: "Table: 150 x 80 x 75 cm",
    color: "Matte Black"
  },
  {
    name: "Hammock Chair",
    price: "12,000",
    description: "Swing-style hammock chair, perfect for relaxing under the shade.",
    image: "https://media.istockphoto.com/id/1386241107/photo/green-wall-with-hanging-chair-plant-wicker-pot-and-rug-3d-rendering.jpg?s=612x612&w=0&k=20&c=g2DeJE480-BJvCCOGtMvSKFZNTcKez3-m9GopNRfLqk=",
    material: "Cotton rope + metal frame",
    dimensions: "110 x 70 x 130 cm",
    color: "White"
  },
  {
    name: "Outdoor Bar Table",
    price: "29,000",
    description: "Compact high bar table ideal for balconies or poolside spaces.",
    image: "https://media.istockphoto.com/id/1056772586/photo/charming-parisian-sidewalk-cafe.jpg?s=612x612&w=0&k=20&c=QvZWRv2WYtItXSag9kJanvwhE1-y9zxp5RDvbYB3D9k=",
    material: "Aluminum frame + glass top",
    dimensions: "90 x 60 x 110 cm",
    color: "Charcoal Grey"
  }
];


const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const modalCategory = document.getElementById('modal-category');
const modalExtra = document.getElementById('modal-extra'); 
modalOverlay.style.transition = "opacity 0.3s ease";

function showModal(item, category) {
    modalImage.src = item.image;
    modalTitle.textContent = item.name;
    modalPrice.textContent = `₹ ${item.price}`;
    modalDescription.textContent = item.description;
    modalCategory.textContent = category;

    modalExtra.innerHTML = `
        <p><strong>Material:</strong> ${item.material || 'Not specified'}</p>
        <p><strong>Dimensions:</strong> ${item.dimensions || 'Not specified'}</p>
        <p><strong>Color:</strong> ${item.color || 'Not specified'}</p>
    `;

    modalOverlay.style.display = 'flex';
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
    }, 10);
    document.body.style.overflow = 'hidden';
}


function hideModal() {
    modalOverlay.style.opacity = '0';
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 300);
    document.body.style.overflow = 'auto';
}

function generateCards(dataArray, containerId, categoryLabel) {
    const container = document.getElementById(containerId);
    let clutter = '';

    dataArray.forEach((item, index) => {
        clutter += `
            <div class="cards fade-in" data-index="${index}" data-category="${categoryLabel.toLowerCase()}">
                <div class="cards-detailing"
                    style="
                        background: linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0)),
                        url('${item.image}');
                        background-size: cover;
                        background-position: center;
                        transition: transform 0.4s ease;
                    ">
                    <div class="card-details">
                        <div class="name-and-price">
                            <h1 class="card-content-name">${item.name}</h1>
                            <h1 class="card-content-price">&#8377; ${item.price}</h1>
                        </div>
                        <div class="card-content-description">
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = clutter;

    container.querySelectorAll('.cards').forEach(card => {
        const index = parseInt(card.getAttribute('data-index'));

        card.addEventListener('click', () => {
            showModal(dataArray[index], categoryLabel);
        });

        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

modalClose.addEventListener('click', hideModal);
modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) hideModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') hideModal();
});

generateCards(indoorFurniture, 'indoor-container', 'Indoor Furniture');
generateCards(outdoorFurniture, 'outdoor-container', 'Outdoor Furniture');

  document.querySelectorAll('.arrow-inside').forEach(arrow => {
    arrow.addEventListener('mouseenter', () => {
      arrow.style.transform = 'rotate(360deg)';
    });
    arrow.addEventListener('mouseleave', () => {
      arrow.style.transform = 'rotate(0deg)';
    });
  });

