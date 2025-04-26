import MemeGenerator from './components/MemeGenerator';

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/BACKGROUND.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
     
      <MemeGenerator />
    </main>
  );
}