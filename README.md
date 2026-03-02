# Google Maps Location Saver

A web application for saving and managing geographic locations with coordinates, descriptions, and photos.

## 📋 Features

- **Interactive Map**: Click on any location on the map to capture coordinates
- **Location Coordinates**: Automatically records latitude and longitude
- **Descriptions**: Add detailed descriptions for each saved location
- **Photo Upload**: Attach multiple photos to locations
- **Google Maps Integration**: Quick link to view locations in Google Maps
- **Location History**: View all previously saved locations
- **Persistent Storage**: Locations are saved in session storage

## 🏗️ Project Structure

```
Googlemaps/
├── README.md                 # Project documentation
├── css/
│   └── styles.css           # Global styles and layout
├── scripts/
│   ├── global.js            # Global variables and data
│   ├── indes.js             # Main map functionality
│   └── locations.js         # Saved locations display logic
└── views/
    ├── index.html           # Main location saving page
    └── locations.html       # Saved locations view page
```

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript 
- **Map Library**: [Leaflet.js](https://leafletjs.com/) v1.9.4
- **Map Tiles**: OpenStreetMap
- **Storage**: Session Storage for location persistence

## 📍 How It Works

### Saving a Location
1. Navigate to **"Guardar direcciones"** (Save Directions) page
2. Click on any point on the map to capture coordinates
3. Enter a description of the location
4. Optionally upload photos of the location
5. Click "Guardar" (Save) to store the location
6. View the location directly in Google Maps using the provided link

### Viewing Saved Locations
1. Navigate to **"Ver direcciones guardadas"** (View Saved Directions) page
2. See all previously saved locations with their details
3. Access stored coordinates, descriptions, and photos

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side dependencies required

### Installation

1. Clone or download the repository:
```bash
git clone <repository-url>
cd Googlemaps
```

2. Open the application:
   - Open `views/index.html` in your web browser
   - Or serve with a local web server using Live Server 

## 💾 Data Storage

Locations are stored in the browser's **Session Storage**, which means:
- Data persists during the current browser session
- Data is cleared when the browser tab is closed
- For persistent storage, consider implementing localStorage or a backend database

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main page with interactive map and save form |
| `locations.html` | Display page for all saved locations |
| `indes.js` | Map initialization, click handlers, and save logic |
| `locations.js` | Logic to display and manage saved locations |
| `global.js` | Shared global variables and data structures |
| `styles.css` | Responsive styling and layout |

## 🌐 Navigation

The application features a fixed navigation bar with two main sections:
- **Guardar direcciones** - Save new locations
- **Ver direcciones guardadas** - View all saved locations

## 🎨 Customization

### Change Default Map Center
Edit the map center coordinates in `indes.js`:
```javascript
var map = L.map('map', {
    center: [10.4219, -75.5381],  // Change these coordinates
    zoom: 15
});
```

### Modify Map Styling
Update colors and dimensions in `css/styles.css`:
- Map dimensions: `#map` selector
- Form container: `.form-container` selector
- General theme: `body` background-color

## 📱 Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Microsoft Edge
- Not recommended for IE11 and below
---

**Note**: This application uses Leaflet.js with OpenStreetMap tiles. For production use, consider the terms of service for your chosen map provider.
