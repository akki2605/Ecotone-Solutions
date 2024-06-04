let navbar = document.querySelector('.header .navbar');


document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};


window.onscroll = () =>{
   navbar.classList.remove('active');
}
// Ensure dropdown content is shown on mobile when parent is clicked
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.onclick = (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle('active');
      }
    };
  });


// Get the popup
var popup = document.getElementById("popup");

// Get the <span> element that closes the popup
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks on <span> (x), close the popup
closeBtn.onclick = function() {
   popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
   if (event.target == popup) {
      popup.style.display = "none";
   }
}

// Add event listeners to all "Read More" buttons
document.querySelectorAll('.nxt-btn').forEach(function(btn) {
   btn.addEventListener('click', function(event) {
      event.preventDefault();
      var service = Number(this.value)
      var details = [];

      // Define details for each service
      switch(service) {
         case 1:
             serviceName = "Geotechnical Investigation & Soil Testing";
             details = [
                 'Complete Range of Soil Testing & Geotechnical Investigation',
                 'Services tailored for each project, including:',
                 'Data Collection',
                 'Geotechnical Investigation Programme',
                 'Field Investigation and Sampling',
                 'Laboratory Testing',
                 'Geotechnical Investigation Report'
             ];
             break;
         case 2:
             serviceName = "Topographical Survey";
             details = [
                 'Topographic Land Survey',
                 'Mapping of ground contours and existing features',
                 'Establishment of perimeter boundary lines and easements',
                 'Establishment of benchmarks/control points with national grid coordinates',
                 'Digital elevation model (DEM) creation',
                 'Survey map preparation using AutoCAD Civil 3D software.'
             ];
             break;
         case 3:
             serviceName = "Hydrographic Survey";
             details = [
                 'Water depth measurement for ocean, rivers, and lakes',
                 'Hydrographic survey ranging from single-beam profiling to full-coverage swath bathymetry'
             ];
             break;
         case 4:
             serviceName = "Ground Water Survey";
             details = [
                 'Ground water sampling testing for all parameters as per IS specification',
                 'Sewage water & Grey water sampling & testing',
                 'Water Quality Indexing and Assessment'
             ];
             break;
         case 5:
             serviceName = "Design & Estimation";
             details = [
                 'Hydraulic Design',
                 'Structural Design',
                 'Estimation for Civil & Construction Work',
                 'E&M Estimation'
             ];
             break;
         case 6:
             serviceName = "Material Testing";
             details = [
                 'Brick',
                 'Cement',
                 'Aggregate',
                 'Reinforcement',
                 'Bitumen'
             ];
             break;
         case 7:
             serviceName = "Environmental Assessment";
             details = [
                 'Phase I and II Environmental Site Assessments',
                 'Remediation Oversight',
                 'Petroleum & Hazardous Waste Determination, Remediation, and Disposal',
                 'Groundwater and Surface Water Sampling & Monitoring',
                 'Soil, Sediment, and Benthic Sampling',
                 'Environmental Sampling & Monitoring'
             ];
             break;
         case 8:
             serviceName = "Hydrogeological Services";
             details = [
                 'Deep Well Installation',
                 'Tube well Installation',
                 'Groundwater Monitoring Well Installation, Monitoring, and Closure',
                 'Construction and Development of New Public Water Wells',
                 'Groundwater Flow Determination and Analysis'
             ];
             break;
         case 9:
             serviceName = "Public Outreach / Conflict Resolution";
             details = [
                 'Conflict Resolution/Project Management',
                 'Environmental/Conservation Education & Training',
                 'Ecotourism Planning & Management'
             ];
             break;
         case 10:
             serviceName = "Hydrogeologic / Meteorological Monitoring";
             details = [
                 'Automated Weather & Water Quality Station Data Collection & Maintenance',
                 'RF telemetry & CR10X Communications',
                 'Real-Time Data Collection & Verification (Rainfall, Photo radiation, Wind Speed, Temperature, Humidity, Barometric Pressure)',
                 'Sensor Installation'
             ];
             break;
         case 11:
             serviceName = "Water & Wastewater Treatment Facilities";
             details = [
                 'Reverse Osmosis Plant',
                 'Packaged Drinking Water Plant',
                 'Seawater Desalination Plant',
                 'Effluent Treatment Plant',
                 'Wastewater Treatment Plant',
                 'Ultra-Filtration System',
                 'Sewage Treatment Plant'
             ];
             break;
         case 12:
             serviceName = "Equipment for Municipal & Industrial WTPs";
             details = [
                 'Variety of Screens',
                 'Grit / Fat Separation Compact Unit',
                 'Sludge Thickeners Filter Belt',
                 'Sludge Dewatering Filter Belt Press',
                 'Flotation Units DAF'
             ];
             break;
         case 13:
             serviceName = "Chemical Products";
             details = [
                 'Chemicals for water wastewater treatment',
                 'Chemicals for swimming pools',
                 'Chemicals for restoring lakes, seashores, harbours, etc.',
                 'Chemicals for improving the operation of existing WWTPs',
                 'Chemicals for disinfecting and reducing bad smell from wastes',
                 'Chemicals for water & soil restoration after oil pollution'
             ];
             break;
         case 14:
             serviceName = "Supplier Quality Surveillance (SQS)";
             details = [
                 'Coordinated by experienced Project Surveillance Manager',
                 'Evaluation of supplier Quality System',
                 'Supplier Plant Survey',
                 'Purchase order status verification',
                 'Manufacturing operations survey',
                 'Effectiveness verification of supplier’s quality management system',
                 'Witnessing NDE and review for compliance to product specifications',
                 'Preparation of written reports documenting surveillance activities',
                 'Issuing non-conformance Reports (NCRs) and providing advice for compliance',
                 'Verification and reporting of NCR corrective action results',
                 'Preparation of release reports to ensure product compliance',
                 'Supplier Performance Measurement on all orders'
             ];
             break;
         default:
             serviceName = "Service not found";
             details = ['Details not available.'];
     }

      // Set the popup title
      document.getElementById('popup-title').textContent = serviceName;

      // Inject the details into the popup
      var detailsList = document.getElementById('popup-details');
      detailsList.innerHTML = '';
      details.forEach(function(detail) {
         var li = document.createElement('li');
         li.textContent = detail;
         detailsList.appendChild(li);
      });

      // Show the popup
      popup.style.display = "block";
   });
});

//get photos for projects 

document.addEventListener("DOMContentLoaded", function() {
    const viewPhotosLink = document.getElementById('view-photos');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const popupImg = document.getElementById('popup-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const photos = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',
        'photo6.jpg',
        'photo7.jpg',
        'photo8.jpg',
        'photo9.jpg',
        'photo10.jpg',
        'photo11.jpg',
        'photo12.jpg',
        'photo13.jpg',
        'photo14.jpg',
        'photo15.jpg',

    ];

    let currentPhotoIndex = 0;

    function showPhoto(index) {
        if (index >= 0 && index < photos.length) {
            popupImg.src = `images/projects/${photos[index]}`;
            currentPhotoIndex = index;
        }
    }

    viewPhotosLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPhoto(0);
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', function() {
        showPhoto((currentPhotoIndex - 1 + photos.length) % photos.length);
    });

    nextBtn.addEventListener('click', function() {
        showPhoto((currentPhotoIndex + 1) % photos.length);
    });
});


var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });
 

 
 var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
       450: {
          slidesPerView: 2,
        },
       640: {
         slidesPerView: 3,
       },
       768: {
         slidesPerView: 4,
       },
       1000: {
         slidesPerView: 5,
       },
    },
 });