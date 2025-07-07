
const MovingTruckIllustration = () => (
  <svg
    className="w-full h-auto"
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Road */}
    <rect x="0" y="250" width="400" height="50" fill="#4A4A4A" />
    <rect x="20" y="270" width="40" height="10" fill="white" />
    <rect x="100" y="270" width="40" height="10" fill="white" />
    <rect x="180" y="270" width="40" height="10" fill="white" />
    <rect x="260" y="270" width="40" height="10" fill="white" />
    <rect x="340" y="270" width="40" height="10" fill="white" />

    {/* Truck Body */}
    <rect x="50" y="190" width="150" height="60" rx="5" fill="#F26522" />
    <rect x="200" y="180" width="120" height="70" rx="5" fill="white" />
    <rect x="200" y="215" width="120" height="35" rx="5" fill="#F26522" />
    <rect x="50" y="215" width="150" height="35" rx="5" fill="#F26522" />
    
    {/* Truck Cabin */}
    <rect x="320" y="190" width="50" height="60" rx="5" fill="#F26522" />
    <rect x="330" y="200" width="30" height="20" rx="3" fill="#88CCF1" />
    
    {/* Logo on Truck */}
    <text x="85" y="200" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white">ATS PACKERS</text>
    <text x="100" y="220" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">& MOVERS</text>

    {/* Boxes in Truck */}
    <rect x="210" y="190" width="25" height="25" rx="2" fill="#C49E6C" />
    <rect x="245" y="190" width="20" height="20" rx="2" fill="#C49E6C" />
    <rect x="275" y="195" width="30" height="15" rx="2" fill="#C49E6C" />

    {/* Wheels */}
    <circle cx="100" cy="250" r="20" fill="black" />
    <circle cx="100" cy="250" r="13" fill="#333" />
    <circle cx="100" cy="250" r="6" fill="#666" />
    
    <circle cx="250" cy="250" r="20" fill="black" />
    <circle cx="250" cy="250" r="13" fill="#333" />
    <circle cx="250" cy="250" r="6" fill="#666" />
    
    <circle cx="350" cy="250" r="20" fill="black" />
    <circle cx="350" cy="250" r="13" fill="#333" />
    <circle cx="350" cy="250" r="6" fill="#666" />
  </svg>
);

export default MovingTruckIllustration;
