# ROLIO-HIREON

A scalable and feature-rich hiring and networking platform built with **Next.js**, **TypeScript**, and **NextAuth**, integrating real-time posts, user authentication, and a social feed system for professionals and recruiters.

---

## 1. Overview

**ROLIO-HIREON** enables recruiters and job seekers to connect, share updates, and manage opportunities in one place.  
The platform merges the familiarity of a social media feed with hiring features such as post creation, likes, comments, and secure authentication.

---

## 2. Tech Stack

| Layer | Technologies Used |
|--------|--------------------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, ShadCN/UI |
| **Backend** | Next.js App Router APIs, Node.js, Express-like handlers |
| **Database** | MongoDB (via Mongoose ORM) |
| **Authentication** | NextAuth (Credentials Provider) |
| **Security** | bcrypt.js password hashing, JWT sessions |
| **Deployment** | Vercel (Frontend & API) |
| **Version Control** | Git + GitHub |

---

## 3. Features

| Category | Description |
|-----------|-------------|
| **Authentication** | Secure login and signup using email/password (NextAuth + JWT) |
| **User Profile** | Editable profiles with avatar and professional title |
| **Feed System** | Create, like, comment, and share posts in real-time |
| **Image Uploads** | Upload profile and post images securely |
| **Responsive UI** | Optimized for desktop and mobile views |
| **Dark Mode** | Adaptive UI using Tailwind’s dark mode |
| **CORS Config** | Supports multiple origins for API integration |

---

## 4. Folder Structure

```bash
ROLIO-HIREON/
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── api/            # Backend APIs (auth, posts, likes, comments)
│   │   ├── (feed)/         # Feed pages
│   │   ├── login/          # User login & authentication pages
│   │   └── profile/        # User profiles
│   ├── components/         # UI Components (PostCard, CreatePost, etc.)
│   ├── models/             # MongoDB models (User, Post, Comment)
│   ├── utils/              # Utility functions & DB connection
│   └── auth.ts             # NextAuth configuration (v5 syntax)
├── public/                 # Static assets (images, icons)
├── .env.local              # Environment variables
├── package.json
├── next.config.js
└── README.md
```

---

## 5. Environment Variables

| Variable | Description |
|-----------|-------------|
| `MONGODB_URI` | Connection string for MongoDB |
| `NEXTAUTH_SECRET` | Secret key for JWT session encryption |
| `NEXTAUTH_URL` | Base URL of your deployed app |
| `CLOUDINARY_URL` | (Optional) For image upload storage |

---

## 6. Installation & Setup

```bash
# Clone the repository
git clone https://github.com/AarushiDaksh/ROLIO-HIREON.git
cd ROLIO-HIREON

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# (then fill in your keys)

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

---

## 7. API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/auth/[...nextauth]` | User login/signup (NextAuth) |
| **POST** | `/api/posts` | Create a new post |
| **GET** | `/api/posts` | Fetch all posts |
| **POST** | `/api/posts/[id]/like` | Like a post |
| **DELETE** | `/api/posts/[id]/like` | Unlike a post |
| **POST** | `/api/posts/[id]/comment` | Add a comment |
| **GET** | `/api/profile` | Fetch logged-in user data |

---

## 8. Deployment

1. Push code to **GitHub**.
2. Connect repository to **Vercel**.
3. Add environment variables under *Project → Settings → Environment Variables*.
4. Deploy.

---

## 9. Future Enhancements

| Area | Planned Improvement |
|------|----------------------|
| **Real-Time Updates** | WebSocket integration for live notifications |
| **Recruiter Tools** | Job post creation, candidate search, analytics |
| **AI Suggestions** | Smart profile recommendations |
| **Performance** | Redis caching for faster feed rendering |

---
## 10. Author

**Aarushi Daksh**  
Developer | 
[GitHub Profile](https://github.com/AarushiDaksh)  |
[Portfolio](https://www.aarushi.cloud/)
