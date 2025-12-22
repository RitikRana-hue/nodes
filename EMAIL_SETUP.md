# 📧 Email Setup Guide - NodesIO Contact Form (Hostinger)

## ✅ **Email Functionality Implemented!**

The contact form now sends emails from `sales@nodesio.in` to `support@nodesio.in` when users submit the form.

## 🔧 **Hostinger Email Setup**

### 1. Environment Variables

Create a `.env.local` file in your project root:

```bash
# Hostinger Email Configuration
EMAIL_USER=sales@nodesio.in
EMAIL_PASSWORD=i$4odVbaY
```

### 2. Hostinger SMTP Settings

The email service is configured with Hostinger's SMTP settings:
- **Host**: `smtp.hostinger.com`
- **Port**: `587`
- **Security**: STARTTLS
- **Authentication**: Username/Password

### 3. Email Account Setup

Make sure your Hostinger email account:
1. **Email exists**: `sales@nodesio.in` is created in Hostinger panel
2. **Password correct**: Use the actual email password
3. **SMTP enabled**: Hostinger enables SMTP by default
4. **No 2FA conflicts**: Ensure no additional authentication blocks

### 4. Alternative Hostinger Ports

If port 587 doesn't work, try these alternatives:

**Option 1: Port 465 (SSL)**
```bash
host: smtp.hostinger.com
port: 465
secure: true
```

**Option 2: Port 25 (Legacy)**
```bash
host: smtp.hostinger.com
port: 25
secure: false
```

## 📋 **Features Implemented**

### ✅ **Contact Form Processing**
- Form validation (required fields, email format)
- Secure API endpoint (`/api/contact`)
- Professional HTML email templates
- Error handling and user feedback

### ✅ **Email Features**
- **To Support**: Formatted email sent to `support@nodesio.in`
- **Auto-Reply**: Confirmation email sent to user
- **Professional Design**: HTML templates with NodesIO branding
- **Rich Content**: Contact details, message, timestamps

### ✅ **User Experience**
- Loading states during submission
- Success/error messages with icons
- Form reset after successful submission
- Responsive design

## 🔍 **Email Content**

### Support Email Includes:
- Contact person's full name
- Email address (with reply-to functionality)
- Company/organization
- Selected subject category
- Full message content
- Timestamp (IST timezone)
- Professional NodesIO branding

### Auto-Reply Includes:
- Personalized greeting
- Confirmation of message receipt
- Next steps information
- Contact information
- Professional signature

## 🚀 **Testing**

1. **Local Testing**: Use Gmail with app password
2. **Form Submission**: Fill out contact form on `/contact`
3. **Check Logs**: Monitor console for email sending status
4. **Verify Delivery**: Check `support@nodesio.in` inbox

## 🔒 **Security Features**

- Input validation and sanitization
- Email format validation
- Rate limiting (can be added)
- Environment variable protection
- Error handling without exposing sensitive data

## 📞 **Production Deployment**

1. Set up professional SMTP service
2. Configure environment variables on server
3. Test email delivery
4. Monitor email logs
5. Set up email monitoring/alerts

## 🛠 **Customization Options**

The email service can be easily customized:
- Change email templates in `lib/emailService.ts`
- Modify recipient addresses
- Add CC/BCC recipients
- Include attachments
- Add email tracking
- Integrate with CRM systems

Your contact form is now fully functional and ready for production! 🎉