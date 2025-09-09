This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Environment & EmailJS Setup

This project uses **Next.js** and **EmailJS**. You need a local env file and an EmailJS template.

### 1) Create `.env.local`
> Do **not** commit this file. Next.js already git-ignores it by default.

```bash
# Recipient (public at runtime)
NEXT_PUBLIC_CONTACT_TO_EMAIL=xxx@xxx.xx

# (Optional but recommended to avoid hardcoding)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_xxx
```


to contact me: lmekkeddemoussama@gmail.com

good luck