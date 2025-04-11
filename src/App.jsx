import { useState } from 'react';
import { Web3Storage } from 'web3.storage';
import BlogABI from './abi/Blog.json'; // 如果你不需要連合約，也可以刪掉這行

const BLOG_CONTRACT_ADDRESS = '0x000000000000000000000000000000000000dead'; // TEMPORARY
const web3Token = 'YOUR_WEB3STORAGE_TOKEN'; // IPFS token，如果不使用 IPFS 可留空

export default function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const uploadToIPFS = async (data) => {
    if (!web3Token) {
      alert('No Web3.Storage token provided');
      return 'demo-ipfs-hash-placeholder';
    }
    const client = new Web3Storage({ token: web3Token });
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const file = new File([blob], 'post.json');
    const cid = await client.put([file]);
    return cid + '/post.json';
  };

  const createPost = async () => {
    const ipfsHash = await uploadToIPFS({ title, content });
    console.log("Post created (demo):", {
      title,
      ipfsHash,
    });
    alert('Demo: Post created (not on chain)');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Dblog - Decentralized Blog (Demo)</h1>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Post Content"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={createPost}>
        Publish
      </button>
    </div>
  );
}
