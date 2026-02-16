# Kravas Latvija - Trucking Information Portal

## Project Overview
A multilingual (LV, EN, RU) informational website for truck drivers operating in Latvia. No commercial activity - purely informational resource.

## Target Audience
- Truck drivers traveling through Latvia
- Freight carriers operating in the Baltic region
- International trucking companies

## Core Features (Implemented)

### Pages Structure (15 pages)
1. **Home** (`/`) - Main landing page with quick links
2. **Vignettes** (`/vignettes`) - E-vignette pricing and purchase info
3. **Routes** (`/routes`) - Main truck routes (Via Baltica, E22, etc.)
4. **Truck Stops** (`/parking`) - Secured parking locations
5. **Regulations** (`/rules`) - Speed limits, driving bans, restrictions
6. **Map** (`/map`) - Interactive map with highways and cities
7. **Toll Roads** (`/tolls`) - Information about road tolls
8. **Border Crossings** (`/borders`) - Wait times and border info
9. **Fuel Stations** (`/fuel`) - Diesel, AdBlue availability
10. **Weight Limits** (`/weights`) - Dimensions and weight restrictions
11. **Rest Times** (`/rest`) - EU driving/rest regulations
12. **Services** (`/services`) - Repair, towing, assistance contacts
13. **Weather** (`/weather`) - Driving conditions, winter rules
14. **Contacts** (`/contacts`) - Emergency numbers
15. **About** (`/about`) - About the portal

### Multilingual Support
- Latvian (LV) - Default language
- English (EN)
- Russian (RU)
- All content fully translated

### Technical Stack
- **Frontend**: React, Framer Motion, Tailwind CSS, Shadcn/UI
- **Map**: Leaflet.js with react-leaflet
- **Translations**: Custom i18n implementation
- **Deployment**: Static site (no backend required)

## Design System
- Primary color: `#2D4F1E` (forest green)
- Accent color: `#EBA937` (golden yellow)
- Secondary: `#9D2235` (burgundy), `#4A8C94` (teal)
- Background: `#F9F9F7` (off-white)

## Deployment Information
- **GitHub Repository**: https://github.com/igrulkinbusiness-spec/warte
- **Production Domain**: roadslvtravel.it.com
- **Server IP**: 104.207.95.146
- **Web Server**: Nginx serving static files
- **SSL**: Let's Encrypt certificate configured

## Deployment Steps
1. Build locally: `cd frontend && yarn build`
2. Copy build files to server: `/var/www/roadslv/`
3. Nginx serves the static files

## Completed Tasks (Dec 2025)
- [x] Complete website overhaul for trucking theme
- [x] All 15 pages implemented with truck-specific content
- [x] Full translation to 3 languages (LV, EN, RU)
- [x] Vignette information with pricing
- [x] Interactive map with highways
- [x] Mobile-responsive design
- [x] Navigation updated for trucking pages
- [x] Meta tags and SEO updated for trucking

## Content Sections Included
- Vignette prices (daily, weekly, monthly, yearly)
- Major routes (E67, E22, A9, A10)
- Truck parking locations with prices
- Speed limits and restrictions
- Border crossing information
- Fuel station networks
- Weight/dimension regulations
- EU driving/rest time rules
- Emergency contacts
- Weather driving tips

## Future Enhancements (Backlog)
- [ ] Add more parking locations with real data
- [ ] Add real-time border wait times integration
- [ ] Add weather API integration
- [ ] Add route planning functionality
- [ ] Add truck-friendly POI markers on map
