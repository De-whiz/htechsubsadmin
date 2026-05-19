# HTECHSUBS Admin Panel - Premium VTU Platform Dashboard

## Overview

This is a **production-ready, premium fintech-style admin panel** for the HTECHSUBS VTU (Virtual Top-Up) platform. Built with modern web technologies, it provides a comprehensive management interface for handling users, transactions, services, and platform configurations.

## ✨ Features

### 🔐 Authentication
- **Premium Login Page** with glassmorphism design
- Demo credentials: `admin@htechsubs.com` / `Demo@12345`
- Remember me functionality
- Password visibility toggle
- Smooth animations and transitions

### 📊 Dashboard
- **Real-time Statistics** with 8 key metrics
- **Interactive Charts**:
  - Revenue trend (Line chart)
  - Transaction status (Doughnut chart)
  - Service distribution (Bar chart)
  - Daily activity (Area chart)
- Responsive card layouts
- Quick overview of platform health

### 👥 Users Management
- View all registered users with detailed information
- Search users by name or email
- Filter by status (Active, Pending, Suspended)
- User detail modals with:
  - Wallet balance information
  - Transaction history
  - Referral details
- Action buttons: View, Edit, Fund, Suspend
- Add new users functionality
- Responsive table/card views

### 💳 Transactions Management
- Monitor all platform transactions
- Transaction summary cards
- Filter by status, service, and date
- Search functionality
- Transaction details modal with:
  - Balance before/after
  - Commission details
  - API response status
  - Reference numbers
- Export to CSV feature
- Pagination support

### 🎯 Services Management
- **Tabbed interface** for different services:
  - **Data Services**: MTN, Airtel, Glo, Jio data plans
  - **Airtime**: All networks with commission settings
  - **Cable**: DStv, GoTV, Startimes plans
  - **Electricity**: IKEDC, EEDC, BEDC configurations
  - **Exam Checkers**: WAEC, NECO, NABTEB
  - **NIN & CAC**: Placeholder for future expansion
- Enable/disable services with toggles
- Price management
- Commission settings
- Bulk save functionality

### ⚙️ Settings & Configuration
- **General Settings**: Platform name, URL, support contact
- **Branding**: Logo, favicon, color customization
- **API Keys**: SME and Corporate API management
- **Email Configuration**: SMTP setup for notifications
- **Security**: 2FA, IP whitelist, password management
- **Notifications**: Email and in-app preferences
- **Backup & Data**: Automatic backup scheduling

### 🎨 Sidebar Navigation
- **Fixed sidebar** with collapsible state
- **Organized menu** with sections:
  - Main (Dashboard)
  - Management (Users, Transactions, Wallet Requests)
  - Services (Data, Airtime, Cable, Electricity, Exam, NIN, CAC)
  - Other (API, Pricing, Notifications, Reports, Settings)
- Active state indicators
- Submenu support with expand/collapse
- Mobile-responsive drawer

### 📱 Top Navbar
- Breadcrumb navigation
- Global search bar
- Notification badge
- Settings quick access
- Logout button

## 📁 Project Structure

```
admin/
├── index.html                 # Dashboard home page
├── login.html                 # Admin login page
├── users.html                 # Users management
├── transactions.html          # Transactions monitoring
├── services.html              # Services configuration
├── settings.html              # Platform settings
├── css/
│   └── admin-styles.css       # Complete design system
├── js/
│   └── admin-functions.js     # Helper functions & utilities
└── images/                    # Image assets
```

## 🎨 Design System

### Colors
- **Primary Purple**: `#6C3BFF`
- **Purple Light**: `#8B5CF6`
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Danger**: `#EF4444`
- **Info**: `#3B82F6`
- **White**: `#FFFFFF`
- **Light Gray**: `#F8F9FA`

### Typography
- **Font Family**: SF Pro Display, Inter, system-ui, sans-serif
- **Sizes**: 12px, 13px, 14px, 16px, 18px, 24px, 28px
- **Weights**: 400, 500, 600, 700

### Spacing System
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px

### Components
- **Cards**: Soft shadows, hover lift effect
- **Buttons**: Primary (gradient), Secondary, Outline, Danger
- **Forms**: Clean inputs, focused states
- **Tables**: Striped rows, sortable headers
- **Modals**: Animated overlays, smooth transitions
- **Status Badges**: Color-coded with icons
- **Charts**: Chart.js integration with custom styling

## 🚀 Quick Start

### 1. Open the Admin Panel
```
Open admin/login.html in your browser
```

### 2. Login with Demo Credentials
```
Email: admin@htechsubs.com
Password: Demo@12345
```

### 3. Navigate Dashboard
Once logged in, you'll be directed to the main dashboard. Use the sidebar to navigate between different sections.

## 📖 Page Documentation

### Login Page (`login.html`)
- **Purpose**: Admin authentication
- **Features**:
  - Glassmorphism design
  - Animated gradient background
  - Show/hide password toggle
  - Remember me checkbox
  - Demo credentials display
- **Local Storage**: Stores `adminLogged` and `adminEmail`

### Dashboard (`index.html`)
- **Purpose**: Central hub with platform overview
- **Key Sections**:
  - 8 summary cards with key metrics
  - 4 interactive charts using Chart.js
  - Real-time statistics
  - Quick access buttons

### Users Management (`users.html`)
- **Purpose**: Manage platform users
- **Features**:
  - User list table with 8 columns
  - Search and filter capabilities
  - User details modal
  - Add new user form
  - Action buttons for each user
- **Sample Data**: 12 mock users

### Transactions (`transactions.html`)
- **Purpose**: Monitor and analyze transactions
- **Features**:
  - Transaction summary statistics
  - Advanced filtering
  - Transaction details modal
  - Export functionality
  - Pagination
- **Sample Data**: 20 mock transactions

### Services (`services.html`)
- **Purpose**: Configure all VTU services
- **Features**:
  - 7 service categories with tabs
  - Pricing management cards
  - Enable/disable toggles
  - Commission settings
- **Services Included**:
  - Data (4 networks)
  - Airtime (4 networks)
  - Cable TV (3 providers)
  - Electricity (3 providers)
  - Exam Checkers (3 types)
  - NIN & CAC (placeholders)

### Settings (`settings.html`)
- **Purpose**: Platform configuration
- **Sections**:
  - General (name, URL, support info)
  - Branding (logo, colors, favicon)
  - API Keys (SME, Corporate, webhook)
  - Email/SMTP (configuration)
  - Security (2FA, IP whitelist, password)
  - Notifications (preferences)
  - Backup (scheduling, restore)

## 💻 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox
- **JavaScript (Vanilla)**: No dependencies required
- **Chart.js**: Interactive data visualization

### Features
- Responsive Design (Mobile-first)
- Local Storage for session management
- Modal dialogs
- Form validation
- Data export (CSV)
- Search and filtering
- Pagination

## 🔧 Customization

### Change Brand Colors
Edit `admin/css/admin-styles.css` - Update CSS variables in `:root` selector:

```css
:root {
  --primary-purple: #6C3BFF;
  --primary-purple-light: #8B5CF6;
  /* ... other colors ... */
}
```

### Modify Sidebar Menu
Edit the sidebar navigation in any page's HTML. Add/remove menu items in the `<nav class="sidebar-menu">` section.

### Add New Pages
1. Create new HTML file in `/admin/` directory
2. Copy sidebar and navbar structure from existing pages
3. Add link in sidebar menu
4. Include `js/admin-functions.js` script

### Connect to Real API
Edit `admin/js/admin-functions.js` - Update `API` object base URL and implement actual endpoints:

```javascript
const API = {
    baseUrl: 'https://your-api.com/api',
    // ... modify endpoints ...
};
```

## 📊 Sample Data

The admin panel includes realistic mock data for:
- **12 Users** with various statuses and wallet balances
- **20 Transactions** with different services and statuses
- **Service Pricing** for all available services
- **8 Dashboard metrics** with sample statistics

## 🔐 Security Considerations

For production deployment:

1. **Replace Demo Credentials**
   - Update login validation in `login.html`
   - Implement proper authentication API

2. **Add Backend Integration**
   - Connect API endpoints in `admin-functions.js`
   - Implement proper token management
   - Add CSRF protection

3. **Enable HTTPS**
   - Deploy on secure server
   - Use environment variables for sensitive data

4. **Input Validation**
   - Validate all form inputs
   - Sanitize data before API calls
   - Implement rate limiting

5. **Access Control**
   - Implement role-based access (RBAC)
   - Restrict admin panel to authorized users only
   - Log all admin activities

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above (full layout)
- **Tablet**: 768px - 1199px (adjusted grid, hidden elements)
- **Mobile**: Below 768px (single column, drawer sidebar)

### Mobile Features
- Collapsible sidebar drawer
- Responsive tables convert to cards
- Touch-friendly buttons and inputs
- Optimized modal sizes

## ⌨️ Keyboard Shortcuts

Coming in next iteration:
- `Ctrl + K` - Global search
- `Ctrl + ?` - Help menu
- `Escape` - Close modals

## 📈 Performance

- **No external dependencies** (Chart.js is the only library)
- **Optimized CSS** with critical styles inline
- **Minimal JavaScript** - Vanilla JS, no frameworks
- **Local Storage** for session persistence
- **Fast load times** on modern browsers

## 🐛 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## 🎓 Learning Resources

### Included Code Patterns
- Component-based HTML structure
- CSS Grid & Flexbox layouts
- Responsive design techniques
- Modal implementation
- Form handling
- Data visualization
- Local storage management

## 📝 Notes

- All functionality is client-side for demo purposes
- Replace mock data with real API calls
- Implement proper authentication/authorization
- Add error handling and validation
- Set up proper logging and monitoring
- Test thoroughly before production deployment

## 🔄 Future Enhancements

- [ ] Real-time notifications with WebSocket
- [ ] Advanced reporting with PDF export
- [ ] User activity logs and audit trail
- [ ] Multi-user roles and permissions
- [ ] Dark mode theme
- [ ] Advanced analytics dashboards
- [ ] Bulk operations
- [ ] Custom report builder

## 📞 Support

For issues or questions about the admin panel:
- Check the code comments
- Review the design system in CSS
- Test with mock data
- Validate HTML structure

---

**Built with ❤️ for HTECHSUBS VTU Platform**
*Premium Admin Dashboard | Modern Design | Production Ready*
"# htechsubsadmin" 
