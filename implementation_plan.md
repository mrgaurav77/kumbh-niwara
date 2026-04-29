# Host Dashboard Implementation Plan

This document outlines the plan to build the new `HostDashboard.js` component and integrate it into the KumbhNivas application.

## 📝 Goal Description
Create a comprehensive Host Dashboard matching the exact detailed specifications provided, utilizing TailwindCSS (saffron/white theme), Lucide-React icons, and a responsive sidebar-to-bottom-nav layout. 

## 🛑 User Review Required
> [!IMPORTANT]
> The specifications are extremely clear. I will create a large React component containing 6 distinct tabs (Overview, My Listings, Reservations, Earnings, Reviews, Settings) with all the requested dummy data and styling. I will also update `App.js` to route `/host-dashboard` to this new page. Please review this plan and give me the go-ahead!

## 🏗️ Proposed Changes

### `my-app/src/pages/HostDashboard.js`
#### [NEW] `HostDashboard.js`
A new file will be created with the following internal components/tabs:
1.  **Overview Tab:** 4 Stat Cards + Recent Bookings Table.
2.  **My Listings Tab:** Grid of 3 properties (using CSS Grid) with a "+ Add New Listing" button.
3.  **Reservations Tab:** Internal tabs for "Upcoming" and "Past" with distinct status badges.
4.  **Earnings Tab:** 3 Summary cards + Earnings table by listing.
5.  **Reviews Tab:** List of review cards featuring visual star ratings.
6.  **Settings Tab:** Personal info, Bank/UPI details, Password changes, and Account deletion sections.

*The layout will use a fixed sidebar on desktop and a bottom navigation bar on mobile.*

### `my-app/src/App.js`
#### [MODIFY] `App.js`
Add the new route to the router:
```javascript
import HostDashboard from './pages/HostDashboard';
// ... inside Routes ...
<Route path="/host-dashboard" element={<HostDashboard />} />
```

## Verification Plan
1.  Save the new `HostDashboard.js` and modified `App.js`.
2.  Ensure no syntax or compile errors occur in the React terminal.
3.  Navigate to `http://localhost:3000/host-dashboard` to visually verify all 6 tabs, responsiveness, and styling.
