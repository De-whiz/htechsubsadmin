// Admin Panel Helper Functions
// Shared across all pages

// Toggle sidebar menu
function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    if (submenu) {
        submenu.classList.toggle('show');
        const btn = event.target.closest('.sidebar-menu-link').querySelector('.sidebar-menu-toggle');
        if (btn) {
            btn.style.transform = submenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-NG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}

// Show notification toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div style="flex: 1;">${message}</div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: currentColor; cursor: pointer; font-size: 16px;">x</button>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Show popup notification
function showPopupNotification(title, message, type = 'info') {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 350px;
        z-index: 2000;
        animation: slideInRight 0.3s ease;
    `;
    
    let icon = '🔔';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '✕';
    if (type === 'warning') icon = '!';
    
    notif.innerHTML = `
        <div style="display: flex; gap: 10px;">
            <div style="font-size: 20px;">${icon}</div>
            <div style="flex: 1;">
                <h4 style="margin: 0 0 5px 0; color: #0F172A; font-weight: 600;">${title}</h4>
                <p style="margin: 0; color: #64748B; font-size: 13px;">${message}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 18px; color: #94A3B8; cursor: pointer;">x</button>
        </div>
    `;
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 5000);
}

// Show image notification
function showImageNotification(title, message, imageUrl) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 350px;
        z-index: 2000;
        animation: slideInRight 0.3s ease;
    `;
    
    notif.innerHTML = `
        <div style="position: relative;">
            <img src="${imageUrl}" style="width: 100%; height: 150px; object-fit: cover; display: block;">
            <div style="padding: 15px;">
                <h4 style="margin: 0 0 5px 0; color: #0F172A; font-weight: 600;">${title}</h4>
                <p style="margin: 0; color: #64748B; font-size: 13px;">${message}</p>
            </div>
            <button onclick="this.closest('div').parentElement.remove()" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.5); border: none; color: white; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">x</button>
        </div>
    `;
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 6000);
}

// Load notification preferences
function loadNotificationPreferences() {
    const prefs = JSON.parse(localStorage.getItem('notificationPreferences') || '{}');
    
    if (prefs.type) {
        document.querySelectorAll('input[name="notificationType"]').forEach(el => {
            el.checked = el.value === prefs.type;
        });
    }
    
    if (prefs.enableTransactions !== undefined) {
        document.getElementById('enableTransactions').checked = prefs.enableTransactions;
    }
    if (prefs.enableUsers !== undefined) {
        document.getElementById('enableUsers').checked = prefs.enableUsers;
    }
    if (prefs.enableRevenue !== undefined) {
        document.getElementById('enableRevenue').checked = prefs.enableRevenue;
    }
    if (prefs.enableAlerts !== undefined) {
        document.getElementById('enableAlerts').checked = prefs.enableAlerts;
    }
}

// Save notification preferences
function saveNotificationPreferences() {
    const prefs = {
        type: document.querySelector('input[name="notificationType"]:checked').value,
        enableTransactions: document.getElementById('enableTransactions').checked,
        enableUsers: document.getElementById('enableUsers').checked,
        enableRevenue: document.getElementById('enableRevenue').checked,
        enableAlerts: document.getElementById('enableAlerts').checked
    };
    
    localStorage.setItem('notificationPreferences', JSON.stringify(prefs));
    showToast('Notification preferences saved successfully!', 'success');
}

// Get notification preferences
function getNotificationPreferences() {
    return JSON.parse(localStorage.getItem('notificationPreferences') || '{"type":"popup","enableTransactions":true,"enableUsers":true,"enableRevenue":true,"enableAlerts":true}');
}

// Send notification based on preferences
function sendNotification(notifType, title, message, imageUrl = null) {
    const prefs = getNotificationPreferences();
    
    // Check if this notification type is enabled
    if (notifType === 'transaction' && !prefs.enableTransactions) return;
    if (notifType === 'user' && !prefs.enableUsers) return;
    if (notifType === 'revenue' && !prefs.enableRevenue) return;
    if (notifType === 'alert' && !prefs.enableAlerts) return;
    
    // Send notification based on preference type
    if (prefs.type === 'popup' || prefs.type === 'both') {
        showPopupNotification(title, message);
    }
    
    if ((prefs.type === 'image' || prefs.type === 'both') && imageUrl) {
        showImageNotification(title, message, imageUrl);
    }
}

// Confirm dialog
function confirmAction(message) {
    return confirm(message);
}

// Logout function (shared)
function logout() {
    if (confirmAction('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLogged');
        localStorage.removeItem('adminEmail');
        window.location.href = 'login.html';
    }
}

// Get admin info
function getAdminInfo() {
    return {
        email: localStorage.getItem('adminEmail') || 'admin@htechsubs.com',
        isLoggedIn: localStorage.getItem('adminLogged') === 'true'
    };
}

// Check authentication
function checkAuth() {
    if (localStorage.getItem('adminLogged') !== 'true') {
        window.location.href = 'login.html';
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export data to CSV
function exportToCSV(data, filename = 'export.csv') {
    let csv = [];
    
    // Add headers
    if (data.length > 0) {
        csv.push(Object.keys(data[0]).join(','));
    }
    
    // Add rows
    data.forEach(row => {
        csv.push(Object.values(row).map(val => `"${val}"`).join(','));
    });
    
    // Create blob and download
    const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Calculate statistics
function calculateStats(transactions) {
    return {
        total: transactions.length,
        successful: transactions.filter(t => t.status === 'successful').length,
        failed: transactions.filter(t => t.status === 'failed').length,
        pending: transactions.filter(t => t.status === 'pending').length,
        totalAmount: transactions.reduce((sum, t) => sum + t.amount, 0)
    };
}

// Local storage helpers
const StorageHelper = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => JSON.parse(localStorage.getItem(key)) || null,
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
};

// API helpers
const API = {
    baseUrl: 'https://api.htechsubs.com/api',
    
    get: async (endpoint) => {
        try {
            const response = await fetch(`${API.baseUrl}${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken') || ''}`
                }
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            showToast('Error fetching data', 'danger');
            return null;
        }
    },
    
    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${API.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken') || ''}`
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            showToast('Error sending data', 'danger');
            return null;
        }
    },
    
    put: async (endpoint, data) => {
        try {
            const response = await fetch(`${API.baseUrl}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken') || ''}`
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            showToast('Error updating data', 'danger');
            return null;
        }
    },
    
    delete: async (endpoint) => {
        try {
            const response = await fetch(`${API.baseUrl}${endpoint}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken') || ''}`
                }
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            showToast('Error deleting data', 'danger');
            return null;
        }
    }
};

// Form validation
const Validation = {
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    phone: (phone) => /^[\d\s\-\+]+$/.test(phone),
    password: (password) => password.length >= 8,
    required: (value) => value.trim() !== '',
    
    validate: (formData, rules) => {
        const errors = {};
        Object.keys(rules).forEach(field => {
            const rule = rules[field];
            const value = formData[field];
            
            if (rule.required && !Validation.required(value)) {
                errors[field] = `${field} is required`;
            }
            
            if (rule.type === 'email' && value && !Validation.email(value)) {
                errors[field] = 'Invalid email address';
            }
            
            if (rule.type === 'phone' && value && !Validation.phone(value)) {
                errors[field] = 'Invalid phone number';
            }
            
            if (rule.minLength && value.length < rule.minLength) {
                errors[field] = `${field} must be at least ${rule.minLength} characters`;
            }
        });
        
        return errors;
    }
};

// Chart helpers
const ChartHelpers = {
    defaultOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    font: { family: "'SF Pro Display', 'Inter', system-ui, sans-serif" },
                    color: '#6B7280'
                }
            }
        }
    },
    
    generateColor: () => `hsl(${Math.random() * 360}, 70%, 60%)`
};

// Pagination helper
class Paginator {
    constructor(items, perPage = 10) {
        this.items = items;
        this.perPage = perPage;
        this.currentPage = 1;
    }
    
    getPage(pageNum) {
        const start = (pageNum - 1) * this.perPage;
        return this.items.slice(start, start + this.perPage);
    }
    
    getTotalPages() {
        return Math.ceil(this.items.length / this.perPage);
    }
    
    nextPage() {
        if (this.currentPage < this.getTotalPages()) {
            this.currentPage++;
        }
        return this.getPage(this.currentPage);
    }
    
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        return this.getPage(this.currentPage);
    }
}

// Initialize sidebar toggle - Called immediately and on DOMContentLoaded
function initSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && sidebar) {
        // Remove any existing listeners to avoid duplicates
        const newToggle = sidebarToggle.cloneNode(true);
        sidebarToggle.parentNode.replaceChild(newToggle, sidebarToggle);
        
        // Add the click handler
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.toggle('show');
        }, false);
        
        return true;
    }
    return false;
}

// Initialize admin panel
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    checkAuth();
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Global sidebar toggle - Initialize with fallback
    if (!initSidebarToggle()) {
        console.warn('Sidebar toggle elements not found');
    }
});

// Try to initialize sidebar toggle immediately if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebarToggle);
} else {
    // DOM is already loaded
    initSidebarToggle();
}

// Utility functions
const Utils = {
    truncate: (str, length = 50) => str.length > length ? str.substring(0, length) + '...' : str,
    
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    
    deepClone: (obj) => JSON.parse(JSON.stringify(obj)),
    
    randomId: () => Math.random().toString(36).substr(2, 9),
    
    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms))
};

// Admin Messages Functions
function sendMessageToAllUsers() {
    const title = document.getElementById('messageTitle')?.value;
    const content = document.getElementById('messageContent')?.value;
    const type = document.getElementById('messageType')?.value || 'info';
    
    if (!title || !content) {
        showToast('Please fill in both title and message content', 'warning');
        return;
    }
    
    // Create message object
    const message = {
        id: Utils.randomId(),
        title: title,
        content: content,
        type: type,
        timestamp: new Date().toISOString(),
        readBy: []
    };
    
    // Get existing messages
    let allMessages = JSON.parse(localStorage.getItem('adminMessages') || '[]');
    
    // Add new message
    allMessages.push(message);
    
    // Save to localStorage
    localStorage.setItem('adminMessages', JSON.stringify(allMessages));
    
    // Show success notification
    showToast('Message sent to all users!', 'success');
    
    // Reset form
    resetMessageForm();
    
    // Show popup notification preview for admin
    showPopupNotification(title, content, type);
}

function resetMessageForm() {
    const titleInput = document.getElementById('messageTitle');
    const contentInput = document.getElementById('messageContent');
    const typeSelect = document.getElementById('messageType');
    
    if (titleInput) titleInput.value = '';
    if (contentInput) contentInput.value = '';
    if (typeSelect) typeSelect.value = 'info';
}

function getAdminMessages() {
    return JSON.parse(localStorage.getItem('adminMessages') || '[]');
}

function displayAdminMessagesOnDashboard() {
    const messages = getAdminMessages();
    
    if (messages.length === 0) return;
    
    // Get current user ID or session
    const currentUser = localStorage.getItem('currentUserId') || 'user_' + Date.now();
    
    // Filter unread messages
    const unreadMessages = messages.filter(msg => !msg.readBy.includes(currentUser));
    
    // Display each unread message
    unreadMessages.forEach((msg, index) => {
        // Stagger the notification display
        setTimeout(() => {
            if (msg.type === 'popup' || !msg.type || msg.type === 'info' || msg.type === 'warning' || msg.type === 'success' || msg.type === 'error') {
                showPopupNotification(msg.title, msg.content, msg.type || 'info');
            }
            
            // Mark as read
            msg.readBy.push(currentUser);
            let allMessages = JSON.parse(localStorage.getItem('adminMessages') || '[]');
            const msgIndex = allMessages.findIndex(m => m.id === msg.id);
            if (msgIndex >= 0) {
                allMessages[msgIndex] = msg;
                localStorage.setItem('adminMessages', JSON.stringify(allMessages));
            }
        }, index * 2000); // Display messages 2 seconds apart
    });
}
