// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// "use client";

// import { useState, useRef } from 'react';
// import Head from 'next/head';

// export default function Home() {
//   const [recording, setRecording] = useState(false);
//   const [videoUrl, setVideoUrl] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const videoRef = useRef(null);
//   const chunks = useRef([]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: { mediaSource: 'screen' },
//         audio: true,
//       });

//       mediaRecorderRef.current = new MediaRecorder(stream, {
//         mimeType: 'video/webm',
//       });

//       mediaRecorderRef.current.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           chunks.current.push(event.data);
//         }
//       };

//       mediaRecorderRef.current.onstop = () => {
//         const blob = new Blob(chunks.current, { type: 'video/webm' });
//         const url = URL.createObjectURL(blob);
//         setVideoUrl(url);
//         chunks.current = [];
//         stream.getTracks().forEach((track) => track.stop());
//       };

//       mediaRecorderRef.current.start();
//       setRecording(true);
//     } catch (err) {
//       console.error('Error starting recording:', err);
//       alert('Failed to start recording. Please allow screen sharing permissions.');
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setRecording(false);
//     }
//   };

//   const downloadVideo = () => {
//     if (videoUrl) {
//       const a = document.createElement('a');
//       a.href = videoUrl;
//       a.download = 'screen-recording.webm';
//       a.click();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <Head>
//         <title>Next.js Screen Recorder</title>
//         <meta name="description" content="A simple screen recorder built with Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Screen Recorder</h1>
//         <div className="flex justify-center gap-4 mb-4">
//           <button
//             onClick={startRecording}
//             disabled={recording}
//             className={`px-4 py-2 rounded-md text-white font-semibold ${
//               recording ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//             }`}
//           >
//             Start Recording
//           </button>
//           <button
//             onClick={stopRecording}
//             disabled={!recording}
//             className={`px-4 py-2 rounded-md text-white font-semibold ${
//               !recording ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
//             }`}
//           >
//             Stop Recording
//           </button>
//         </div>

//         {videoUrl && (
//           <div className="mt-4">
//             <h2 className="text-lg font-semibold mb-2">Recorded Video</h2>
//             <video
//               ref={videoRef}
//               src={videoUrl}
//               controls
//               className="w-full rounded-md shadow-sm"
//             />
//             <button
//               onClick={downloadVideo}
//               className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold"
//             >
//               Download Video
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

















"use client";

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000); // Auto-close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-xs w-full bg-green-500 text-white rounded-lg shadow-lg p-4 animate-toast-in">
      <p className="text-sm font-semibold">{message}</p>
    </div>
  );
};

export default function Home() {
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [toast, setToast] = useState({ message: '', isVisible: false });
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const chunks = useRef([]);

  const showToast = (message) => {
    setToast({ message, isVisible: true });
    setTimeout(() => setToast({ message: '', isVisible: false }), 3000);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: 'screen' },
        audio: true,
      });

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'video/webm',
      });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        chunks.current = [];
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error('Error starting recording:', err);
      showToast('Failed to start recording. Please allow screen sharing permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const saveVideo = async () => {
    if (videoUrl) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: 'screen-recording.webm',
          types: [
            {
              description: 'Video File',
              accept: { 'video/webm': ['.webm'] },
            },
          ],
        });
        const blob = await fetch(videoUrl).then((res) => res.blob());
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        showToast('Video saved successfully!');
      } catch (err) {
        console.error('Error saving video:', err);
        const a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'screen-recording.webm';
        a.click();
        showToast('Save location not supported in this browser. Video downloaded instead.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 animate-gradient">
      <Head>
        <title>Next.js Screen Recorder</title>
        <meta name="description" content="A simple screen recorder with animations built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ message: '', isVisible: false })}
      />

      <main className="max-w-2xl w-full bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 backdrop-blur-md transition-all duration-500 hover:shadow-xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 animate-pulse">Screen Recorder</h1>
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={startRecording}
            disabled={recording}
            className={`px-6 py-3 rounded-full text-white font-semibold transform transition duration-300 hover:scale-105 ${
              recording ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Start Recording
          </button>
          <button
            onClick={stopRecording}
            disabled={!recording}
            className={`px-6 py-3 rounded-full text-white font-semibold transform transition duration-300 hover:scale-105 ${
              !recording ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            Stop Recording
          </button>
        </div>

        {videoUrl && (
          <div className="mt-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Recorded Video</h2>
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              className="w-full rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
            <button
              onClick={saveVideo}
              className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transform transition duration-300 hover:scale-105"
            >
              Save Video
            </button>
          </div>
        )}
      </main>
    </div>
  );
}