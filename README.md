# 📝 Dblog - Decentralized Blog

This is a decentralized blog platform built using Solidity, IPFS, The Graph, and React.

## 🚀 Getting Started

### Smart Contract

1. Compile:
```bash
npx hardhat compile
```

2. Deploy locally:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### Frontend

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Replace the contract address in `src/App.jsx`.

## 🛰 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [Vercel](https://vercel.com), import your GitHub repo
3. Deploy instantly to `https://dblog.vercel.app`

## 📦 Notes

- Make sure to replace `YOUR_WEB3STORAGE_TOKEN` in `App.jsx`
- The contract address must be updated after deployment

## License

MIT
